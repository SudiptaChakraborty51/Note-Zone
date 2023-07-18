import { Route, Routes } from "react-router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Landing from "./pages/Landing/landing";
import RequireAuth from "./components/requireAuth";
import Notes from "./pages/Notes/notes";
import Archive from "./pages/Archive/archive";
import Bin from "./pages/Bin/bin";
import Labels from "./pages/Labels/labels";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import Search from "./pages/Search/search";
import Profile from "./pages/Profile/profile";

function App() {
  const { pathName, query, loading } = useContext(AuthContext);
  return (
    <div className="App">
      {loading ? (
        <div className="spinner">
          <ClipLoader size={50} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<RequireAuth />}>
            <Route path="/notes" element={<Notes query={query} />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/bin" element={<Bin />} />
            <Route
              path={`/${pathName}`}
              element={<Labels pathName={pathName} />}
            />
            <Route path="/search" element={<Search query={query} />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      )}

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
    </div>
  );
}

export default App;
