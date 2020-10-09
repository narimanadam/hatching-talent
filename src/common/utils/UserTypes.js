import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useUserType = () => {
  const { AuthState } = useContext(AuthContext);

  const isCandidate = AuthState.type === "Candidate";
  const isAdmin = AuthState.type === "Admin";
  const isEmployer = AuthState.type === "Employer";

  return { isCandidate, isAdmin, isEmployer };
};

export default useUserType;
