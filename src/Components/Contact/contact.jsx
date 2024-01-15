import "./contact.css";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <section className="contact" id="contact">
      <h1 className="section__title">Contact me!</h1>
      <div className="form__container">
        <form action="" onSubmit={handleSubmit}>
          <div className="input__container">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input__container">
            <label htmlFor="name">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input__container">
            <label htmlFor="message">Message: </label>
            <textarea
              type="message"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
        </form>
        
        <button onClick={handleSubmit} className="send">Send</button>

      </div>
    </section>
  );
};

export default Contact;
