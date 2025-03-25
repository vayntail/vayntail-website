import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="TopBar">
      <button>Vayn's website</button>
      <div>
        <button>github</button>
        <button>twitter</button>
        <button>instagram</button>
      </div>
      {/* <button className="button">button-test</button> */}
    </div>
  );
};

export default TopBar;
