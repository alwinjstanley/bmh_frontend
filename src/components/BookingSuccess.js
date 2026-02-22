import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const BookingSuccess = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="d-flex justify-content-center align-items-center my-5"
    >
      <Card
        className="text-center shadow-lg border-0 p-4"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg, #0d6efd, #6610f2)",
          color: "white",
          width: "400px",
        }}
      >
        <FaCheckCircle size={60} className="mb-3 text-success" style={{ color: "#00FFB3" }} />
        <h4 className="fw-bold mb-2">Appointment Booked Successfully!</h4>
        <p>Your appointment details have been sent. You’ll receive a confirmation soon.</p>
        <Button
          variant="light"
          className="mt-3 fw-semibold"
          onClick={onClose}
          style={{
            borderRadius: "50px",
            padding: "10px 20px",
            color: "#6610f2",
          }}
        >
          Book Another Appointment
        </Button>
      </Card>
    </motion.div>
  );
};

export default BookingSuccess;
