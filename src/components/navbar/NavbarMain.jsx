import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-1/2 -translate-x-1/2 z-20 mt-4">
      <div className="w-full max-w-[1200px] mx-auto bg-surface text-white p-4 sm:p-6 rounded-full border border-accent shadow-glow flex justify-between items-center">
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>
        <div className="lg:hidden">
          <NavbarToggler />
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden w-full mt-2 bg-surface border border-accent shadow-glow rounded-2xl p-4 flex flex-col items-center gap-4 animate-fadeIn">
          <NavbarLinks />
          <NavbarBtn />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
