import React from "react";
import Link from "gatsby-link";

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-2xl mx-auto p-2 md:p-5">
        <div className="w-2/3 md:w-1/3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1402.82 300"
          width="75%"
          >
          <path d="M1264.3 172.53h122.09v-24.34h-92.8v-47.12H1378v-23h-84.36V35.92h91.16V11.57h-120.5zm-135.68-138h47.57a64.7 64.7 0 0 1 10.89.9 24.25 24.25 0 0 1 9.37 3.61 18.41 18.41 0 0 1 6.44 7.55q2.34 4.85 2.34 12.51 0 12.85-7.26 19.27t-21.33 6.42h-48zm-29.3 138h29.3v-66.28h43.12q10.07 0 16.52 2.48a21.74 21.74 0 0 1 10.19 7.78 32.53 32.53 0 0 1 5.16 13.3 112.1 112.1 0 0 1 1.41 19q0 5.86.59 12.17a25.48 25.48 0 0 0 3.86 11.5h31.4q-4.69-5-6.91-16.57a137.21 137.21 0 0 1-2.22-25.81q0-9.47-2.46-15.78a31.17 31.17 0 0 0-6.21-10.26 23.93 23.93 0 0 0-8.08-5.75 31 31 0 0 0-8.09-2.25v-.45q2.1-.61 6.66-2.61a32 32 0 0 0 9.26-6.65 41.39 41.39 0 0 0 8.2-12.17q3.52-7.55 3.52-19 0-20.51-13.83-32t-41.48-11.5h-79.91zm-147.63 0h122.09v-24.34H981v-47.12h84.36v-23H981V35.92h91.16V11.57H951.69zM796.79 35.92h53v136.61H879V35.92h53.2V11.57H796.79zm-146 83q.23 14.88 5.86 25.81a51.13 51.13 0 0 0 15 17.92 64 64 0 0 0 22 10.37 103.93 103.93 0 0 0 26.95 3.38 105.76 105.76 0 0 0 24.4-2.85 67 67 0 0 0 21.32-8.9A47.67 47.67 0 0 0 781.44 149q5.74-9.58 5.74-23.11a41.87 41.87 0 0 0-2-12.62 40 40 0 0 0-6.09-11.84 44.31 44.31 0 0 0-10.19-9.81 49.78 49.78 0 0 0-14.3-6.76q-3.28-.9-10.9-2.82t-15.58-3.95q-8-2-14.41-3.72t-7.38-1.92a36.06 36.06 0 0 1-14.41-7.33q-5.51-4.85-5.51-13.41a16.87 16.87 0 0 1 2.93-10.14 21.31 21.31 0 0 1 7.38-6.42 34.3 34.3 0 0 1 9.84-3.38 57 57 0 0 1 10.55-1q15.23 0 25.08 6.42t11 22h29.31a46.19 46.19 0 0 0-5.16-22.21 48.6 48.6 0 0 0-13.94-16.17A62 62 0 0 0 743 11a90.91 90.91 0 0 0-24.72-3.27A89.48 89.48 0 0 0 696 10.56a62.47 62.47 0 0 0-19.68 8.68A45.82 45.82 0 0 0 662.4 34q-5.27 8.91-5.27 21.08a44.47 44.47 0 0 0 1.76 12.4 33.94 33.94 0 0 0 6 11.5 42.22 42.22 0 0 0 11.37 9.81 63.87 63.87 0 0 0 17.93 7.1q17.34 4.51 29.18 7.33a205.29 205.29 0 0 1 20.74 6 24.89 24.89 0 0 1 9.49 6.2q4.33 4.4 4.34 13.64a22.52 22.52 0 0 1-1.87 8.9 20.06 20.06 0 0 1-6.09 7.78 33.58 33.58 0 0 1-11 5.52 54.8 54.8 0 0 1-16.4 2.15 67.57 67.57 0 0 1-16.58-1.95 39.46 39.46 0 0 1-13.48-6.09 28.69 28.69 0 0 1-9.14-10.71 34.81 34.81 0 0 1-3.28-15.78zm-161-4.28q0 15.55 4.92 27.05a52.08 52.08 0 0 0 13.94 19.28 58.83 58.83 0 0 0 21.68 11.61 105.12 105.12 0 0 0 56.24 0 58.87 58.87 0 0 0 21.68-11.61 52.15 52.15 0 0 0 13.94-19.28q4.92-11.49 4.92-27.05v-103h-29.27v93.78q0 8.12-.82 16.46a36.56 36.56 0 0 1-4.69 15 29.34 29.34 0 0 1-11.72 10.93q-7.85 4.19-22.14 4.19t-22.14-4.28a29.32 29.32 0 0 1-11.72-10.93 36.56 36.56 0 0 1-4.69-15q-.82-8.34-.82-16.46V11.57h-29.29zM395.13 39.3h.7l25.08 69.21h-51.09zm-79.21 133.23h30.23l15.7-42.61h66.79l15.7 42.61h31.4l-64.44-161h-31.16z" fill="#b75615"/>
          <path d="M1396.79 209.11v6.63h-29.3v75h-8v-75h-29.19v-6.63zm-131.56 0l49 69h.24v-69h8v81.59h-8.94l-49-69h-.24v69h-8v-81.59zm-20.59 0v6.63h-50v29.48h46.84v6.63h-46.84v32.22h50.6v6.63h-58.6v-81.59zm-154.87 0v81.59h8v-70.51h.24l27.65 70.51h7.53l28.72-70.51h.24v70.51h8v-81.59h-11.77l-28.95 71.53-27.89-71.53zm-11.53 0v6.63h-50v29.48h46.84v6.63h-46.84v32.22h50.6v6.63h-58.6v-81.59zM999 290.7l-1-14.86h-.24a28 28 0 0 1-5.24 7.48 28.46 28.46 0 0 1-6.89 5.14 30.76 30.76 0 0 1-8.06 2.91 42.72 42.72 0 0 1-8.89.91 40.67 40.67 0 0 1-17.36-3.48 35.87 35.87 0 0 1-12.42-9.32 39.23 39.23 0 0 1-7.4-13.48 53.76 53.76 0 0 1 0-32.23 39.92 39.92 0 0 1 7.41-13.54 35.6 35.6 0 0 1 12.42-9.37 40.67 40.67 0 0 1 17.36-3.48 44.46 44.46 0 0 1 12.47 1.71 32.67 32.67 0 0 1 10.48 5.14 31.4 31.4 0 0 1 7.77 8.46 32.2 32.2 0 0 1 4.35 11.77h-8a18 18 0 0 0-2.41-7.14 25.12 25.12 0 0 0-5.53-6.57 28.81 28.81 0 0 0-8.3-4.86 29.55 29.55 0 0 0-10.84-1.89 31 31 0 0 0-14.36 3.09 28.2 28.2 0 0 0-9.83 8.17 34.73 34.73 0 0 0-5.65 11.48 48 48 0 0 0 0 26.22 34.65 34.65 0 0 0 5.65 11.54 28.25 28.25 0 0 0 9.83 8.17 31.08 31.08 0 0 0 14.36 3.08 32.71 32.71 0 0 0 12.42-2.23 25.39 25.39 0 0 0 14.9-15.68 34.88 34.88 0 0 0 1.76-12h-28.6v-6.63h35.66v41.49zm-106.57-81.59l33 81.59h-8.59l-10.24-25.37h-38.3l-10.12 25.37h-8.47l33.77-81.59zm11.42 49.6l-16.25-41.83-16.83 41.82zm-119-49.6l49 69h.24v-69h8v81.59h-8.94l-49-69h-.24v69h-8v-81.59zm-49.42 0l33 81.59h-8.59l-10.24-25.37h-38.28L701.2 290.7h-8.47l33.77-81.59zm11.42 49.6l-16.24-41.83-16.82 41.82zm-141.8-49.6v81.59h8v-70.51h.24l27.65 70.51h7.53l28.71-70.51h.24v70.51h8v-81.59h-11.76l-28.95 71.53-27.89-71.53zm-100.73 0V253l48.84-43.88H564l-37.54 33.71 39.3 47.88H555.4l-34.95-42.51-16.12 14.5v28h-8v-81.59zM428 274.36a17.41 17.41 0 0 0 5.83 6.75 24.62 24.62 0 0 0 8.77 3.6 51.3 51.3 0 0 0 10.83 1.09 31.36 31.36 0 0 0 7.18-.91 25.3 25.3 0 0 0 7.24-2.91 18.23 18.23 0 0 0 5.59-5.14 12.77 12.77 0 0 0 2.24-7.6 10.89 10.89 0 0 0-1.59-5.94 14.27 14.27 0 0 0-4.12-4.22 24.66 24.66 0 0 0-5.59-2.8 55.43 55.43 0 0 0-6-1.77L439.61 250a56.23 56.23 0 0 1-7.12-2.29 20.29 20.29 0 0 1-6.06-3.65 17.38 17.38 0 0 1-4.18-5.6 18.66 18.66 0 0 1-1.59-8.11 25.21 25.21 0 0 1 1.18-7 19.18 19.18 0 0 1 4.41-7.54 25.71 25.71 0 0 1 8.88-6q5.65-2.46 14.47-2.46a43.44 43.44 0 0 1 11.89 1.6 29.61 29.61 0 0 1 9.88 4.8 24 24 0 0 1 6.77 7.94 23.11 23.11 0 0 1 2.53 11h-8a17.94 17.94 0 0 0-7.24-14 22.44 22.44 0 0 0-7.18-3.55 30 30 0 0 0-8.53-1.2 36 36 0 0 0-7.94.86 20.2 20.2 0 0 0-6.71 2.74 14.36 14.36 0 0 0-4.65 5 15.22 15.22 0 0 0-1.76 7.65 11.51 11.51 0 0 0 1 5 10.54 10.54 0 0 0 2.77 3.6 14.64 14.64 0 0 0 4.06 2.4 31.22 31.22 0 0 0 4.88 1.49l20.48 4.91a60 60 0 0 1 8.41 2.8 28 28 0 0 1 6.94 4.11 17.5 17.5 0 0 1 4.71 6 19.66 19.66 0 0 1 1.7 8.57 30.42 30.42 0 0 1-.29 3.65 18 18 0 0 1-1.41 4.86 24.18 24.18 0 0 1-3.18 5.2 19.83 19.83 0 0 1-5.65 4.74 33.37 33.37 0 0 1-8.88 3.48 53.38 53.38 0 0 1-12.71 1.31 54.49 54.49 0 0 1-13.77-1.66 30 30 0 0 1-10.83-5.08 22.44 22.44 0 0 1-6.88-8.8 28.06 28.06 0 0 1-2.01-12.92h8a22.37 22.37 0 0 0 2 10.51zm-23.3-65.25v81.59h-8v-81.59zm-48.6 0a37.63 37.63 0 0 1 9.83 1.26 24 24 0 0 1 8.07 3.83 18.54 18.54 0 0 1 5.53 6.63 20.85 20.85 0 0 1 2.06 9.54 22.44 22.44 0 0 1-4.12 13.48q-4.12 5.72-12.24 7.32v.23a19.09 19.09 0 0 1 6.82 2.12 13.54 13.54 0 0 1 4.41 3.94 16.11 16.11 0 0 1 2.47 5.54 40 40 0 0 1 1 6.8q.11 2.06.24 5t.47 6a36 36 0 0 0 1.12 5.72 10.77 10.77 0 0 0 2.06 4.17H375a9.8 9.8 0 0 1-1.12-2.8 24.05 24.05 0 0 1-.59-3.43c-.12-1.18-.22-2.34-.29-3.48s-.16-2.13-.24-3q-.24-4.34-.76-8.63a23.13 23.13 0 0 0-2.24-7.66 13.65 13.65 0 0 0-4.94-5.43q-3.24-2.06-8.88-1.83h-30.36v36.27h-8v-81.59zm-.59 38.74a21.94 21.94 0 0 0 6.94-1.09 17.42 17.42 0 0 0 5.77-3.14 15.46 15.46 0 0 0 3.94-5 14.65 14.65 0 0 0 1.47-6.68q0-7.54-4.47-11.88t-13.65-4.34h-29.93v32.11z" fill="#1c388e" stroke="#1c388e" strokeMiterlimit="10" strokeWidth="2"/>
          <path d="M256.48 199.91H235.1L219 216.84h20.77l11 55h-212l11-55h20.74L54.4 199.91H33L14.39 293H275.1zM144.75 28.36a85.16 85.16 0 0 1 85.07 85.07c0 52.69-57.43 98-85.07 118.34-27.64-20.37-85.07-65.65-85.07-118.34a85.16 85.16 0 0 1 85.07-85.07zm0 226.85c22.05-16.54 104-70.52 104-141.78a104 104 0 1 0-207.94 0c-.03 71.26 81.89 125.24 103.94 141.78z" fill="#444443"/>
          <path d="M200.44 105h-39.8V65.22A3.62 3.62 0 0 0 157 61.6h-21.7a3.62 3.62 0 0 0-3.62 3.62V105h-39.8a3.62 3.62 0 0 0-3.62 3.62v21.71a3.62 3.62 0 0 0 3.62 3.67h39.8v39.8a3.62 3.62 0 0 0 3.62 3.62H157a3.62 3.62 0 0 0 3.62-3.62V134h39.8a3.62 3.62 0 0 0 3.62-3.62v-21.74a3.62 3.62 0 0 0-3.6-3.64z" fill="#444443"/></svg>
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
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-lg">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              Services
            </Link>

            <Link
              to="/projects"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              Projects
            </Link>

            <Link
              to="/news"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              News
            </Link>

            <Link
              to="/team"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              Team
            </Link>

        
            <Link
              to="/app"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
            >
              App
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-black"
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
