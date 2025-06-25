import { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Loading from "./Loading";

export default function LoadingPage() {
  const { loading } = use(AuthContext)
  if(loading) {
    return (<Loading />);
  }
  return;
}
