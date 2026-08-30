function ApplicationCard({ application }) {
  return (
    <div>
      <h3>{application.company}</h3>
      <h4>{application.role}</h4>

      <span
        className={
          application.status === "Applied"
            ? "bg-green-200"
            : application.status === "Interview"
              ? "bg-yellow-200"
              : application.status === "OA"
                ? "bg-blue-200"
                : application.status === "Selected"
                  ? "bg-purple-200"
                  : "bg-red-200"
        }
      >
        {application.status}
      </span>

      <h4>{application.date}</h4>
    </div>
  );
}

export default ApplicationCard;
