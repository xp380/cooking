import React, { useState } from "react";

import "./Footer.css";

const Footer = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  const GetTime = () => {
    setSeconds(new Date().getSeconds());
    console.count(seconds);
  };

  setTimeout(() => {
    GetTime();
  }, 1000);

  
  return (
    <footer className="footerContainer">
      <div className="footerContent">        
      </div>
    </footer>
  );
};

export default Footer;
