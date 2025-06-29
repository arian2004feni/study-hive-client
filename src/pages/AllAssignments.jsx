import { useLoaderData } from "react-router";
import SingleAssignment from "./SingleAssignment";
import axios from "axios";
import Swal from "sweetalert2";
import { use, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const AllAssignments = () => {
  const { user } = use(AuthContext);

  const data = useLoaderData();
  const [assignment, setAssignment] = useState(data);

  const handleDelete = (asm) => {
    if (!user) {
      Swal.fire({
        title: "Please Login first",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          if (user.email === asm.email) {
            axios
              .delete(`http://localhost:3000/assignments/${asm._id}`)
              .then(() => {
                const deletedAsm = data.filter((d) => d._id !== asm._id);
                setAssignment(deletedAsm);

                Swal.fire({
                  title: "Deleted Successfully!",
                  icon: "success",
                });
              })
              .catch(() => {
                Swal.fire({
                  title: "Something is wrong.",
                  icon: "error",
                });
              });
          } else {
            Swal.fire({
              title: "You can't delete other's Assignment.",
              icon: "error",
            });
          }
        }
      });
    }
  };

  return (
    <div className="xl:max-w-10/12 max-lg:max-w-10/12 px-6 max-lg:container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-10 gap-4">
        {assignment.map((asm) => (
          <SingleAssignment
            handleDelete={handleDelete}
            key={asm._id}
            asm={asm}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
