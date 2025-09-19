// src/Home.jsx
import React, { useState, useEffect } from "react";
import img1 from "../src/images/man.png";
import logo from "../src/images/logoo.png";
import { 
  FaPaintBrush, FaFilm, FaPenFancy, FaBullhorn, 
  FaLaptopCode, FaMobileAlt, FaFacebook, FaBehance, FaWhatsapp 
} from "react-icons/fa";
import About from "./About";

function Home() {
  // typing effect settings
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
        {/* Hero Section */}
        <section
          className="text-center d-flex justify-content-center align-items-center position-relative"
          style={{ backgroundColor: "#7154CB", height: "85vh" }}
        >
          <div>
            <h1 style={{ color: "white", fontSize: "60px", fontWeight: "bold" }}>
              All you need in{" "}
              <span style={{ color: "#FA9D08" }}>
                <span className="typed-text">{text}</span>
                <span className="typed-caret" aria-hidden="true"></span>
              </span>
            </h1>
            <p style={{ color: "white" }}>
              TechnoMark Marketing and Advertising Agency provides you with everything you need in one 
              place.
            </p>
            <button className="btn homeButton">Contact Us</button>
          </div>

          {/* Wave inside hero */}
          <div className="position-absolute bottom-0 w-100 wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-100">
              <path
                fill="#EFEFEF"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Welcome */}
        <section className="text-center d-flex justify-content-center align-items-center py-5" style={{ height: "250px", backgroundColor: "#EFEFEF" }}>
          <div>
            <p>Welcome to TechnoMark</p>
            <h1>Here you will find all you need</h1>
            <p>
              TechnoMark provides many different services for advertising through which you can develop your business faster and more professionally.
            </p>
          </div>
        </section>

        {/* About Us */}
       <section className="pt-3" style={{ backgroundColor: "#7154CB" }}>
               <div className="container">
                 
                 <div className="row d-flex align-items-center">
                   <div className="col-md-6">
                     <img src={img1} className="w-75 man" alt="About TechnoMark" />
                   </div>
                   <div className="col-md-6 text-white" style={{ fontSize: "20px" }}>
                     <p>
                       TechnoMark is an emerging advertising company founded by a group
                       of talented entrepreneurs with extensive experience in marketing
                       and advertising.
                     </p>
                     <p>
                       Our mission is to provide innovative and creative solutions that
                       help brands grow, engage with their audience, and achieve their
                       goals effectively.
                     </p>
                   </div>
                 </div>
               </div>
             </section>

        {/* Services */}
        <section className="py-2" style={{ backgroundColor: "#EFEFEF" }}>
          <div className="container">
            <h1 className="text-center mt-4" style={{ color: "#FA9D08", fontSize: "50px" }}>
              Services
            </h1>
            <h3 className="text-center">All the services you need in one place.</h3>

            <div className="row d-flex align-items-center my-3">
              <div className="col-md-4" style={{ fontSize: "20px" }}>
                <div className="card">
                  <div className="card-body text-center">
                    <FaPaintBrush style={{ fontSize: "40px", color: "#7154CB" }} />
                    <h3 className="mt-2">Graphic Design</h3>
                    <p>Graphic design is one of the most important services required and provides insight into many types of designs that you may need.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ fontSize: "20px" }}>
                <div className="card">
                  <div className="card-body text-center">
                    <FaFilm style={{ fontSize: "40px", color: "#7154CB" }} />
                    <h3 className="mt-2">Motion Graphic</h3>
                    <p>We create complete visual identities, logos, and marketing materials that make your brand stand out and attract customers.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ fontSize: "20px" }}>
                <div className="card">
                  <div className="card-body text-center">
                    <FaPenFancy style={{ fontSize: "40px", color: "#7154CB" }} />
                    <h3 className="mt-2">Content Creator</h3>
                    <p>We craft original and compelling content tailored to your audience, boosting engagement and building trust with your brand.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex align-items-center my-3">
              <div className="col-md-4" style={{ fontSize: "20px" }}>
                <div className="card">
                  <div className="card-body text-center">
                    <FaBullhorn style={{ fontSize: "40px", color: "#7154CB" }} />
                    <h3 className="mt-2">Media Buyer</h3>
                    <p>We plan and manage paid advertising campaigns across different platforms to maximize your reach and ROI</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ fontSize: "20px" }}>
                <div className="card">
                  <div className="card-body text-center">
                    <FaLaptopCode style={{ fontSize: "40px", color: "#7154CB" }} />
                    <h3 className="mt-2">Web Development</h3>
                    <p>We develop fast, responsive, and user-friendly websites optimized for all devices and audiences.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ fontSize: "20px" }}>
                <div className="card">
                  <div className="card-body text-center">
                    <FaMobileAlt style={{ fontSize: "40px", color: "#7154CB" }} />
                    <h3 className="mt-2">Mobile Development</h3>
                    <p>We design and build innovative mobile applications for both Android and iOS to support and grow your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section style={{ backgroundColor: "#7154CB" }} className="text-center text-white">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <img src={logo} className="w-50 mb-3" alt="logo" />
                <p>Advertising and Marketing Agency is ready to receive your requests</p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold mb-3">Services</h5>
                <p>Graphic Design</p>
                <p>Motion Graphic</p>
                <p>Content Creator</p>
                <p>Web Development</p>
                <p>Mobile Development</p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold mb-3">Follow Us</h5>
                <a href="https://www.facebook.com/profile.php?id=61574918168250" style={{'textDecoration':'none','color':'white'}}><p><FaFacebook className="me-2" /> Facebook</p></a>
                <a href="https://www.facebook.com/profile.php?id=61574918168250" style={{'textDecoration':'none','color':'white'}}><p><FaBehance className="me-2" /> Behance</p></a>
                <a href="https://api.whatsapp.com/send?phone=%2B201017782287&context=Affc51WRJgUH40GjGrUsugg4gRajeAtVFm5oKjYxbBKAzcEdBAlF7jHz0B121mt8RnJnTLHEaDLWcSm_PeDdJuz7-U2xMHx-deBpPCPokULLkA55uc4NOtXP75AinKG6551_Wcf9lve1DZsMBG2_uO7myg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawM5a81leHRuA2FlbQIxMABicmlkETEzdm5EMG9vRVUyRG9maUNKAR4lxaUKSdJ9OVPR1qAKFv8Is9NI7BsAFSeKt7iiikmdPMxFoW7p-13lzhUCjA_aem_3VWyS5VlXW3BT7UxHJ58FQ" style={{'textDecoration':'none','color':'white'}}><p><FaWhatsapp className="me-2" /> WhatsApp</p></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
