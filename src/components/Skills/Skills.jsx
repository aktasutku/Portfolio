import React from "react";
import "./skills.css";
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiRedux,
  SiBootstrap,
} from "react-icons/si";
import "animate.css";

const Skills = () => {
  const Programs = [
    { icon: FaReact, title: "React" },
    { icon: SiRedux, title: "Redux" },
    { icon: FaJs, title: "JavaScript" },
    { icon: FaHtml5, title: "HTML5" },
    { icon: FaCss3, title: "CSS3" },
    { icon: FaNodeJs, title: "NodeJs" },
    { icon: SiStyledcomponents, title: "Styled Comp." },
    { icon: SiTailwindcss, title: "Tailwindcss" },
    { icon: SiBootstrap, title: "Bootstrap" },
  ];
  const ProgramsImg = [
    {
      img: "https://mui.com/static/logo.png",
      title: "MUI",
    },

    {
      img: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      title: "Scss",
    },
    {
      img:
        "https://jquery.com/jquery-wp-content/themes/jquery/images/logo-jquery.png",
      title: "JQuery",
    },
    {
      img:
        "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
      title: "MongoDB",
    },
    {
      img:
        "https://www.gstatic.com/devrel-devsite/prod/ve6ddf5bcead12ab16e41f3889a7fb0a07adddfafd7d99eb46840573a68200f4e/firebase/images/lockup.svg",
      title: "Firebase",
    },
  ];
  return (
    <div className="skills_container">
      <h1>Skills</h1>
      <ul>
        {Programs.map((skill, i) => {
          return (
            <>
              <li key={skill.title}>
                <skill.icon className="React_Icon" />
                <span>{skill.title}</span>
              </li>
              <span className="skill_separator"></span>
            </>
          );
        })}
        {ProgramsImg.map((item, i) => {
          return (
            <>
              <li key={item.title}>
                <img src={item.img} alt="" />
                <span>{item.title}</span>
              </li>
              {/* last dot dont display */}
              {ProgramsImg.length - 1 !== i && (
                <span className="skill_separator"></span>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
