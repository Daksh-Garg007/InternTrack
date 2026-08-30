import ApplicationCard from "../components/ApplicationCard";

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

function Dashboard() {
  return (
    <>
      <h2>Good morning, Daksh 👋</h2>
      <h4>Keep going! Your dream internship is closer than you think.</h4>

      <section>
        <h2>Recent Applications</h2>

        {applications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </section>
    </>
  );
}

export default Dashboard;
