import React from "react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Contact.css";

// Used this tutorial to create email form: https://medium.com/@thomasaugot/create-a-react-contact-form-with-email-js-cad2c8606f33
function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // replace service id and update template later
  //   // currently these messages will go to my email
  //   // integrate netlify with sendForm code
  //   emailjs
  //     .sendForm("service_ovv4bhg", "template_mp16n74", form.current, {
  //       publicKey: "dif7BQrUeE-vta83w",
  //     })
  //     .then(
  //       (result) => {
  //         setStateMessage("Message sent!");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); //hides the message after 5 seconds
  //       },
  //       (error) => {
  //         setStateMessage("Something went wrong, please try again later.");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000);
  //       }
  //     );
  //   // Clears the form after sending the email
  //   e.target.reset();
  // };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    setStateMessage("Message sent!");
    setTimeout(() => {
      setStateMessage(null);
      setIsSubmitting(false);
      e.target.reset();
    }, 5000);
  };

  return (
    <main className="contact-wrapper">
      <div className="left">
        <span>
          For commissions and project inquiries, please email:
          ian.loomis@email.com or submit a message via this form.{" "}
        </span>
        <FaArrowRightLong />
      </div>
      <div className="right">
        {/* input name attributes must match the variables used in the emailjs template */}
        <form name="contact" method="POST" netlify onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message"></textarea>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {stateMessage && <span className="submit-msg">{stateMessage}</span>}
        </form>
      </div>
    </main>
  );
}

export default Contact;
