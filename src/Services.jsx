import React from "react";
import { Link } from "react-router-dom";
import {
  FaPaintBrush,
  FaFilm,
  FaPenFancy,
  FaBullhorn,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

function Services() {
  return (
    <section
      className="py-2"
      style={{ backgroundColor: "#EFEFEF", minHeight: "75vh" }}
    >
      <div className="container">
        <h1
          className="text-center mt-4"
          style={{ color: "#FA9D08", fontSize: "50px" }}
        >
          Services
        </h1>
        <h3 className="text-center">All the services you need in one place.</h3>

        <div className="row d-flex align-items-stretch my-3">
          <div className="col-6 col-md-4 mb-4">
            <Link
              to="/service/graphic-design"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center">
                  <FaPaintBrush style={{ fontSize: "40px", color: "#7154CB" }} />
                  <h3 className="mt-2">Graphic Design</h3>
                  <p>
                    Graphic design is one of the most important services and
                    provides insight into many types of designs that you may
                    need.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <Link
              to="/service/motion-graphic"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center">
                  <FaFilm style={{ fontSize: "40px", color: "#7154CB" }} />
                  <h3 className="mt-2">Motion Graphic</h3>
                  <p>
                    We create complete visual identities, logos, and marketing
                    materials that make your brand stand out.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <Link
              to="/service/content-creator"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center">
                  <FaPenFancy style={{ fontSize: "40px", color: "#7154CB" }} />
                  <h3 className="mt-2">Content Creator</h3>
                  <p>
                    We craft original and compelling content tailored to your
                    audience, boosting engagement.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <Link
              to="/service/media-buyer"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center">
                  <FaBullhorn style={{ fontSize: "40px", color: "#7154CB" }} />
                  <h3 className="mt-2">Media Buyer</h3>
                  <p>
                    We plan and manage paid advertising campaigns across
                    different platforms to maximize your ROI.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <Link
              to="/service/web-dev"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center">
                  <FaLaptopCode style={{ fontSize: "40px", color: "#7154CB" }} />
                  <h3 className="mt-2">Web Development</h3>
                  <p>
                    We develop fast, responsive, and user-friendly websites
                    optimized for all devices.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <Link
              to="/service/mobile-apps"
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm service-card">
                <div className="card-body text-center">
                  <FaMobileAlt style={{ fontSize: "40px", color: "#7154CB" }} />
                  <h3 className="mt-2">Mobile Development</h3>
                  <p>
                    We design and build innovative mobile applications for both
                    Android and iOS.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
