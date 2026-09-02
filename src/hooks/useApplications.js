import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

function useApplications() {
  const {
    applications,
    addApplication,
    deleteApplication,
    updateApplication,
  } = useContext(ApplicationContext);

  return {
    applications,
    addApplication,
    deleteApplication,
    updateApplication,
  };
}

export default useApplications;