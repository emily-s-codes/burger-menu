const DesktopMenu = ({ setOpenMenu, openMenu }) => {
  return (
    <nav className="desktop">
      <p
        onClick={() => {
          setOpenMenu(!openMenu);
          console.log("open");
        }}
      >
        Desktop Menu
      </p>
    </nav>
  );
};

export default DesktopMenu;
