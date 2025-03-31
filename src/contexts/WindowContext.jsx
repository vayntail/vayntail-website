import { createContext, useState, useEffect, useContext, useRef } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  // state that contains all window states
  const [windows, setWindows] = useState({
    about: { position: { x: 100, y: 50 }, ref: useRef(null), zIndex: 1 },
    art: { position: { x: 100, y: 100 }, ref: useRef(null), zIndex: 1 },
    code: { position: { x: 100, y: 150 }, ref: useRef(null), zIndex: 1 },
  });

  const screenRef = useRef(null);
  const prevScreenSizeRef = useRef({ x: 0, y: 0 });

  // update position for a specific window by its name
  const updateWindowPosition = (windowName, newX, newY) => {
    setWindows((prevWindows) => {
      const updatedWindows = { ...prevWindows };
      updatedWindows[windowName] = {
        ...updatedWindows[windowName],
        position: { x: newX, y: newY },
      };
      return updatedWindows;
    });
  };
  // function to bring window to front
  const bringToFront = (windowName) => {
    setWindows((prevWindows) => {
      const maxZIndex = Math.max(
        ...Object.values(prevWindows).map((w) => w.zIndex)
      );

      return {
        ...prevWindows,
        [windowName]: {
          ...prevWindows[windowName],
          zIndex: maxZIndex + 1,
        },
      };
    });
    // test
    console.log(windows[windowName].zIndex);
  };

  // called on event
  const handleMouseDown = (e, windowName) => {
    // bring window to front
    bringToFront(windowName);
    console.log("Dragging started!");

    const windowElement = windows[windowName].ref.current;
    if (!windowElement) return;

    const offsetX = e.clientX - windowElement.offsetLeft;
    const offsetY = e.clientY - windowElement.offsetTop;

    const handleMouseMove = (e) => {
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;
      updateWindowPosition(windowName, newX, newY);
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
      Object.keys(windows).forEach((windowId) => {
        const window = windows[windowId];
        if (window) {
          let newX = map(
            window.position.x,
            prevScreenSizeRef.current.x,
            screenRef.current.offsetWidth
          );
          let newY = map(
            window.position.y,
            prevScreenSizeRef.current.y,
            screenRef.current.offsetHeight
          );
          updateWindowPosition(windowId, newX, newY);
          console.log(
            `Resized window ${windowId} to position: { x: ${newX}, y: ${newY} }`
          );
        }
      });
      updateScreenSize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windows]);

  function map(value, curMax, newMax) {
    return (value / curMax) * newMax;
  }

  return (
    <WindowContext.Provider
      value={{
        windows,
        updateWindowPosition,
        screenRef,
        handleMouseDown,
        bringToFront,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

// custom hook
export const useWindow = (windowId) => {
  const {
    windows,
    updateWindowPosition,
    handleMouseDown,
    screenRef,
    bringToFront,
  } = useContext(WindowContext);
  const windowState = windows[windowId];

  return {
    windowState,
    screenRef,
    updateWindowPosition,
    handleMouseDown,
    bringToFront,
  };
};
