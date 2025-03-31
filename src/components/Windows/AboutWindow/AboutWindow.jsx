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
        zIndex: windowState.zIndex,
      }}
    >
      <div className="top-bar" onMouseDown={(e) => handleMouseDown(e, "about")}>
        about-me.txt
      </div>
      <div className="content">
        <img className="pfp" src="/assets/pfp.png" />
        Hello! My name is Yoon / Vayn and I like to create art, code, and play
        games.
        <br />I created this website to showcase some of my creations. welcome
        and hope you stay a while!😊
      </div>
    </div>
  );
};

export default AboutWindow;
