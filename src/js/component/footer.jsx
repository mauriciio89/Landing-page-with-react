import React from "react";

//create your first component
const Footer = () => {
  return (
    <div className="fixed-bottom container-fluid">
    <div className="text-white text-center text-lg-start bg-dark">
      <div className="text-center p-3">
        © 2022 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MG
        </a>
      </div>
    </div>
    </div>
  );
};

export default Footer;
