import { useState } from "react";

function AddApplication() {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    date: "",
    status: "Applied",
    url: "",
    notes: "",
  });
  const [applications, setApplications] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.company) {
      alert("Company name is required");
      return;
    }

    if (!formData.role) {
      alert("Role is required");
      return;
    }

    if (!formData.status) {
      alert("Status is required");
      return;
    }

    setApplications([...applications, formData]);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h2>Add Application</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Job Title</label>
          <input
            type="text"
            name="role"
            placeholder="Job Title"
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
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
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
          <label>Job URL</label>
          <input
            type="url"
            name="url"
            placeholder="Job URL"
            value={formData.url}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Save Application</button>
      </form>
    </div>
  );
}

export default AddApplication;
