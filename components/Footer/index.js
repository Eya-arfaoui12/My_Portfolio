import React from "react";
import Socials from "../Socials";
import Button from "../Button";

const Footer = () => {
  // Email address for scheduling a call
  const email = "eyaarfaoui300@gmail.com"; 

  // Function to handle button click
  const handleClick = () => {
    // Opens Gmail compose in a browser
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Schedule%20a%20call`;
  };

  return (
    <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
      <div>
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-10">
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            LET&apos;S WORK
          </h1>
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            TOGETHER
          </h1>
          <Button type="primary" onClick={handleClick}>
            Schedule a call
          </Button>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
