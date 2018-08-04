import React from "react";
import Link from "gatsby-link";

const Footer = () => (

    <div className="flex flex-col md:flex-row bg-grey-darkest">
      <p className=" flex flex-col md:flex-row text-grey-light text-center italic leading-loose mx-auto font-light font-sans py-2 px-2">
        Seal Team 6 Delta Force SAS Commando Slashing Services
      </p>

     <div className="flex md:flex-row items-center mx-auto">
      <a href="mailto:contact@austere.global" className="flex items-center no-underline text-grey-light">
          <svg
            className="fill-current h-8 mr-2 w-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,.23A15.77,15.77,0,1,0,31.77,16,15.77,15.77,0,0,0,16,.23Zm0,29.08A13.31,13.31,0,1,1,29.31,16,13.31,13.31,0,0,1,16,29.31Z"/>
            <path d="M22.72,9.3H9.28a2.05,2.05,0,0,0-2.09,2v9.37a2.05,2.05,0,0,0,2.09,2H22.72a2.05,2.05,0,0,0,2.09-2V11.31A2.05,2.05,0,0,0,22.72,9.3Zm0,11.62H9.28c-.17,0-.32-.11-.32-.24V12.55L15,17.69a.69.69,0,0,0,.45.16h1a.69.69,0,0,0,.45-.16L23,12.55v8.13C23,20.81,22.89,20.92,22.72,20.92ZM16,16.09l-5.91-5H21.91Z"/>
          </svg>
      </a>

      <a href="https://wa.me/+61439734323" className="flex items-center no-underline text-grey-light">
          <svg
            className="fill-current h-8 mr-2 w-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.81,15.59a15.54,15.54,0,0,1-23,13.48L.21,31.8,3,23.54A15.23,15.23,0,0,1,.79,15.59a15.51,15.51,0,0,1,31,0ZM16.29,2.66a13,13,0,0,0-13,12.94,12.8,12.8,0,0,0,2.48,7.59L4.11,28l5-1.59a13.06,13.06,0,0,0,20.22-10.8A13,13,0,0,0,16.29,2.66Zm7.83,16.48c-.1-.16-.35-.25-.73-.44s-2.25-1.1-2.6-1.23-.6-.19-.86.19-1,1.23-1.2,1.48-.44.28-.82.1a10.48,10.48,0,0,1-3.06-1.87,11.35,11.35,0,0,1-2.11-2.61c-.22-.38,0-.58.17-.77s.38-.44.57-.66a2.52,2.52,0,0,0,.38-.63.7.7,0,0,0,0-.66c-.09-.19-.85-2-1.17-2.8s-.63-.63-.86-.63-.47,0-.73,0a1.39,1.39,0,0,0-1,.47,4.22,4.22,0,0,0-1.33,3.15,7.29,7.29,0,0,0,1.55,3.9c.19.25,2.63,4.19,6.5,5.7s3.87,1,4.56.94a3.84,3.84,0,0,0,2.57-1.79A3.13,3.13,0,0,0,24.13,19.14Z"/>
          </svg>
      </a>

      <a href="https://twitter.com/austere_risk" className="flex items-center no-underline text-grey-light">
          <svg
            className="fill-current h-8 mr-2 w-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.76,12.13a3.2,3.2,0,0,0,1.45-1.84,7.85,7.85,0,0,1-2.13.78,3.15,3.15,0,0,0-2.41-1,3.27,3.27,0,0,0-2.39,1,3.22,3.22,0,0,0-1,2.36,2.36,2.36,0,0,0,.11.74,9,9,0,0,1-6.9-3.47,3.34,3.34,0,0,0-.46,1.67,3.23,3.23,0,0,0,1.49,2.79,3.7,3.7,0,0,1-1.49-.43,3.32,3.32,0,0,0,.74,2.16A3.28,3.28,0,0,0,11.71,18a3.56,3.56,0,0,1-.89.11,1.66,1.66,0,0,1-.6-.08A3.19,3.19,0,0,0,11.4,19.7a3.3,3.3,0,0,0,1.95.67A6.51,6.51,0,0,1,9.2,21.79a5.61,5.61,0,0,1-.82,0,9.22,9.22,0,0,0,5.13,1.49,9.11,9.11,0,0,0,5.13-1.47,9.2,9.2,0,0,0,3.29-3.59A9.74,9.74,0,0,0,23,13.76v-.42a7,7,0,0,0,1.66-1.74A7.36,7.36,0,0,1,22.76,12.13Z"/>
            <path d="M16,.23A15.77,15.77,0,1,0,31.77,16,15.77,15.77,0,0,0,16,.23Zm0,29.08A13.31,13.31,0,1,1,29.31,16,13.31,13.31,0,0,1,16,29.31Z"/>
          </svg>
      </a>

      <a href="https://www.linkedin.com/company/austere-risk" className="flex items-center no-underline text-grey-light">
          <svg
            className="fill-current h-8 mr-2 w-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.53,21.82H9.71V12.65h2.82ZM11.12,11.48q-1.53,0-1.53-1.41a1.31,1.31,0,0,1,.44-1,1.53,1.53,0,0,1,1.09-.41c1,0,1.53.47,1.53,1.41S12.14,11.48,11.12,11.48ZM23,21.82H20.12V16.71q0-2-1.41-2a1.43,1.43,0,0,0-1.47,1.12,1.46,1.46,0,0,0-.12.71v5.29H14.24V15.59c0-1.41,0-2.39-.06-2.94h2.47l.18,1.23a3.2,3.2,0,0,1,2.88-1.47,3,3,0,0,1,2.38,1,4.33,4.33,0,0,1,.91,3v5.41Z"/>
            <path d="M16.3.23A15.77,15.77,0,1,0,32.07,16,15.77,15.77,0,0,0,16.3.23Zm0,29.08A13.31,13.31,0,1,1,29.61,16,13.31,13.31,0,0,1,16.3,29.31Z"/>
          </svg>
      </a>

      <a href="https://www.facebook.com/austererisk" className="flex items-center no-underline text-grey-light">
          <svg
            className="fill-current h-8 mr-2 w-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,.23A15.77,15.77,0,1,0,31.77,16,15.77,15.77,0,0,0,16,.23Zm0,29.08A13.31,13.31,0,1,1,29.31,16,13.31,13.31,0,0,1,16,29.31Z"/>
            <path d="M19.74,13.59H17v-2c0-.61.64-.76.93-.76H19.7V8.12h-2a3.11,3.11,0,0,0-3.4,3.31v2.17h-2v2.78h2v7.52H17V16.37h2.32Z"/>
          </svg>
      </a>
      
      </div>
      <div className="flex flex-col md:flex-row items-center mx-auto">
      <p className="text-grey-light leading-loose text-xs pt-3 mx-auto">
        ABN: 78 368 296 122
      </p>
      </div>
        


    </div>

);

export default Footer;
