import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul
      className="flex lg:flex-row sm:flex-col gap-7 font-body 
      lg:relative sm:absolute sm:top-[120%] left-1/2 -translate-x-1/2 
      text-center lg:text-md sm:text-xl 
      sm:bg-surface lg:bg-surface sm:w-full py-4 
      sm:shadow-md sm:border-t border-accent rounded-b-2xl"
    >
      {links.map((link, index) => (
        <li key={index} className="group transition-all duration-300">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
            className="cursor-pointer text-text hover:text-accent 
              transition-colors duration-300"
          >
            {link.link}
          </Link>
          <div className="mx-auto mt-1 bg-accent w-0 group-hover:w-full h-[2px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
