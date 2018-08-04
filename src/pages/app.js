import React from "react";
import image1 from "../images/image1.jpg"


const AppPage = () => (

  <div className="flex flex-col  md:flex-row">
  <div className="mx-auto md:w-1/2 p-4">
  <h2>Home</h2><br></br>
  <div>
    <p>The Austere Risk Management App is a customised offline app which is distributed to your team members to improve safety
    during remote wilderness activities. The app is exactly the same on the desktop, tablet or mobile phone, and is distributed directly to team members without using the app stores.
    </p><br></br>
    <p>The app is custom built for your activity and can contain:<br></br>
    <ol><br></br>
    <li>Hazard reporting</li>
    <li>Incident reporting</li>
    <li>Safety procedures</li>
    <li>Emergency procedures</li>
    <li>First-aid guidelines</li>
    <li>Activty area map</li>
    <li>Checklists</li>
    <li>Contacts directory</li>
    </ol></p><br></br>
    Take a look at the demo app here
    </div>
  </div>
  <div className="mx-auto md:w-1/2 p-4">
  <img className="shadow-lg" src={image1} alt="Logo"/>
  </div>
  </div>
);

export default AppPage;
