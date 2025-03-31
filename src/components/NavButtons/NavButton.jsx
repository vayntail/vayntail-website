const NavButton = (props) => {
  return (
    <div className="nav-button">
      <div onClick={props.onToggle} className="img-container">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default NavButton;
