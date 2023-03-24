import React from "react";
import { Link } from "react-scroll";
import { BsChatText } from "react-icons/bs";
import { CgStack, CgBriefcase } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[76px] backdrop-blur-2xl 
         rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={
              true
            }
           /* for beginner understanding: smooth={true} enables smooth scrolling when a react-scroll Link component is clicked, while spy={true} enables the react-scroll library to automatically update the active link in the navigation menu based on the current scroll position. */
            spy={true}
            offset={-200} //to shit the home lil down
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <HiOutlineHome />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaRegUserCircle />
          </Link>
          <Link
            to="experience" //tech stacks
            activeClass="active"
            smooth={true}
            spy={true}
            offset={40}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <CgStack />
          </Link>

          <Link
            to="work" //projects
            activeClass="active"
            smooth={true}
            spy={true}
            offset={80} //shifting up
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <CgBriefcase />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            // offset={-40}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
