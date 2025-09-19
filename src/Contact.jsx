// src/ContactUs.jsx
import React from "react";

function Contact() {
  return (
    <section 
      className="py-5" 
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="container">
        <h1 className="text-center mb-4" style={{ color: "#7154CB" }}>
          Contact Us
        </h1>
        <p className="text-center mb-5">
          We’d love to hear from you! Fill out the form below or contact us through our social media.
        </p>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#7154CB", border: "none" }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-center">
            <h5 className="mb-3">📍 Address</h5>
            <p>123 TechnoMark Street, Cairo, Egypt</p>

            <h5 className="mb-3">📞 Phone</h5>
            <p>+20 123 456 7890</p>

            <h5 className="mb-3">✉️ Email</h5>
            <p>info@technomark.com</p>

            <h5 className="mb-3">🌐 Follow Us</h5>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> |{" "}
              <a href="https://wa.me/201234567890" target="_blank" rel="noreferrer">WhatsApp</a> |{" "}
              <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
