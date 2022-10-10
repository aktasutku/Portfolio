import React from "react";
import "./header.css";
import profile from "../../images/utku.jpg";

const Header = () => {
  return (
    <div className="Header_Container">
      <div className="Profile_Content">
        <div className="Profile_Img_Container">
          <img src={profile} alt="" />
        </div>
        <div className="Profile_Name">
          <h1>Utku Aktas</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <ul>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
