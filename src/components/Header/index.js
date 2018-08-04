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
    <nav className="bg-white">
      <div className="flex flex-wrap items-centre justify-around max-w-2xl mx-auto p-2 md:pt-1">
        <div className="w-1/3 flex mx-auto">
         <img className="mx-auto" src={Logo} alt="Logo"/>

        </div>

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
          className="w-2/3 hidden md:flex md:items-center mx-auto w-full md:w-auto"
        >
          <div className="text-lg">
            <Link
              to="/"
              className="block mt-4 font-bold text-2xl md:inline-block md:mt-0 mr-6 no-underline text-orange"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="block mt-4 font-bold text-2xl md:inline-block md:mt-0 mr-6 no-underline text-orange"
            >
              Services
            </Link>

            <Link
              to="/products"
              className="block mt-4 font-bold text-2xl md:inline-block md:mt-0 mr-6 no-underline text-orange"
            >
              Products
            </Link>

            <Link
              to="/gallery"
              className="block mt-4 font-bold text-2xl md:inline-block md:mt-0 mr-6 no-underline text-orange"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="block mt-4 font-bold text-2xl md:inline-block md:mt-0 mr-6 no-underline text-orange"
            >
              Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

