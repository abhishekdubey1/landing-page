import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="availability">
      <span className="dot green">&#8226; </span>Emily is now{" "}
      <span className="green">available </span>
      to hire
      <Link to="/route1" className="btn">
        {" "}
        Hire Emily
      </Link>
    </div>
  );
};

export default Footer;
