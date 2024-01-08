import "./presentation.css";
import React from "react";
import Menu from "../menu/menu";

const Presentation = () => {
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
          <p>
            My name is Luis Tovar, nice to meet you!<br /> <br /> I specialize in
            frontend development and I love creating websites accessible to
            everyone, I hope to be in touch soon!
          </p>
        </div>
        <div className="menu__container">
          <Menu/>
        </div>
        <div className="buttons__container">
          <a href="#"><img src="../../img/linkedin-black.png" alt="" className="socialmedia__icon" /></a>
          <a href="#"><img src="../../img/GitHub-black.png" alt="" className="socialmedia__icon" /></a>
          <a href="#"><img src="../../img/instagram-black.png" alt="" className="socialmedia__icon" /></a>
          <a href="#"><img src="../../img/x-black.png" alt="" className="socialmedia__icon" /></a>
        </div>
      </div>
      <div className="about"></div>
    </>
  );
};

export default Presentation;
