import "./Screen.css";
import { useScreenOrientation } from "../../contexts/ScreenOrientationContext";
import TopBar from "../TopBar/TopBar";
import NavButtons from "../NavButtons/NavButtons";
import Windows from "../Windows/Windows";

const Screen = () => {
  const { isMobile, isHorizontal } = useScreenOrientation();

  return (
    <div
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
