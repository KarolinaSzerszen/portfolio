import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_2058sus";
    const templateId = "template_2izqrj9";
    const publicKey = "W47sW5BJw1ipks2rr";

    const templateParams = {
      name: name,
      email: email,
      to_name: "Karolina Szerszen",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatusMessage("Your message was sent successfuly!");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => setStatusMessage(""), 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatusMessage("Oops! Something went wrong. Please try again.");
        setTimeout(() => setStatusMessage(""), 3000);
      });
  };
  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="form-button" type="submit">
          Send
        </button>
        {statusMessage && (
          <div className="status-message">{statusMessage} </div>
        )}
      </form>
    </div>
  );
}

export default ContactMe;
