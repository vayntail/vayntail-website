import { createContext, useState, useEffect, useContext } from "react";

const ScreenOrientationContext = createContext();

export const ScreenOrientationProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  // handle re-sizing of window
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      setIsLandscape(isMobile && window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenOrientationContext.Provider value={{ isMobile, isLandscape }}>
      {children}
    </ScreenOrientationContext.Provider>
  );
};

// custom hook
export const useScreenOrientation = () => useContext(ScreenOrientationContext);
