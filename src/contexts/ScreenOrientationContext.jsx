import { createContext, useState, useEffect, useContext, useRef } from "react";

const ScreenOrientationContext = createContext();

export const ScreenOrientationProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480 || window.innerHeight < 270);
  const [isHorizontal, setIsHorizontal] = useState(
    window.innerWidth > window.innerHeight
  );
  // if window is re-sized in a way where black bars appear at top and bottom, it is a portrait.
  // if it appears at left and right, it is not a portrait, but a landscape.
  const [isPortrait, setIsPortrait] = useState(null); 
  const screenOrientationRef = useRef(null);

  // handle re-sizing of window
  useEffect(() => {
    setIsPortrait(window.innerHeight > screenOrientationRef.current.clientHeight);
    console.log(window.innerHeight > screenOrientationRef.current.clientHeight)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 480 || window.innerHeight < 270);
      setIsHorizontal(window.innerWidth > window.innerHeight);
      setIsPortrait(window.innerHeight > screenOrientationRef.current.clientHeight);

      // test logs
      console.log(window.innerHeight > screenOrientationRef.current.clientHeight)
      console.log(window.innerWidth < 480 || window.innerHeight < 270, window.innerWidth > window.innerHeight)
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenOrientationContext.Provider value={{ isMobile, isPortrait, isHorizontal, screenOrientationRef }}>
      {children}
    </ScreenOrientationContext.Provider>
  );
};

// custom hook
export const useScreenOrientation = () => useContext(ScreenOrientationContext);
