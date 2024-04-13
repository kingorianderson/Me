import React from "react";
import "./nav.css";
import { BiBook, BiHomeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine, RiGalleryFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <BiHomeAlt />
      </Link>

      <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <BiBook />
      </Link>

      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <RiServiceLine />
      </Link>

      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <RiGalleryFill />
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
