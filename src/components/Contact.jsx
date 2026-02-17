import "./Contact.css"
export default function Contact(){

    return (

        <section class="contact-section" id="contact">
  <h2 class="contact-heading">Contact Me</h2>

  <form class="contact-form">
    <div class="input-group">
      <input type="text" required />
      <label>Name</label>
    </div>

    <div class="input-group">
      <input type="email" required />
      <label>Email</label>
    </div>

    <div class="input-group">
      <textarea rows="4" required></textarea>
      <label>Message</label>
    </div>

    <button type="submit">Send Message</button>
  </form>
</section>


    )
}