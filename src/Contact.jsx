// src/ContactUs.jsx
import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaBehance,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="container">
        {/* Title */}
        <h1
          className="text-center mb-3 fw-bold"
          style={{ color: "#7154CB", fontSize: "clamp(28px, 6vw, 50px)" }}
        >
          Contact Us
        </h1>
        <p className="text-center mb-5 text-muted fs-5">
          We’d love to hear from you! Fill out the form below or connect with
          us through our channels.
        </p>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 rounded-3 text-white fw-semibold"
                    style={{
                      backgroundColor: "#7154CB",
                      border: "none",
                      padding: "12px",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="mb-4">
              <FaPhoneAlt size={24} color="#7154CB" />
              <h5 className="mt-2 mb-1 fw-bold">Phone</h5>
              <p className="text-muted mb-0">+20 10 17782287</p>
            </div>

            <div className="mb-4">
              <FaEnvelope size={24} color="#7154CB" />
              <h5 className="mt-2 mb-1 fw-bold">Email</h5>
              <p className="text-muted mb-0">technomark602@gmail.com</p>
            </div>

            <div>
              <h5 className="fw-bold mb-3">Follow Us</h5>
              <div className="d-flex gap-3 justify-content-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61574918168250"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#1877F2",
                    color: "#fff",
                  }}
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B201017782287"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#25D366",
                    color: "#fff",
                  }}
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://www.behance.net/tecnomark"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#1769FF",
                    color: "#fff",
                  }}
                >
                  <FaBehance size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
