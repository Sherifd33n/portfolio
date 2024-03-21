import React from "react";
import { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <h2 className="logo">
        Sherif<span>d33n</span>
      </h2>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About Me</a>
        </li>
        <li>
          {" "}
          <a href="#skills">Skills</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <div>
        <button>
          {" "}
          <a className="btn btn-outline-primary" href="#contact">
            Contact
          </a>{" "}
        </button>
      </div>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <IoClose /> : <IoMenuSharp />}
      </button>
    </nav>
  );
}

export default Navbar;
