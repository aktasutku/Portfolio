import "./footer.css";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="social">
        <ul className="social_list">
          <li className="social_item">
            <a
              href="https://www.linkedin.com/in/aktasutku/?locale=en_US"
              className="social_link"
            >
              <FaLinkedinIn className="social_icon" />
              <span className="social_name">Linkedin</span>
            </a>
          </li>

          <li className="social_item">
            <a href="https://github.com/aktasutku" className="social_link">
              <FaGithub className="social_icon" />
              <span className="social_name">GitHub</span>
            </a>
          </li>
{/* 
          <li className="social_item">
            <a className="social_link">
              <FaRegEnvelope className="social_icon" />
              <span className="social_name">Email Me</span>
            </a>
          </li> */}
        </ul>
      </div>
      <span >aktasutku94@gmail.com</span>
    </div>
  );
};

export default Footer;
