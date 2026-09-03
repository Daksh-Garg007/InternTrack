import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApplications from "../hooks/useApplications";

function EditApplication() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { applications, updateApplication } = useApplications();

  const application = applications.find(
    (application) => application.id === Number(id)
  );

  const [formData, setFormData] = useState(() => ({
    company: application?.company || "",
    role: application?.role || "",
    location: application?.location || "",
    status: application?.status || "Applied",
    date: application?.date || "",
    url: application?.url || "",
    notes: application?.notes || "",
  }));

  if (!application) {
    return <h2>Application not found</h2>;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateApplication({
      ...application,
      ...formData,
    });

    navigate(`/applications/${id}`);
  }

  return (
    <div>
      <h1>Edit Application</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Application Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Job URL</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditApplication;