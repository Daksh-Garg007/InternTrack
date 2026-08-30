function ApplicationCard({ application }) {
  return (
    <div>
      <h3>{application.company}</h3>
      <h4>{application.role}</h4>
      <h4>{application.status}</h4>
      <h4>{application.date}</h4>
    </div>
  );
}

export default ApplicationCard;