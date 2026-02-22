import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HospitalVideo from "../assets/Hospital.mp4";
import { Link } from "react-router-dom";

export default function HeroVideo() {
  return (
    <div className="position-relative vh-100 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
      >
        <source src={HospitalVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div
        className="position-relative z-2 d-flex flex-column justify-content-center align-items-center text-white h-100"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
          animation: "fadeIn 1.2s ease-in-out",
        }}
      >
        {/* Title */}
        <h1
          className="fw-bold text-center"
          style={{
            textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
            fontSize: "3.2rem",
            letterSpacing: "1px",
          }}
        >
          Best Medical Services
        </h1>

        {/* Subtitle */}
        <p
          className="lead text-center mt-3 mb-4"
          style={{
            textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
            maxWidth: "600px",
          }}
        >
          Caring for you with compassion and the latest in medical technology.
        </p>

        {/* Blue Gradient Button */}
        <Link to="form/">
          <button
            className="btn btn-lg text-white fw-semibold"
            style={{
              background: "linear-gradient(90deg, #007bff, #00b4d8)",
              border: "none",
              borderRadius: "30px",
              padding: "10px 28px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.07)";
              e.target.style.boxShadow = "0 8px 25px rgba(0, 150, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            }}
          >
            Book an Appointment
          </button>
        </Link>

        {/* Scroll-down Arrow */}
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            fontSize: "2rem",
            animation: "gentleBounce 2.5s infinite",
            opacity: 0.8,
          }}
        >
          ↓
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes gentleBounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-8px); }
            60% { transform: translateY(-4px); }
          }
        `}
      </style>
    </div>
  );
}

