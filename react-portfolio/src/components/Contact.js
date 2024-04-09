import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact Information</h2>
      <form>
        <div>
          <label htmlFor="name">Daniel Hengel:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">d.hengel@icloud.com</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">I look forward to connecting with you.</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
