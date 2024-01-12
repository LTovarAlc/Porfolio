import "./presentation.css";
import React from "react";
import Menu from "../menu/menu";

const Presentation = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="presentation">
        <div className="avatar-greeting__container">
          <img src="../../img/avatar.png" alt="Avatar" className="Avatar" />
          <div className="greeting">
            <h1>Hi there!</h1>
            <img src="../../img/saludo.png" alt="Greeting" />
          </div>
        </div>
        <div className="description">
          <h3>I´m Luis Tovar, nice to meet you!</h3>
          <p>
            I specialize in
            frontend development and I love creating websites accessible to
            everyone, I hope to be in contact soon!
          </p>
        </div>
        <div className="menu__container">
          <Menu scrollToSection={scrollToSection}/>
        </div>
        <div className="buttons__container">
          <a href="https://www.linkedin.com/in/ltovardev/" target="_blank"><img src="../../img/linkedin-black.png" alt="" className="socialmedia__icon" /></a>
          <a href="https://github.com/LTovarAlc" target="_blank"><img src="../../img/GitHub-black.png" alt="" className="socialmedia__icon" /></a>
          <a href="#" target="_blank"><img src="../../img/instagram-black.png" alt="" className="socialmedia__icon" /></a>
          <a href="https://twitter.com/LTovarDev" target="_blank"><img src="../../img/x-black.png" alt="" className="socialmedia__icon" /></a>
        </div>
      </div>
    </>
  );
};

export default Presentation;
