import "./Screen.css";
import { useScreenOrientation } from "../../contexts/ScreenOrientationContext";
import TopBar from "../TopBar/TopBar";
import NavButtons from "../NavButtons/NavButtons";
import Windows from "../Windows/Windows";
import { useEffect, useRef } from "react";
import { useWindow } from "../../contexts/WindowContext";

const Screen = () => {
  const { isMobile, isHorizontal, screenOrientationRef, isPortrait } = useScreenOrientation();
  const { screenRef } = useWindow();

  // when either context refs change, set merged context and update both contexts.
  const mergedScreenRef = useRef(null);
  useEffect(() => {
    if (mergedScreenRef.current) {
      screenOrientationRef.current = mergedScreenRef.current;
      screenRef.current = mergedScreenRef.current;
    }
  }, [screenOrientationRef, screenRef])

  return (
    <div
      ref={mergedScreenRef}
      className={`Screen ${isMobile ? "mobile" : "desktop"} ${
        isHorizontal? "horizontal": "vertical"
      } ${isPortrait ? "portrait" : "landscape"}`}
    >
      <TopBar />
      <NavButtons />
      <Windows />
    </div>
  );
};

export default Screen;
