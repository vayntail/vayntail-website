import { createContext, useState, useContext } from "react";

const WindowResizeContext = createContext();

export const WindowResizeProvider = ({ children }) => {
  const [windowSizes, setWindowSizes] = useState({
    about: { width: 300, height: 200 },
    art: { width: 300, height: 200 },
    code: { width: 300, height: 200 },
  });

  // resize function
  const resizeWindow = (windowName, newWidth, newHeight) => {
    setWindowSizes((prevSizes) => ({
      ...prevSizes,
      [windowName]: {
        width: Math.max(100, newWidth),
        height: Math.max(100, newHeight),
      },
    }));
  };

  // handle resizing window from different directions
  const handleResizeMouseDown = (e, windowName, direction) => {
    e.stopPropagation();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = windowSizes[windowName].width;
    const startHeight = windowSizes[windowName].height;

    const handleMouseMove = (e) => {
      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction.includes("right"))
        newWidth = startWidth + (e.clientX - startX);
      if (direction.includes("bottom"))
        newHeight = startHeight + (e.clientY - startY);
      if (direction.includes("left"))
        newWidth = startWidth - (e.clientX - startX);
      if (direction.includes("top"))
        newHeight = startHeight - (e.clientY - startY);

      resizeWindow(windowName, newWidth, newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <WindowResizeContext.Provider
      value={{ windowSizes, resizeWindow, handleResizeMouseDown }}
    >
      {children}
    </WindowResizeContext.Provider>
  );
};

export const useWindowResize = () => useContext(WindowResizeContext);
