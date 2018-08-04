import React from "react";
import image1 from "../../images/image1.jpg"
import survive from "../../images/survive-logo.png"
import wfa from "../../images/wfa-image.jpg"
import Link from "gatsby-link";

const WfaTrainingPage = () => (
  <div className="flex flex-col  md:flex-row">

  <div className="mx-auto md:w-1/2 p-4">
  <h2>Wilderness First-Aid Training</h2><br></br>
  <p>First-aid training is essential for anyone spending time in remote areas. Austere has partnered with Australia's leading wilderness first-aid training organisation, Survive First-Aid, to deliver a range of quality courses for your team members. Austere Risk Management will collaborate with Survive First-Aid to customise training to meet the needs of your activity.</p><br></br>
  <p>Survive First-Aid delivers the following training:</p><br></br>
<li>Remote-area First-Aid</li>
<li>Wilderness First-Aid</li>
<li>Peadiatric First-Aid</li>
<li>First-Aid for Divers</li>
<li>Advanced Wilderness Life Support</li><br></br>

  
  <a href="http://www.survivefirstaid.com.au/"><img className="flex mx-auto"  width="30%" src={survive} alt="Logo" /></a>
  <Link to="/services" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black">← Back to Services</Link>
  </div>
  <div className="mx-auto md:w-1/2 p-4">
  <img lassName="shadow-lg" src={wfa} alt="wfa" />
  </div>
  </div>

);

export default WfaTrainingPage;
