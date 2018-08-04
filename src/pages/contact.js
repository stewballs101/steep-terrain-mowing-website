import React from "react";
import image1 from "../images/image1.jpg"

const ContactPage = () => (
  <div className="flex flex-col  md:flex-row">

  <div className="mx-auto md:w-1/2 p-4">
  <h2>Contact</h2><br></br>
  <h3>Australia</h3><br></br>
  <ul>
  <li>Phone: +61 423 001 473</li>
  <li>Email: nathan@austere.global</li>
  </ul><br></br>
  </div>
  
  <div className="mx-auto md:w-1/2 p-4">
  <img className="shadow-lg" src={image1} alt="Logo"/>
  </div>
  </div>

);

export default ContactPage;
