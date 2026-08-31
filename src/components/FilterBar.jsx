function FilterBar({ setStatus }) {
  return (
    <div>
      <button onClick={() => setStatus("All")}>All</button>
      <button onClick={() => setStatus("Applied")}>Applied</button>
      <button onClick={() => setStatus("OA")}>OA</button>
      <button onClick={() => setStatus("Interview")}>Interview</button>
      <button onClick={() => setStatus("Selected")}>Selected</button>
      <button onClick={() => setStatus("Rejected")}>Rejected</button>
    </div>
  );
}

export default FilterBar;