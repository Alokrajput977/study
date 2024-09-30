import React, { useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const users = [
    { img: user_1, name: "William Jackson 1", company: "Edusity, USA", quote: "After discussing the importance of education, awareness is the next big step." },
    { img: user_2, name: "William Jackson 2", company: "Edusity, USA", quote: "This has transformed my perspective on education." },
    { img: user_3, name: "William Jackson 3", company: "Edusity, USA", quote: "In remote areas, awareness is crucial." },
    { img: user_4, name: "William Jackson 4", company: "Edusity, USA", quote: "Education opens doors to the future." },
  ];

  const slideForward = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {users.map((user, index) => (
            <div className="user-info" key={index}>
              <img src={user.img} alt={user.name} />
              <div>
                <h3>{user.name}</h3>
                <span>{user.company}</span>
                <p>{user.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
