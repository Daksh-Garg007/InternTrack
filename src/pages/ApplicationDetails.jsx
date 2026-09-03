import { useParams, useNavigate } from "react-router-dom";
import useApplications from "../hooks/useApplications";

function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    applications,
    deleteApplication,
  } = useApplications();

  const application = applications.find(
    (application) => application.id === Number(id)
  );

  if (!application) {
    return <h2>Application not found</h2>;
  }

  function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) {
      return;
    }

    deleteApplication(Number(id));

    navigate("/applications");
  }

  return (
    <div>
      <h1>{application.company}</h1>

      <h2>{application.role}</h2>

      <p>{application.location}</p>

      <p>Status: {application.status}</p>

      <p>Application Date: {application.date}</p>

      <p>
        Job URL:{" "}
        <a
          href={application.url}
          target="_blank"
          rel="noreferrer"
        >
          View Job
        </a>
      </p>

      <p>Notes: {application.notes}</p>

      <button
        onClick={() => navigate(`/applications/${id}/edit`)}
      >
        Edit Application
      </button>

      <button onClick={handleDelete}>
        Delete Application
      </button>
    </div>
  );
}

export default ApplicationDetails;