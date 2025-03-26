import TopBar from "../TopBar/TopBar";
import "./Screen.css";
import { useState, useEffect, useRef } from "react";
import { useScreenOrientation } from "../../contexts/ScreenOrientationContext";

const Screen = () => {
  const { isMobile } = useScreenOrientation();

  return (
    <div className={`Screen ${isMobile ? "mobile" : "desktop"}`}>
      <TopBar />
    </div>
  );
};

export default Screen;
