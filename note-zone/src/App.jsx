import { Route, Routes } from "react-router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Landing from "./pages/Landing/landing";
import RequireAuth from "./components/requireAuth";
import Notes from "./pages/Notes/notes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
