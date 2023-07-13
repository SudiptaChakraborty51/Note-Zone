import React from "react";
import outlinePin from "../../assets/svg/outlinePin.svg";
import "./toolBar.css";

const ToolBar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-left-container">
        <i className="fa-solid fa-palette" title="choose background color"></i>
        <i className="fa-solid fa-trash-can" title="delete note"></i>
        <i className="fa-solid fa-box-archive" title="archive note"></i>
        <i className="fa-solid fa-tag" title="add label"></i>
        <img src={outlinePin} title="pin note" className="btn-pin" alt="pin" />
      </div>
      <div className="toolbar-right-container">
        <i className="fa-solid fa-circle-check" title="save note"></i>
      </div>
    </div>
  );
};

export default ToolBar;
