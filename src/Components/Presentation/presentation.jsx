import "./presentation.css";
import React from "react";

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
            My name is Luis Tovar, nice to meet you!<br /> I specialize in
            frontend development and I love creating websites accessible to
            everyone. <br />I hope to be in touch soon.
          </p>
        </div>
      </div>
      <div className="about"></div>
    </>
  );
};

export default Presentation;
