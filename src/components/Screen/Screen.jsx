import TopBar from "../TopBar/TopBar";
import "./Screen.css";
import { useState, useEffect, useRef } from "react";

const Screen = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 480 && window.innerHeight < 3200
  );

  // handle re-sizing of window
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480 && window.innerHeight < 3200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`Screen ${isMobile ? "mobile" : "desktop"}`}>
      <TopBar />
    </div>
  );
};

export default Screen;
