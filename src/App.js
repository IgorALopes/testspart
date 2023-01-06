import { Routes, Route } from "react-router-dom"
import { UserDetails } from "./pages/UserDetails";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:login/details" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
