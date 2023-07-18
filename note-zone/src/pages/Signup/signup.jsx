import React, { useContext, useState } from "react";
import "./signup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  document.title = "Note Zone | Signup";
  const navigate = useNavigate();

  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isConfirmPasswordHide, setIsConfirmPasswordHide] = useState(true);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    file: null,
  });
  const { signUp } = useContext(AuthContext);

  const imageSelectHandler = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      Math.round(file.size / 1024000) > 1
        ? toast.error("File size should not be more than 1Mb")
        : setUserDetails((prev) => ({
            ...prev,
            file: file,
          }));
    };
    input.click();
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("Password & Confirm password should match!");
    } else {
      try {
        const res = await signUp(userDetails.email, userDetails.password);
        const storageRef = ref(
          storage,
          `${userDetails.firstName + " " + userDetails.lastName}`
        );
        await uploadBytesResumable(storageRef, userDetails.file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName: `${
                  userDetails.firstName + " " + userDetails.lastName
                }`,
                photoURL: userDetails.file ? downloadURL : null,
              });

              localStorage.setItem(
                "user",
                JSON.stringify({
                  uid: res.user.uid,
                  displayName: `${
                    userDetails.firstName + " " + userDetails.lastName
                  }`,
                  email: userDetails.email,
                  photoURL: userDetails.file ? downloadURL : null,
                })
              );
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: `${
                  userDetails.firstName + " " + userDetails.lastName
                }`,
                email: userDetails.email,
                photoURL: userDetails.file ? downloadURL : null,
              });
            } catch (err) {
              console.error(err);
              toast.error(err.message);
            }
          });
        });
        toast.success("Sign in Successful!");
        navigate("/notes");
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmitSignup}>
          <div className="name">
            <div>
              <label htmlFor="first-name">
                First Name <span>*</span>
              </label>
              <input
                id="first-name"
                placeholder="Test"
                required
                value={userDetails.firstName}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="last-name">
                Last Name <span>*</span>
              </label>
              <input
                id="last-name"
                placeholder="Admin"
                required
                value={userDetails.lastName}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              placeholder="test@gmail.com"
              required
              type="email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={isPasswordHide ? "password" : "text"}
                placeholder={isPasswordHide ? "********" : "Enter password"}
                required
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <span
                onClick={() =>
                  setIsPasswordHide((isPasswordHide) => !isPasswordHide)
                }
              >
                {isPasswordHide ? (
                  <i className="fa-regular fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password">
              Confirm Password <span>*</span>
            </label>
            <div className="password-wrapper">
              <input
                id="confirm-password"
                type={isConfirmPasswordHide ? "password" : "text"}
                placeholder={
                  isConfirmPasswordHide ? "********" : "Enter confirm password"
                }
                required
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
              />
              <span
                onClick={() =>
                  setIsConfirmPasswordHide(
                    (isConfirmPasswordHide) => !isConfirmPasswordHide
                  )
                }
              >
                {isConfirmPasswordHide ? (
                  <i className="fa-regular fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </span>
            </div>
          </div>

          <div className="add-avatar-div">
            <label htmlFor="file" onClick={imageSelectHandler}>
              <i className="fa-solid fa-image-portrait"></i>
              <span>
                {userDetails?.file ? userDetails.file.name : "Add an avatar"}
              </span>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>

        <p onClick={() => navigate("/login")}>
          Already have an account <i className="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Signup;
