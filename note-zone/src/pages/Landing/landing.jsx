import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.svg";

const Landing = () => {
  document.title = "Note Zone";
  return (
    <div className="landing-container">
      <div className="hero__container">
        <div className="hero__left">
          <h3 className="hero__tagline">
            <span className="hero__highlite">Create.</span> Organize.
            <br />
            <span className="hero__highlite"> Share. </span>Easy.
          </h3>
          <p className="hero__para">
            Remember everything important. A central place for your notes,
            ideas, lists and reminders.
          </p>
          <Link to="/login" className="btn link">
            Try Now
          </Link>
        </div>
        <div className="hero__right">
          <img className="img-res" src={landing} alt="background" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
