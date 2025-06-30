import React, { use, useEffect, useRef } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import Swal from "sweetalert2";

const ViewAssignments = () => {
  const asm = useLoaderData();
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const ref = useRef(null);
  const modalRef = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!user?.email) return;
    const token = localStorage.getItem("access-token");
    axios
      .get(
        `http://localhost:3000/submittedAssignments?examineeEmail=${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  }, [user?.email, asm._id]);

  const handleAsmSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const docUrl = form.docUrl.value;
    const note = form.note.value;
    const status = "pending";
    const examineeEmail = user.email;
    const examineeName = user.displayName;
    const asmId = asm._id;
    const title = asm.title;
    const marks = asm.marks;
    const obtainedMarks = null;
    const feedback = null;

    const submissionInfo = {
      docUrl,
      note,
      status,
      examineeEmail,
      examineeName,
      asmId,
      title,
      marks,
      obtainedMarks,
      feedback,
    };

    const token = localStorage.getItem("access-token");
    axios
      .post("http://localhost:3000/submittedAssignments", submissionInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        modalRef.current.close();
        Swal.fire({
          title: "Successful!",
          text: "Your file has been submitted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          navigate("/all-pending-submission");
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        modalRef.current.close();
        if (err.response?.status === 409) {
          Swal.fire({
            title: "Already Submitted",
            text: "You have already submitted this assignment.",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Can't save file.",
            icon: "error",
          });
        }
      });
    Swal.fire({
      title: "Error!",
      text: "Already Submitted Assignment.",
      icon: "error",
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 sm:py-14 md:py-16 lg:py-20 px-6"
    >
      <div className="card max-w-lg md:max-w-xl lg:max-w-2xl px-6 mx-auto bg-base-300 shadow-sm p-8">
        <figure>
          <img
            src={asm.thumbnailUrl}
            onError={(e) =>
              (e.target.src = "https://i.ibb.co/3mzCRjmZ/image.png")
            }
            alt={asm.title}
            title={asm.title}
            className="w-full rounded-lg"
          />
        </figure>
        <div className="card-body text-heading gap-0">
          <h2 className="card-title text-2xl">{asm.title}</h2>
          <p className="text-lg font-medium mt-5 text-black/80">Description:</p>
          <p className="text-black/80">{asm.description}</p>
          <p className="text-lg mt-5 text-black/80">
            Email:{" "}
            <span className="text-black/80 font-medium">{asm.email}</span>
          </p>

          <p className="mt-3 text-lg text-black/80">
            Marks: <span className="font-bold">{asm.marks}</span>
          </p>
          <p className="mt-3 text-lg text-black/80">
            Due Date: <span className="font-bold">{asm.dueDate}</span>
          </p>
          <p className="mt-3 text-lg text-black/80">
            Difficulty:{" "}
            <span className="capitalize font-bold">{asm.difficulty}</span>
          </p>
        </div>
        <div className="card-actions mt-5">
          <button
            onClick={() => document.getElementById(asm._id).showModal()}
            className="btn btn-lg bg-main text-heading btn-wide mx-auto"
          >
            Take assignment
          </button>
          <dialog ref={modalRef} id={asm._id} className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center">{asm.title}</h3>
              <form
                onSubmit={handleAsmSubmit}
                className="mt-8 flex flex-col gap-4"
              >
                <label className="floating-label w-full">
                  <span>Google Docs link</span>
                  <input
                    required
                    type="text"
                    name="docUrl"
                    placeholder="Google Docs link"
                    className="input input-lg w-full"
                  />
                </label>
                <textarea
                  required
                  name="note"
                  placeholder="Quick note"
                  className="textarea textarea-lg w-full h-32"
                ></textarea>
                <button className="btn btn-lg bg-main text-heading btn-wide mx-auto">
                  Submit
                </button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewAssignments;
