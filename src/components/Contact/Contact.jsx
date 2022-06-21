import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3nrkr9",
        "template_vnz5ezo",
        form.current,
        "XnQKBqtNKLxGBqdml"
      )
      .then(
        (result) => {
          alert("Message Sent");
          const inputs = document.querySelectorAll(
            ".Full_Name , .email ,.message "
          );
          inputs.forEach((input) => {
            input.value = "";
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactContainer" id="Contact">
      <h1>Email Me</h1>
      <form onSubmit={sendEmail} ref={form} className="emailMe">
        <input
          type="text"
          name="user_name"
          className="Full_Name"
          placeholder="Full Name"
          required
        />
        <input
          name="user_email"
          type="email"
          className="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          type="text"
          className="message"
          placeholder="Your message "
          required
        />
        <input type="submit" className="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
