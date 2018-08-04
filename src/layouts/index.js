import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from '../../src/images/favicon.png'

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Steep Terrain"
      meta={[
        { name: "description", content: "Specialist mowing services for steep and difficult terrain" },
        { name: "keywords", content: "mowing, slashing, incline, steep, difficult terrain, " }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Header />
    <div className="flex flex-col flex-1 md:justify-top max-w-2xl mx-auto px-4 py-4 md:p-4 w-full">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
