import { useScreenOrientation } from "../../contexts/ScreenOrientationContext";

const SocialMediaButton = (props) => {
  const { isMobile } = useScreenOrientation();

  return (
    <a href={props.url} target="_blank">
      <button className="social-button">
        <img className="social-icon" src={props.img} />
        {!isMobile && props.text}
      </button>
    </a>
  );
};

export default SocialMediaButton;
