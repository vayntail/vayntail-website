import "./TopBar.css";
import SocialMediaButton from "./SocialMediaButton";

const TopBar = () => {
  return (
    <div className="TopBar">
      <button>Vayn's website</button>
      <div className="flex">
        <SocialMediaButton
          url={"https://github.com/vayntail"}
          text="github"
          img={"/icons/github.png"}
        />
        <SocialMediaButton
          url={"https://twitter.com/vayntail"}
          text="twitter"
          img={"/icons/github.png"}
        />
        <SocialMediaButton
          url={"https://instagram.com/vayntail"}
          text="instagram"
          img={"/icons/github.png"}
        />
      </div>
      {/* <button className="button">button-test</button> */}
    </div>
  );
};

export default TopBar;
