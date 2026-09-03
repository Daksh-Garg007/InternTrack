import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import ApplicationDetails from "./pages/ApplicationDetails";
import AddApplication from "./pages/AddApplication";
import EditApplication from "./pages/EditApplication";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/applications/:id" element={<ApplicationDetails />} />

        <Route path="/add" element={<AddApplication />} />

        <Route path="/applications/:id/edit" element={<EditApplication />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
