import { useState } from "react";
import "./AboutWindow.css";
import { useWindow } from "../../../contexts/WindowContext";

const AboutWindow = (props) => {
  const { windowState, handleMouseDown } = useWindow("about");

  return (
    <div     
    className="AboutWindow"
    ref={windowState.ref}
    style={{
      top: windowState.position.y,
      left: windowState.position.x,
    }}
    >
      <div className="top-bar" onMouseDown={(e) => handleMouseDown(e, "about")}>about-me</div>
      <div className="content"><img className="pfp" src="/assets/pfp.png"/></div>
    </div>
  );
};

export default AboutWindow;
