import "./contact.css";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbglocp', 'template_3hziy2m', form.current, '4LYfef9_CkNTqHdv9')
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          // Mensaje de éxito
          setMessage("Message sent successfully. I´ll contact you soon.");
          // Limpiar los campos del formulario
          form.current.reset();
        } else {
          // Mensaje de error
          setMessage("Error sending the message. Please try again later.");
        }
      })
      .catch((error) => {
        console.log(error.text);
        // Mensaje de error
        setMessage("Error sending the message. Please try again later.");
      });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="section__title">Contact me!</h1>
      <div className="form__container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input__container">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="user_name"
              required
            />
          </div>

          <div className="input__container">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="user_email"
              required
            />
          </div>

          <div className="input__container">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="send" value="Send">
            Send
          </button>
        </form>
        {message && <p className={message.includes("successfully") ? "success-message" : "error-message"}>{message}</p>}
      </div>
      {/* <p className="footer">
      This portfolio was developed by me, Luis Tovar. <br /> Using React.js as the main tool, along with other tools such as AnimateCSS and MailJS.
      </p> */}
    </section>
  );
};

export default Contact;
