import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-5 py-2 rounded-full text-lg font-bold font-body text-white border border-blue-400 bg-gradient-to-r from-blue-900 via-blue-800 to-black shadow-md shadow-blue-500/30 hover:from-blue-800 hover:to-blue-600 hover:border-cyan-400 hover:shadow-blue-400/50 transition-all duration-300 ease-in-out hover:scale-105">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
        className="flex items-center gap-2"
      >
        Hire Me
        <span className="hidden md:inline-block">
          <LuArrowDownRight />
        </span>
      </Link>
    </button>
  );
};

export default NavbarBtn;
