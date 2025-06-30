import axios from "axios";

export const SubmittedAssignmentsLoader = async ({ params }) => {
  const token = localStorage.getItem("access-token");

  const res = await axios.get(
    `http://localhost:3000/submittedAssignments?examineeEmail=${params.email}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
