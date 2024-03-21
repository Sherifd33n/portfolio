import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export default function ContactMe() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fq3c86l", "template_rf2soc8", formRef.current, {
        publicKey: "QuOOXJJYItxjDgC_q",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <section id="contact" className="contact-section">
      <div>
        <h1 className="section-title">Contact Me</h1>
        <div className="contact-container">
          <div className="textContainer">
            <div className="textContainer-content">
              <h2>Email</h2>
              <span>jamiusherif57@gmail.com</span>
            </div>

            <div className="textContainer-content">
              <h2>Address</h2>
              <span>Ilorin, Nigeria.</span>
            </div>

            <div className="textContainer-content">
              <h2>Phone</h2>
              <span>+234 808 890 4493</span>
            </div>
          </div>

          <div className="formContainer">
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" required placeholder="Name" name="name" />
              <input type="email" required placeholder="Email" name="email" />
              <textarea rows={8} placeholder="Message" name="message" />
              <input className="submit" type="submit" placeholder="Submit" />
              {error && "Error"}
              {success && "Success"}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
