// src/About.jsx
import React from "react";
import img1 from "../src/images/man.png";
import brand from "../src/images/brand.jpg";
import {
  FaPaintBrush,
  FaFilm,
  FaPenFancy,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#7154CB" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1
            style={{ fontSize: "clamp(28px, 6vw, 55px)", fontWeight: "bold" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="lead mt-3 fs-6 fs-md-5"
            style={{ maxWidth: "800px", margin: "auto", color: "#FFFFFF" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Bold ideas. Strategic execution. Lasting impact. We turn vision into
            reality—keeping our industry leading partners ahead of the curve.
          </motion.p>
        </div>
      </motion.div>

      {/* Company Intro */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row d-flex align-items-center">
            <motion.div
              className="col-12 col-md-6 mb-4 mb-md-0 text-center"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={img1}
                className="img-fluid w-100 w-md-75 rounded shadow"
                alt="About TechnoMark"
              />
            </motion.div>
            <motion.div
              className="col-12 col-md-6 fs-6 fs-md-5"
              style={{ color: "#000" }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ color: "#7154CB", fontWeight: "bold" }}>
                Who We Are
              </h2>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we Do */}
      <section className="py-5" style={{ backgroundColor: "#F9F9FF" }}>
        <div className="container">
          <h2
            style={{ color: "#7154CB", fontWeight: "bold" }}
            className="text-center mb-4"
          >
            What we Do?
          </h2>
          <div className="row align-items-center">
            {/* Text */}
            <motion.div
              className="col-12 col-md-6 fs-6 fs-md-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ color: "#000" }}
            >
              <h3 style={{ color: "#7154CB", fontWeight: "600" }}>
                Brand Building
              </h3>
              <p className="mb-4">Visual Identity — Video — Content Strategy</p>

              <h3 style={{ color: "#7154CB", fontWeight: "600" }}>
                Product Development
              </h3>
              <p className="mb-4">Web Design — Design Systems — eCommerce</p>

              <h3 style={{ color: "#7154CB", fontWeight: "600" }}>
                Growth Marketing
              </h3>
              <p className="mb-0">Paid Media — CRO — Analytics — SEM Strategy</p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={brand}
                className="img-fluid w-100 w-md-75 rounded shadow-lg"
                alt="Brand strategy visual"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <motion.section
        className="py-5"
        style={{ backgroundColor: "#7154CB" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center text-white">
          <h2 className="mb-5" style={{ fontWeight: "bold" }}>
            Our Philosophy
          </h2>
          <div className="row">
            {[
              {
                title: "Vision",
                text: "To become a leading creative agency that transforms businesses into iconic brands worldwide.",
              },
              {
                title: "Mission",
                text: "Delivering impactful strategies and innovative solutions that connect brands with people.",
              },
              {
                title: "Values",
                text: "Creativity, Integrity, Collaboration, and Continuous Innovation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-12 col-md-4 mb-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white">{item.title}</h4>
                <p className="text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{ color: "#7154CB", fontWeight: "bold" }}
          >
            What We Do
          </h2>
          <div className="row text-center">
            {[
              {
                icon: <FaPaintBrush size={50} />,
                title: "Creative Design",
                text: "From branding to UI/UX, we craft designs that engage and inspire.",
              },
              {
                icon: <FaFilm size={50} />,
                title: "Media Production",
                text: "Engaging video ads, animations, and media content for your audience.",
              },
              {
                icon: <FaPenFancy size={50} />,
                title: "Content Strategy",
                text: "We build compelling stories that align with your brand voice.",
              },
              {
                icon: <FaBullhorn size={50} />,
                title: "Digital Marketing",
                text: "Targeted campaigns that drive growth and maximize ROI.",
              },
              {
                icon: <FaLaptopCode size={50} />,
                title: "Web Development",
                text: "High-performing websites tailored to your business needs.",
              },
              {
                icon: <FaMobileAlt size={50} />,
                title: "App Development",
                text: "Intuitive mobile apps that bring your brand closer to your audience.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="col-12 col-sm-6 col-md-4 mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div style={{ color: "#7154CB" }}>{service.icon}</div>
                <h5 className="mt-3" style={{ color: "#000" }}>
                  {service.title}
                </h5>
                <p style={{ color: "#333" }}>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
