import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Contact.css";

// Used this tutorial to create initial iteration of email form: https://medium.com/@thomasaugot/create-a-react-contact-form-with-email-js-cad2c8606f33
// Used this tutorial for netlify form integration: https://www.youtube.com/watch?v=gi-iKLkB8R8
function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(`name: ${name}, email: ${email}, message: ${message}`);
  const form = useRef();

   const sendEmail = (e) => {
     e.persist();
     e.preventDefault();
     setIsSubmitting(true);
     // replace service id and update template later
     // currently these messages will go to my email
     emailjs
       .sendForm("service_ovv4bhg", "template_mp16n74", form.current, {
         publicKey: "dif7BQrUeE-vta83w",
       })
       .then(
         (result) => {
           setStateMessage("Message sent!");
           setIsSubmitting(false);
           setTimeout(() => {
             setStateMessage(null);
             setName("");
             setEmail("");
             setMessage("");
           }, 5000); //hides the message after 5 seconds
         },
         (error) => {
           setStateMessage("Something went wrong, please try again later.");
           setIsSubmitting(false);
           setTimeout(() => {
             setStateMessage(null);
           }, 5000);
         }
       );
     // Clears the form after sending the email
   };

  // const handleSubmit = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setStateMessage("Message sent!");
  //   setTimeout(() => {
  //     setStateMessage(null);
  //     setIsSubmitting(false);
  //   }, 5000);
  //   e.target.reset();
  // };

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
        <form ref={form} name="contact" method="POST" onSubmit={sendEmail}>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
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
