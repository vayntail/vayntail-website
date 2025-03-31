import { useState } from "react";
import "./CodeWindow.css";
import { useWindow } from "../../../contexts/WindowContext";

const CodeWindow = (props) => {
  const { windowState, handleMouseDown } = useWindow("code");

  return (
    <div
      className="CodeWindow"
      ref={windowState.ref}
      style={{
        top: windowState.position.y,
        left: windowState.position.x,
        zIndex: windowState.zIndex,
      }}
    >
      <div className="top-bar" onMouseDown={(e) => handleMouseDown(e, "code")}>
        code
      </div>
      <div className="content">code</div>
    </div>
  );
};

export default CodeWindow;
