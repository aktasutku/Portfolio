import React from "react";
import "./about.css";
// import { db } from "../../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  const db = getFirestore();
  const [paragraph, setParagraph] = useState([]);
  const aboutMeRef = doc(db, "aboutMe", "paragraph");

  useEffect(() => {
    const getAboutMe = async () => {
      const docSnap = await getDoc(aboutMeRef);
      setParagraph(docSnap.data());
    };
    getAboutMe();
  }, []);

  return (
    <div className="AboutContainer" id="About">
      <div className="AboutContainer__text">
        <h1>Hi There ,</h1>
        <p>{paragraph.p1}</p>
        <p>{paragraph.p2}</p>
        <p>{paragraph.p3}</p>
        <p>{paragraph.p4}</p>
      </div>
    </div>
  );
};

export default About;
