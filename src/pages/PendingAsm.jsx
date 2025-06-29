import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";

const PendingAsm = () => {
  const data = useLoaderData();
  //   console.log(data);

  const handleSubmitMarks = (e, id) => {
    e.preventDefault();

    const form = e.target;
    const obtainedMarks = form.obtainedMarks.value;
    const feedback = form.feedback.value;
    const status = "complete";
    const formData = { obtainedMarks, feedback, status };

    axios
      .patch(`http://localhost:3000/submittedAssignments/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        alert("SUCCESS");
      })
      .catch(() => alert("error"));
  };

  return (
    <div className="xl:max-w-10/12 max-lg:max-w-10/12 px-6 max-lg:container mx-auto py-20">
      <div className="text-4xl text-center text-heading/75 font-bold mb-6">
        Pending Assignments
      </div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table text-center lg:table-md sm:table-sm table-xs">
          {/* head */}
          <thead>
            <tr className="lg:text-base md:text-sm sm:text-xs text-[10px]">
              <th></th>
              <th className="min-w-40">Title</th>
              <th>Total Marks</th>
              <th>Examinee Name</th>
              <th>Action</th>
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
                    className="btn capitalize btn-warning btn-soft"
                    onClick={() => document.getElementById(asm._id).showModal()}
                  >
                    give mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
            <a href={asm.docUrl} target="_blank" className="link link-hover break-words">
              {asm.docUrl}
            </a>
            <p className="py-4 font-bold mt-4">Note:</p>
            <p className="">{asm.note}</p>
            <form
              onSubmit={(e) => handleSubmitMarks(e, asm._id)}
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
    </div>
  );
};

export default PendingAsm;
