import axios from "axios";
import { motion, useInView } from "framer-motion";
import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContext";
import { BsDatabaseFillX } from "react-icons/bs";

const PendingAsm = () => {
  const ref = useRef(null);
  const { user } = use(AuthContext);

  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const data = useLoaderData();
  //   console.log(data);

  const handleSubmitMarks = (e, id) => {
    e.preventDefault();

    const form = e.target;
    const obtainedMarks = form.obtainedMarks.value;
    const feedback = form.feedback.value;
    const status = "complete";
    const formData = { obtainedMarks, feedback, status };

    if (user?.email !== id.examineeEmail) {
      axios
        .patch(`http://localhost:3000/submittedAssignments/${id._id}`, formData)
        .then((res) => {
          console.log(res.data);
          document.getElementById(id._id).close();
          Swal.fire({
            title: "Successful!",
            text: "Mark Assigned Complete.",
            icon: "success",
          });
        })
        .catch(() => {
          document.getElementById(id._id).close();
          Swal.fire({
            title: "Error!",
            text: "Can't Assign Marks",
            icon: "error",
          });
        });
    } else {
      document.getElementById(id._id).close();
      Swal.fire({
        title: "Error!",
        text: "Can't assign marks on your own Assignment",
        icon: "error",
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="xl:max-w-10/12 max-lg:max-w-10/12 px-6 max-lg:container mx-auto py-20"
    >
      <div className="text-xl md:text-2xl lg:text-4xl text-center text-heading/75 font-bold mb-6">
        Pending Assignments
      </div>
      {data.length > 0 ? (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table text-center lg:table-md sm:table-sm table-xs">
            {/* head */}
            <thead>
              <tr className="lg:text-base md:text-sm sm:text-xs text-[10px]">
                <th></th>
                <th className="min-w-40">Title</th>
                <th>Total Marks</th>
                <th>Examinee Name</th>
                <th className="min-w-32">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((asm, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td className="text-left">{asm.title}</td>
                  <td>{asm.marks}</td>
                  <td>{asm.examineeName}</td>
                  <td>
                    <button
                      className="btn btn-xs md:btn-md capitalize btn-warning btn-soft"
                      onClick={() =>
                        document.getElementById(asm._id).showModal()
                      }
                    >
                      give mark
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col gap-5 p-10 rounded-2xl justify-center items-center bg-base-300 max-w-sm mx-auto text-2xl font-bold">
          No Data found <br /> <BsDatabaseFillX className="text-5xl" />
        </div>
      )}
      {data.map((asm) => (
        <dialog key={asm._id} id={asm._id} className="modal">
          <div className="modal-box *:p-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-center text-lg">Assign Mark</h3>
            <p className="py-4 font-bold mt-6">Google Doc Link:</p>
            <a
              href={asm.docUrl}
              target="_blank"
              className="link link-hover break-words"
            >
              {asm.docUrl}
            </a>
            <p className="py-4 font-bold mt-4">Note:</p>
            <p className="">{asm.note}</p>
            <form
              onSubmit={(e) => handleSubmitMarks(e, asm)}
              className="fieldset rounded-box p-4 mt-4"
            >
              <label className="floating-label mb-2 w-full">
                <span>Assign Marks</span>
                <input
                  type="number"
                  name="obtainedMarks"
                  min={0}
                  max={asm.marks}
                  required
                  placeholder="Assign Marks"
                  className="input input-md w-full"
                />
              </label>

              <label className="floating-label w-full">
                <span>Feedback</span>
                <input
                  type="text"
                  name="feedback"
                  placeholder="Feedback"
                  className="input input-md w-full"
                />
              </label>

              <button className="btn btn-neutral mt-4">Submit</button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}
    </motion.div>
  );
};

export default PendingAsm;
