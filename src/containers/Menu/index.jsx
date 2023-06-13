import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Menu.scss";

const Menu = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header_nav">
      <div className="title">
        <h1>dhifallah chaala.</h1>
        <p>Web Developer</p>
      </div>
      <div className={`flexLink ${isMenuClicked ? "responsive_nav" : ""}`}>
        <Link
          to="flexlink"
          className="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p>ACCUEIL</p>
          <div className="slider"></div>
        </Link>
        <Link
          to="about"
          className="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p>ABOUT</p>
          <div className="slider"></div>
        </Link>
        <Link
          to="slider"
          className="navbar"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p>PORTFOLIO</p>
          <div className="slider"></div>
        </Link>
        <Link
          to="contact-form"
          className="navbar"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p>CONTACT</p>
          <div className="slider"></div>
        </Link>
      </div>
      <div className="burger-menu" onClick={updateMenu}>
        <div className={`burger-bar ${isMenuClicked ? "clicked" : "unclicked"}`}></div>
        <div className={`burger-bar ${isMenuClicked ? "clicked" : "unclicked"}`}></div>
        <div className={`burger-bar ${isMenuClicked ? "clicked" : "unclicked"}`}></div>
      </div>
    </div>
  );
};

export default Menu;