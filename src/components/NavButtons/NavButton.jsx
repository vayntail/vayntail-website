const NavButton = (props) => {
  return (
    <div onClick={props.onToggle} className="nav-button">
      <div className="img-container">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default NavButton;
