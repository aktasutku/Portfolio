import React from "react";
import "./skills.scss";
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills_container" id="Skills">
      <h1 htmlFor="">Skills</h1>
      <div className="skills_wrapper">
        <ul className="skills_list">
          <li className="skills_list_item">
            <FaReact className="React_Icon" />
            <span>REACT</span>
          </li>
          <span className="skill_separator"></span>
          <li className="skills_list_item">
            <FaJs className="React_Icon" />
            <span>JavaScript</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <FaHtml5 className="React_Icon" />
            <span>HTML5</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <FaCss3 className="React_Icon" />
            <span>CSS3</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" />
            {/* <FaReact className="React_Icon" /> */}
            <span>Scss</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <FaCss3 className="React_Icon" />
            <span>Styled Components</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <FaNodeJs className="React_Icon"/>
            <span>Node.js</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <img
              className="textimg"
              src="https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery.png"
            />
            <span>JQuery</span>
          </li>
          <span className="skill_separator"></span>

          <li className="skills_list_item">
            <img
              className="textimg"
              src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
              alt=""
            />
            <span>MongoDB</span>
          </li>
          <span className="skill_separator"></span>
          <li className="skills_list_item">
            <img
              className="textimg"
              src="https://www.gstatic.com/devrel-devsite/prod/ve6ddf5bcead12ab16e41f3889a7fb0a07adddfafd7d99eb46840573a68200f4e/firebase/images/lockup.svg"
              alt=""
            />
            <span>Firebase</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
