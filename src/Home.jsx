// src/Home.jsx
import React, { useState, useEffect } from "react";
import img1 from "../src/images/man.png";
import logo from "../src/images/logoo.png";
import {
  FaPaintBrush, FaFilm, FaPenFancy, FaBullhorn,
  FaLaptopCode, FaMobileAlt, FaFacebook, FaBehance, FaWhatsapp
} from "react-icons/fa";

function Home() {
  // typing effect
  const fullText = "TechnoMark";
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseAfterTyping = 1500;
  const pauseAfterDeleting = 500;

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (!isDeleting && charIndex <= fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    }

    if (charIndex > fullText.length) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex((prev) => prev - 1);
      }, pauseAfterTyping);
    }

    if (isDeleting && charIndex < 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCharIndex(1);
      }, pauseAfterDeleting);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <>
      <div>
        {/* Hero */}
        <section
          className="text-center d-flex justify-content-center align-items-center position-relative px-3"
          style={{ backgroundColor: "#7154CB", minHeight: "85vh" }}
        >
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "clamp(28px, 6vw, 60px)",
                fontWeight: "bold",
              }}
            >
              All you need in{" "}
              <span style={{ color: "#FA9D08" }}>
                <span className="typed-text">{text}</span>
                <span className="typed-caret" aria-hidden="true"></span>
              </span>
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "clamp(14px, 2.5vw, 18px)",
                padding: "0 10px",
              }}
            >
              TechnoMark Marketing and Advertising Agency provides you with
              everything you need in one place.
            </p>
            <button className="btn homeButton mt-3">Contact Us</button>
          </div>

          {/* Wave */}
          <div className="position-absolute bottom-0 w-100 wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-100"
            >
              <path
                fill="#EFEFEF"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Welcome */}
        <section
          className="text-center d-flex justify-content-center align-items-center py-5 px-3"
          style={{ backgroundColor: "#EFEFEF" }}
        >
          <div>
            <p className="fs-5">Welcome to TechnoMark</p>
            <h1 className="fw-bold">Here you will find all you need</h1>
            <p>
              TechnoMark provides many different services for advertising
              through which you can develop your business faster and more
              professionally.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="pt-3 px-3" style={{ backgroundColor: "#7154CB" }}>
          <div className="container">
            <div className="row d-flex align-items-center text-center text-md-start">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <img
                  src={img1}
                  className="img-fluid man"
                  alt="About TechnoMark"
                />
              </div>
              <div
                className="col-12 col-md-6 text-white"
                style={{ fontSize: "clamp(20px, 2vw, 30px)" }}
              >
                <p>
                  TechnoMark is an emerging advertising company founded by a
                  group of talented entrepreneurs with extensive experience in
                  marketing and advertising.
                </p>
                <p>
                  Our mission is to provide innovative and creative solutions
                  that help brands grow, engage with their audience, and achieve
                  their goals effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-5 px-3" style={{ backgroundColor: "#EFEFEF" }}>
          <div className="container">
            <h1
              className="text-center mt-4"
              style={{ color: "#FA9D08", fontSize: "clamp(26px, 5vw, 50px)" }}
            >
              Services
            </h1>
            <h3 className="text-center mb-4">
              All the services you need in one place.
            </h3>

            <div className="row g-4">
              {[
                {
                  icon: <FaPaintBrush />,
                  title: "Graphic Design",
                  text: "Graphic design is one of the most important services required and provides insight into many types of designs that you may need.",
                },
                {
                  icon: <FaFilm />,
                  title: "Motion Graphic",
                  text: "We create complete visual identities, logos, and marketing materials that make your brand stand out and attract customers.",
                },
                {
                  icon: <FaPenFancy />,
                  title: "Content Creator",
                  text: "We craft original and compelling content tailored to your audience, boosting engagement and building trust with your brand.",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Media Buyer",
                  text: "We plan and manage paid advertising campaigns across different platforms to maximize your reach and ROI.",
                },
                {
                  icon: <FaLaptopCode />,
                  title: "Web Development",
                  text: "We develop fast, responsive, and user-friendly websites optimized for all devices and audiences.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Development",
                  text: "We design and build innovative mobile applications for both Android and iOS to support and grow your business.",
                },
              ].map((service, i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-4">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <div style={{ fontSize: "40px", color: "#7154CB" }}>
                        {service.icon}
                      </div>
                      <h3 className="mt-2">{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section
          style={{ backgroundColor: "#7154CB" }}
          className="text-center text-white px-3"
        >
          <div className="container py-5">
            <div className="row gy-4">
              <div className="col-12 col-md-4">
                <img
                  src={logo}
                  className="img-fluid mb-3"
                  alt="logo"
                  style={{ maxWidth: "150px" }}
                />
                <p>
                  Advertising and Marketing Agency is ready to receive your
                  requests
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h5 className="fw-bold mb-3">Services</h5>
                <p>Graphic Design</p>
                <p>Motion Graphic</p>
                <p>Content Creator</p>
                <p>Web Development</p>
                <p>Mobile Development</p>
              </div>
              <div className="col-12 col-md-4">
                <h5 className="fw-bold mb-3">Follow Us</h5>
                <a
                  href="https://www.facebook.com/profile.php?id=61574918168250"
                  className="text-white text-decoration-none d-block"
                >
                  <FaFacebook className="me-2" /> Facebook
                </a>
                <a
                  href="https://www.behance.net/tecnomark"
                  className="text-white text-decoration-none d-block"
                >
                  <FaBehance className="me-2" /> Behance
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B201017782287"
                  className="text-white text-decoration-none d-block"
                >
                  <FaWhatsapp className="me-2" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
