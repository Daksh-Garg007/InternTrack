function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">InternTrack</h1>

      <div className="hidden md:flex items-center gap-4">
        <span>🔔</span>
        <span className="font-semibold">D</span>
      </div>

      <div className="md:hidden">
        ☰
      </div>
    </nav>
  );
}

export default Navbar;