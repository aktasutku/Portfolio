import React from "react";
import "./about.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  const [paragraph, setParagraph] = useState([]);
  const aboutMeRef = collection(db,"aboutMe");

  useEffect(() => {
    const getAboutMe = async () => {
      const data = await getDocs(aboutMeRef);
      setParagraph(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAboutMe();
  }, []);

  return (
    <div className="AboutContainer" id="About">
      <div className="text">
        <h1>Hi There ,</h1>
        {paragraph.map((p) => {
          return (
            <>
              <p>{p.p1}</p>
              <p>{p.p2}</p>
              <p>{p.p3}</p>
              <p>{p.p4}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default About;
