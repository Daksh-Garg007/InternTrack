import { createContext, useState } from "react";

export const ApplicationContext = createContext();

function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([]);

  function addApplication(application) {
    setApplications([
      ...applications,
      application,
    ]);
  }

  function deleteApplication(id) {
    setApplications(
      applications.filter(
        (application) => application.id !== id
      )
    );
  }

  function updateApplication(updatedApplication) {
    setApplications(
      applications.map((application) =>
        application.id === updatedApplication.id
          ? updatedApplication
          : application
      )
    );
  }

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
        updateApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationProvider;