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

  // projects.map((project)=>{
  //   console.log(project.name)
  // })

  return (
    <div className="ProjectsContainer" id="Projects">
      <h1>Projects</h1>

      <div className="Projects">
        {projects.map((project) => {
          return(
          <div className="ProjectContainer">
            <div className="Project_Wrapper">
              <a href={project.link}>
                <img src={project.imgUrl} className="Project_Img" alt={project.name}/>
              </a>
              <p>{project.name}</p>
            </div>
            <div className="Project_Eplain">
              <h3>Project Details</h3>
              <p>{project.explain}</p>
            </div>
          </div>
          )
        })}
        {/* <div className="ProjectContainer">
          <div className="Project_Wrapper">
            <a href="https://disneyplus-utku.web.app/">
              <img src={disney} className="Project_Img" />
            </a>
            <p>Disney+ Clone</p>
          </div>
          <div className="Project_Eplain">
            <h3>Project Details</h3>
            <p>
              Based on Disney+, this application is designed on React, Redux,
              Styled Components and Firebase. I use grid system to make it
              responsive according to different sizes. Also hosting this
              application on Firebase.Click on img to access to full web page.
            </p>
          </div>
        </div> */}

        {/* <div className="ProjectContainer">
          <div className="Project_Wrapper">
            <a href="https://github.com/aktasutku/Food-Order">
              <img src={FoodOrder} className="Project_Img" />
            </a>
            <p>Food Order</p>
          </div>
          <div className="Project_Eplain">
            <h3>Project Details</h3>
            <p>
              This project built in React. You can add/remove foods by clicking
              +/- buttons.Also You can open shopping cart and see what you have
              and still add/remove foods.
            </p>
          </div>
        </div> */}

        {/* <div className="ProjectContainer">
          <div className="Project_Wrapper">
            <a href="https://github.com/aktasutku/Ecommerce">
              <img src={Ecommerce} className="Project_Img" />
            </a>
            <p>E-commerce</p>
          </div>
          <div className="Project_Eplain">
            <h3>Project Detais</h3>
            <p>
              I built this project based on React ,styled components ,
              Meterial-UI. With hover effect on item you can like the item or
              add to the cart.
            </p>
          </div>
        </div> */}

        {/* <div className="ProjectContainer">
          <div className="Project_Wrapper">
            <a href="https://github.com/aktasutku/AdminPage">
              <img src={Admin} className="Project_Img" />
            </a>
            <p>Admin Page</p>
          </div>
          <div className="Project_Eplain">
            <h3>Project Details </h3>
            <p>
              I built this project on React and Scss. Also icons from
              Meterial-UI. For the charts I use recharts and circular
              progressbar
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
