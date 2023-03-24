import React from "react";
import Logo from "../assets/gsLogo.png";
const Header = () => {

  // for hire me to contact section
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/#">
            <img src={Logo} alt="logo" className="h-[80px]" />
          </a>
          <button className="btn btn-sm"  onClick={() => scrollToSection("contact")} >Hire Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
