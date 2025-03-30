import { useState } from "react";
import "./ArtWindow.css";
import { useWindow } from "../../../contexts/WindowContext";

const ArtWindow = (props) => {
  const { windowState, handleMouseDown } = useWindow("art");

  return (
    <div 
    className="ArtWindow" 
    ref={windowState.ref}
    style={{
      top: windowState.position.y,
      left: windowState.position.x,
    }}
    >
      <div className="top-bar" onMouseDown={(e) => handleMouseDown(e, "art")}>my-art</div>
      <div className="content">art!</div>
    </div>
  );
};

export default ArtWindow;
