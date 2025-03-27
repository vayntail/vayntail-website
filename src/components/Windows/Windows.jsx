import ArtWindow from "./ArtWindow/ArtWindow";
import { useWindowsNav } from "../../contexts/WindowsNavContext";
import AboutWindow from "./AboutWindow/AboutWindow";
import CodeWindow from "./CodeWindow/CodeWindow";

const Windows = () => {
  const { windows } = useWindowsNav();

  return (
    <div>
      {windows.about && <AboutWindow />}
      {windows.art && <ArtWindow />}
      {windows.code && <CodeWindow />}
    </div>
  );
};

export default Windows;
