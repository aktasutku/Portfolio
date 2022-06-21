import React, { useState } from "react";
import "./header.scss";

const Header = () => {

  return (
    <div className="Header_Container">
      <div className="Profile_Content">
        <div className="Profile_Img_Container">
          <img src="images/utku.jpg" />
        </div>
        <div className="Profile_Name">
          <h1>Utku Aktas</h1>
          <p>Web Developer</p>
        </div>
      </div>

      <div className="header_collapsible">
        <ul className="header_list">
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
