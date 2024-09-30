import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorow's Leaders Today </h2>
        <p>
          Education is all about gathering knowledge and training the mind to
          think and apply reasoning to solve problems. It is the foundation on
          which any person, society, or country progresses. While our country
          has grown and developed over time, we may take the value of education
          for granted.
        </p>
        <p>
          Children need to know and understand the value of education. Teachers
          encourage students to reflect upon its significance by writing an
          essay. Children will need to think of reasons why education is
          important to them and why it is valuable for society at large. Let us
          guide your child to write a good essay on this challenging topic
        </p>
        <p>
          Education is a critical factor for the progress of an individual and
          the nation. It is about gathering knowledge and learning how to think
          and apply the knowledge to solve problems. In the modern-day world,
          where information dominates everyday life, it is important to be
          educated to understand the world. Through good education, we can get
          good jobs and improve the quality of our life and social status.
          Education also plays a significant role in becoming successful in
          life.
        </p>
      </div>
    </div>
  );
};

export default About;
