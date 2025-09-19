import React from "react";
import { useParams, Link } from "react-router-dom";

// صور مؤقتة (غيرهم بالصور اللي عندك)
import graphicImg from "../src/images/img1.jpg";
import motionImg from "../src/images/img2.jpg";
import contentImg from "../src/images/img3.jpg";
import mediaImg from "../src/images/img4.jpg";
import webImg from "../src/images/img5.jpg";
import mobileImg from "../src/images/img6.jpg";

function ServiceDetails() {
  const { id } = useParams();

  const services = {
    "graphic-design": {
      title: "Graphic Design",
      details:
        "Graphic design is one of the most important services and provides insight into many types of designs that you may need.",
      img: graphicImg,
    },
    "motion-graphic": {
      title: "Motion Graphic",
      details:
        "We create complete visual identities, logos, and marketing materials that make your brand stand out.",
      img: motionImg,
    },
    "content-creator": {
      title: "Content Creator",
      details:
        "We craft original and compelling content tailored to your audience, boosting engagement.",
      img: contentImg,
    },
    "media-buyer": {
      title: "Media Buyer",
      details:
        "We plan and manage paid advertising campaigns across different platforms to maximize your ROI.",
      img: mediaImg,
    },
    "web-dev": {
      title: "Web Development",
      details:
        "We offer full web development solutions: custom websites, e-commerce, CMS, and performance optimization.",
      img: webImg,
    },
    "mobile-apps": {
      title: "Mobile Development",
      details:
        "We design and develop Android & iOS applications tailored for seamless user experience.",
      img: mobileImg,
    },
  };

  const service = services[id];

  if (!service) {
    return <h2 className="text-center mt-5">Service not found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* صورة الخدمة */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={service.img}
            alt={service.title}
            className="w-100 rounded shadow"
          />
        </div>

        {/* تفاصيل الخدمة */}
        <div className="col-md-6">
          <h1 style={{ color: "#7154CB", fontWeight: "bold" }}>
            {service.title}
          </h1>
          <p className="lead">{service.details}</p>

          <Link to="/services" className="btn btn-outline-primary mt-4">
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
