import { useState } from "react";
import "./ArtWindow.css";
import { useWindow } from "../../../contexts/WindowContext";

const ArtWindow = (props) => {
  const { position, windowRef, handleMouseDown } = useWindow();

  return (
    <div 
    className="ArtWindow" 
    ref={windowRef}
    style={{
      top: position.y,
      left: position.x,
    }}
    >
      <div className="top-bar" onMouseDown={handleMouseDown}>my-art</div>
      <div className="content">art!</div>
    </div>
  );
};

export default ArtWindow;
