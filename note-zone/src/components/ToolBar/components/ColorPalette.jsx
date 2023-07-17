import React, { useState } from "react";
import "./toolBarComponents.css";

const ColorPalette = ({ changeBg }) => {
  const [showColors, setShowColors] = useState(false);

  return (
    <div>
      <i
        className="fa-solid fa-palette"
        title="choose background color"
        onClick={() => setShowColors((prev) => !prev)}
      ></i>
      {showColors && (
        <>
          <div className="colors-palatte-container">
            <span
              className="colors bg-white"
              onClick={() => {
                changeBg("bg-white");
                setShowColors(false);
              }}
            ></span>
            <span
              className="colors bg-orange"
              onClick={() => {
                changeBg("bg-orange");
                setShowColors(false);
              }}
            ></span>
            <span
              className="colors bg-green"
              onClick={() => {
                changeBg("bg-green");
                setShowColors(false);
              }}
            ></span>
            <span
              className="colors bg-red"
              onClick={() => {
                changeBg("bg-red");
                setShowColors(false);
              }}
            ></span>
            <span
              className="colors bg-indigo"
              onClick={() => {
                changeBg("bg-indigo");
                setShowColors(false);
              }}
            ></span>
            <span
              className="colors bg-yellow"
              onClick={() => {
                changeBg("bg-yellow");
                setShowColors(false);
              }}
            ></span>
            <span
              className="colors bg-purple"
              onClick={() => {
                changeBg("bg-purple");
                setShowColors(false);
              }}
            ></span>
          </div>
        </>
      )}
    </div>
  );
};

export default ColorPalette;
