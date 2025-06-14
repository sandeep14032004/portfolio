import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center text-lightGrey md:text-left text-center">
      <h2 className="text-5xl md:text-6xl font-bold text-cyan mb-8 tracking-wide">
        About Me
      </h2>
      <p className="text-base md:text-lg leading-relaxed max-w-xl">
        I’m Sandeep — a code craftsman with a knack for clean UIs and scalable
        logic. My playground is the web, where I blend design, performance, and
        functionality using React, Node.js, and MongoDB. Whether it’s building
        task managers or full-stack platforms, I write code that tells a story.
        Always curious, always building — because in tech, you're either
        learning or lagging.
      </p>

      <button className="border border-cyan rounded-full py-2 px-6 text-base font-semibold flex items-center gap-2 mt-10 hover:bg-cyan hover:text-darkBrown transition duration-300 md:self-start">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          className="cursor-pointer"
        >
          Explore Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
