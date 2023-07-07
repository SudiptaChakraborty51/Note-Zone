import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Landing from "./pages/Landing/landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
