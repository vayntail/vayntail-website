import "./Screen.css";
import { useScreenOrientation } from "../../contexts/ScreenOrientationContext";
import TopBar from "../TopBar/TopBar";
import NavButtons from "../NavButtons/NavButtons";
import Windows from "../Windows/Windows";
import { useRef } from "react";
import { useWindow } from "../../contexts/WindowContext";

const Screen = () => {
  const { isMobile, isHorizontal } = useScreenOrientation();
  const { screenRef } = useWindow();

  return (
    <div
      ref={screenRef}
      className={`Screen ${isMobile ? "mobile" : "desktop"} ${
        isHorizontal && "horizontal"
      }`}
    >
      <TopBar />
      <NavButtons />
      <Windows />
    </div>
  );
};

export default Screen;
