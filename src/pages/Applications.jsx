import { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineering Intern",
    location: "Bangalore",
    status: "Applied",
    date: "20 Aug 2026",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Software Engineer Intern",
    location: "Hyderabad",
    status: "Interview",
    date: "18 Aug 2026",
  },
  {
    id: 3,
    company: "Amazon",
    role: "Frontend Developer Intern",
    location: "Bangalore",
    status: "Applied",
    date: "15 Aug 2026",
  },
  {
    id: 4,
    company: "Flipkart",
    role: "Software Developer Intern",
    location: "Bangalore",
    status: "Rejected",
    date: "12 Aug 2026",
  },
  {
    id: 5,
    company: "TCS",
    role: "System Engineer Intern",
    location: "Delhi",
    status: "Applied",
    date: "10 Aug 2026",
  },
];

function Applications() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredApplications = applications.filter(
    (application) =>
      application.company.toLowerCase().includes(search.toLowerCase()) ||
      application.role.toLowerCase().includes(search.toLowerCase())
  );

  const statusFilteredApplications = filteredApplications.filter(
    (application) => {
      if (status === "All") {
        return true;
      }

      return application.status === status;
    }
  );

  return (
    <div>
      <h1>Applications</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar setStatus={setStatus} />

      <div>
        {statusFilteredApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
          />
        ))}
      </div>
    </div>
  );
}

export default Applications;