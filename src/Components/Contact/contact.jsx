import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="section__title">Contact me!</h1>
      <div className="form__container">
        <form action="">
          
          <div className="input__container">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="input__container">
            <label htmlFor="name">Email: </label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="input__container">
            <label htmlFor="message">Message: </label>
            <textarea type="message"id="message"name="message" rows="4" required></textarea>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
