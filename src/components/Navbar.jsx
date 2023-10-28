import { useState } from "react";
import MobileMenu from "./Mobile-menu";
import DesktopMenu from "./Desktop-menu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <DesktopMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Navbar;
