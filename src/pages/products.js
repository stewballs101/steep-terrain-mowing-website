import React from "react";
import image1 from "../images/image1.jpg"
import Link from "gatsby-link";


const ProductsPage = () => (
  <div className="flex flex-col  md:flex-row">

  <div className=" mx-auto sm:w-1/2 p-4">

  <div className="text-md">
   <h2>Services:</h2><br></br>
   <sup>Click to find out more</sup>
  <h3><Link to="/services/riskassessment" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Risk Assessments</Link></h3><br></br>
  <h3><Link to="/services/emergencymgmt" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Emergency Management</Link></h3><br></br>
  <h3><Link to="/services/physicalconditioning" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Physical Conditioning</Link></h3><br></br>
  <h3><Link to="/services/wfatraining" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Wilderness First-Aid Training</Link></h3><br></br>
  <h3><Link to="/services/medical" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Medical Services</Link></h3><br></br>
  <h3><Link to="/services/security" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Security</Link></h3><br></br>
  <h3><Link to="/services/mentalhealth" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Mental Health</Link></h3><br></br>
  <h3><Link to="/services/rescue" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Rescue</Link></h3><br></br>
  <h3><Link to="/services/evacuation" className="block text-xl font-medium tracking-wide md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-darkest">→ Evacuation</Link></h3><br></br>
  </div>
  </div>
  <div className="mx-auto md:w-1/2 p-4">
  <img className="shadow-lg" src={image1} alt="Logo"/>
  </div>
  </div>
);

export default ProductsPage;
