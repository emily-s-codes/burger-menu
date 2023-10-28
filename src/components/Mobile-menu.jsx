const MobileMenu = ({ setOpenMenu, openMenu }) => {
  return (
    <div
      className={`mobile ${openMenu ? "show" : "hide"}`}
      onClick={() => {
        setOpenMenu(!openMenu);
        console.log("close");
      }}
    >
      Close Menu
    </div>
  );
};

export default MobileMenu;
