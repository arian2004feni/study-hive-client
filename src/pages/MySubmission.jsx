import React from "react";
import { useLoaderData } from "react-router";

const MySubmission = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="xl:max-w-10/12 max-lg:max-w-10/12 px-6 max-lg:container mx-auto py-20">

      <div className="text-4xl text-center text-heading/75 font-bold mb-6">My Submission</div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table text-center lg:table-md sm:table-sm table-xs">
          {/* head */}
          <thead>
            <tr className="lg:text-base md:text-sm sm:text-xs text-[10px]">
              <th></th>
              <th className="min-w-40">Title</th>
              <th className="hidden sm:table-cell">Status</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
              <th className="hidden md:table-cell">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {data.map((asm, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td className="text-left">{asm.title}</td>
                <td className="hidden sm:table-cell capitalize">
                  <span className={`badge badge-xs sm:badge-sm lg:badge-md badge-soft ${asm.status == 'pending' ? 'badge-warning' : 'badge-success'}`}>{asm.status}</span>
                </td>
                <td>{asm.marks}</td>
                <td>{asm.obtainedMarks !== null ? asm.obtainedMarks : "-"}</td>
                <td className="hidden md:table-cell">{asm.feedback !== null ? asm.feedback : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmission;
