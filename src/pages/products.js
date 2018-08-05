import React from "react";
import Link from "gatsby-link";
import product1 from "../images/products/product1.jpg"
import product2 from "../images/products/product2.jpg"



//Crop images to 310 × 255

const ProductsPage = () => (
  <div>
  <div className=" flex flex-col lg:flex-row p-2">
  <h2>Products</h2>
  </div>
  
  <div className="flex flex-wrap w-full m-3">

 <div className="bg-white mx-2 h-auto max-w-2xl shadow-lg m-2">
  <div className="sm:flex sm:items-top m-2 p-1">
  <img className="m-1 mr-3 justify-around" src={product1} alt="sandy18"/>
    <div className="align-top justify-start sm:text-left sm:flex-grow">
      <div className="mb-1 leading-tight align-top">
        <p className="text-xl text-grey-darkest font-semibold">Product 1</p>
        <p className="text-l text-grey-dark font-semibold leading-loose">$1000 + GST</p>
        <p>Austere provided pro-bono support to the Great Sandy 18 Camel Train fundraising expedition, May - June 2018. The epic 30-night, 1200km trek lead the two-person, six-camel team through West Australian's most barren wilderness, raising money and awareness for Melanoma WA and the RFDS.</p>
        <p> Austere supported the expedition with:</p>
        <ul>
        <li>A comprehensive risk assessments</li>
        <li>First-aid training</li>
        <li>Expedition medical support</li><br></br>
        </ul>
        <p>Read more about the expedition at <a href="https://www.greatsandy18.com/">www.greatsandy18.com</a></p>
      </div>
    </div>
  </div>
</div>

 <div className="bg-white mx-2 h-auto max-w-2xl shadow-lg m-2">
  <div className="sm:flex sm:items-top m-2 p-1">
  <img className="m-1 mr-3 justify-around" src={product2} alt="sandy18"/>
    <div className="align-top justify-start sm:text-left sm:flex-grow">
      <div className="mb-1 leading-tight align-top">
        <p className="text-xl text-grey-darkest font-semibold">Product 2</p>
        <p className="text-l text-grey-dark font-semibold leading-loose">$1000 + GST</p>
        <p>Austere established safety and emergency systems for the newly established Maydena Bike Park in Tasmania. The Austere system improved safety across the park for both patrons and staff.</p>
        <p> The system included:</p>
        <ul>
        <li>A risk management mobile app</li>
        <li>Emergency plans</li>
        <li>Emergency mapping</li>
        <li>Establishing a network of volunteer first-aiders</li><br></br>
        </ul>
        <p>Read more about Myadena Bike Park at <a href="https://www.maydenabikepark.com/home/">www.maydenabikepark.com</a></p>
      </div>
    </div>
  </div>
</div>


</div>
</div>

);

export default ProductsPage;

