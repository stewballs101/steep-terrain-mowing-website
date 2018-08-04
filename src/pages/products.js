import React from "react";
import image1 from "../images/image1.jpg"
import Link from "gatsby-link";


const ProductsPage = () => (
  <div className="flex flex-col  md:flex-row">

  <div className=" mx-auto sm:w-1/2 p-4">

  <div className="text-md">
   <h2>Products:</h2><br></br>

  </div>
  </div>
  <div className="mx-auto md:w-1/2 p-4">
  <img className="shadow-lg" src={image1} alt="Logo"/>
  </div>
  </div>
);

export default ProductsPage;
