import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/bills"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
      }}
    >
      <div
        className="p-5 shadow rounded-4"
        style={{
          backgroundColor: "#fff",
          maxWidth: "500px",
          transition: "transform 0.5s ease",
        }}
      >
        <FaCheckCircle
          color="#28a745"
          size={80}
          className="mb-3 animate__animated animate__fadeInDown"
        />
        <h2 className="text-success fw-bold mb-3">
          Payment Successful!
        </h2>
        <p className="text-muted fs-5 mb-4">
          Thank you — your payment has been received successfully.
        </p>
        <div
          className="spinner-border text-success mb-3"
          role="status"
          style={{ width: "2.5rem", height: "2.5rem" }}
        ></div>
        <p className="text-secondary">
          Redirecting back to your bills...
        </p>
      </div>
    </div>
  );
}

