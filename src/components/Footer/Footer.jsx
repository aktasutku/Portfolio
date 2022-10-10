import "./footer.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/aktasutku94/">
            <FaLinkedinIn className="social_icon" />
            <span className="social_name">Linkedin</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/aktasutku">
            <FaGithub className="social_icon" />
            <span className="social_name">GitHub</span>
          </a>
        </li>
      </ul>

      <span>mattaktas94@gmail.com</span>
    </div>
  );
};

export default Footer;
