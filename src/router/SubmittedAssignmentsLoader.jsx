import axios from "axios";
import { redirect } from "react-router";

export const SubmittedAssignmentsLoader = async ({ params }) => {
  const token = localStorage.getItem("access-token");

  if (!token) {
    return redirect("/login");
  }

  try {
    const res = await axios.get(
      `http://localhost:3000/submittedAssignments?examineeEmail=${params.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    if (err.response && (err.response.status === 401 || err.response.status === 403)) {
      return redirect("/unauthorized");
    }
    throw err;
  }

  // if (res.status === 401 || res.status === 403) {
  //   return redirect("/unauthorized");
  // }
};
