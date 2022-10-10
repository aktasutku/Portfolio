import "./projects.css";

import React from "react";
import { db } from "../../firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const projectsRef = collection(db, "Projects");

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProjects();
  }, []);

  return (
    <div className="ProjectsContainer" id="Projects">
      <h1>Projects</h1>

      <div className="Projects">
        {projects.map((project) => {
          return (
            <div className="ProjectCard" key={project.link}>
              <a href={project.link} className="Project_Wrapper">
                <div className="imgWrapper">
                  <img src={project.imgUrl} alt={project.name} loading="lazy" />
                </div>
                <p>{project.name}</p>
              </a>
              <div className="Project_Eplain">
                <h3>Project Details</h3>
                <p>{project.explain}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
