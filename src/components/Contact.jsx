import { useState } from "react";
import "./Contact.css"
export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  function handleForm(e) {


    const { name, value } = e.target;

    setData((prev) => ({

      ...prev,
      [name]:value
    }))

  }
  function handleSubmit(e) {

    e.preventDefault();

    let phone = "916377292076";

    const text = `New Portfolio Message : %0A` + 
    `Name: ${data.name}%0A` + 
    `Email: ${data.email}%0A` + 
    `Message: ${data.message}`;
    
    const url = `https://wa.me/${phone}?text=${text}`

    window.open(url,"_blank");
    


  }
  return (

    <section class="contact-section" id="contact">
      <h2 class="contact-heading">Contact Me</h2>
      <span>Send a Message Directly on Whatsapp</span>

      <form class="contact-form" onSubmit={handleSubmit}>
        <div class="input-group">
          <input type="text" name="name" value={data.name} onChange={handleForm} required />
          <label>Name</label>
        </div>

        <div class="input-group">
          <input type="email" name="email" value={data.email} onChange={handleForm} required />
          <label>Email</label>
        </div>

        <div class="input-group">
          <textarea rows="4" name="message" value={data.message} onChange={handleForm} required></textarea>
          <label>Message</label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>


  )
}