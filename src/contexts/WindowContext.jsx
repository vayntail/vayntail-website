import { createContext, useState, useEffect, useContext, useRef } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const positionRef = useRef({x: 0, y: 0});
  const [position, setPosition] = useState({x: 0, y: 0});
  const windowRef = useRef(null);
  const screenRef = useRef(null);
  const prevScreenSizeRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    console.log("Dragging started!");

    const offsetX = e.clientX - windowRef.current.offsetLeft;
    const offsetY = e.clientY - windowRef.current.offsetTop;

    const handleMouseMove = (e) => {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;
      positionRef.current = { x: newX, y: newY };
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      console.log("Dragging stopped!");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // update previous size
  const updateScreenSize = () => {
    if (screenRef.current) {
      const width = screenRef.current.offsetWidth;
      const height = screenRef.current.offsetHeight;
      prevScreenSizeRef.current = { x: width, y: height };
    }
  };

  // handle position mapping when re-sizing window
  useEffect(() => {
    // initial screen set
    updateScreenSize();

    const handleResize = () => {
        if (windowRef.current) {
            let newX = map(positionRef.current.x, prevScreenSizeRef.current.x, screenRef.current.offsetWidth);
            let newY = map(positionRef.current.y, prevScreenSizeRef.current.y, screenRef.current.offsetHeight);
            positionRef.current = { x: newX, y: newY };
            setPosition({ x: newX, y: newY });
            console.log({ x: newX, y: newY });
        }
        updateScreenSize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function map(value, curMax, newMax) {
    return (value / curMax) * newMax;
  }

  return (
    <WindowContext.Provider value={{position: positionRef, windowRef, screenRef, handleMouseDown}}>
      {children}
    </WindowContext.Provider>
  );
};

// custom hook
export const useWindow = () => useContext(WindowContext);
