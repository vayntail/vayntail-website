import { createContext, useState, useEffect, useContext, useRef } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    console.log("Dragging started!");

    const offsetX = e.clientX - windowRef.current.offsetLeft;
    const offsetY = e.clientY - windowRef.current.offsetTop;

    const handleMouseMove = (e) => {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;
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

  return (
    <WindowContext.Provider value={{position, setPosition, windowRef, handleMouseDown}}>
      {children}
    </WindowContext.Provider>
  );
};

// custom hook
export const useWindow = () => useContext(WindowContext);
