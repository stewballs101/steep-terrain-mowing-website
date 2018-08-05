import React from "react";
import image1 from "../images/image1.jpg"
import Link from "gatsby-link";

const IndexPage = () => (
<div className="flex flex-col  md:flex-row">
<div className="mx-auto md:w-1/2 p-3">
<p className="italic antialiased font-semibold text-center text-lg">Austere Risk Management provides real solutions to reduce risk in remote, wilderness and austere environments</p><br></br>
<p>Austere will take on your project's risk to allow remote wilderness projects to proceed safely and efficiently, by offering a range of <Link to="/services">services</Link>. Begining in the planning stages of your project, Austere risk experts will help take your project through to a safe and successful completion.</p><br></br>
<p>Examples of projects that Austere can reduce risk for, include:</p><br></br>
<li>Expeditions</li>
<li>Exploration</li>
<li>TV & Film </li>
<li>Scientific programmes</li>
<li>School wilderness activities</li>
<li>Corporate wilderness activities</li>
<li>Recreational activites</li><br></br>
<p className="italic antialiased font-semibold text-center text-lg">Outsouce your risk to Austere</p><br></br>
</div>
<div className="mx-auto md:w-1/2">
<img className="shadow-lg" src={image1} alt="Logo"/>
</div>
</div>
);

export default IndexPage;
