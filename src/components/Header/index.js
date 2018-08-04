import React from "react";
import Link from "gatsby-link";
import Logo from "../../images/logo.png"

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav>
     <div className="flex flex-row justify-around">

      <div className="w-1/2 flex self-center md:p-2 bg-green-lighter justify-around">
         <div className="p-4">


        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-grey-darkest"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="items-baseline hidden md:flex md:items-top w-full md:w-auto"
        >
          <div className="text-lg">
            <Link
              to="/"
              className="block text-xl font-bold mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="block text-xl font-bold md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              Services
            </Link>

            <Link
              to="/products"
              className="block text-xl font-bold md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="block text-xl font-bold md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              Contact
            </Link>

          </div>

        </div>

        </div>

        </div>
        <div className="w-1/2 flex mx-auto justify-around self-center bg-red-lighter">
         <img src={Logo} alt="Logo"/>
        </div>
    </div>
    </nav>
    
  );
};

export default Header;
