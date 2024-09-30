import React from "react";
import "./Contact.css";

import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "39ee3dcc-4a43-46aa-a61c-d00dd7145144");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          The literacy rate of more developed nations is also high, and the
          literacy of every nation depends upon its education system. The
          government undoubtedly has made laws and formulated schemes.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Email Icon" /> alokpaswan706@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone Icon" /> +828 748 7665
          </li>
          <li>
            <img src={location_icon} alt="Location Icon" />
            384-b Krishna Nagar <br /> Delhi-110051 Laxmi Narayan Mandir
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
