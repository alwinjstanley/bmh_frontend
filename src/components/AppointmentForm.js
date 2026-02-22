import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/departments/").then((res) => setDepartments(res.data));
    axios.get("http://127.0.0.1:8000/api/doctors/").then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/appointments/", formData)
      .then((res) => {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setFormData({
          patient_name: "",
          email: "",
          phone: "",
          department: "",
          doctor: "",
          date: "",
          time: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to book appointment.");
      });
  };

  return (
    <div className="row justify-content-center my-3">
      <AnimatePresence>
        {success ? (
          <motion.div
            key="success"
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
                width: "420px",
              }}
            >
              <FaCheckCircle
                size={60}
                className="mb-3"
                style={{ color: "#00FFB3" }}
              />
              <h4 className="fw-bold mb-2">Appointment Booked Successfully!</h4>
              <p>Your appointment details have been received. We’ll contact you soon.</p>
              <Button
                variant="light"
                className="mt-3 fw-semibold"
                onClick={() => setSuccess(false)}
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
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="col-md-10"
          >
            <h4 className="text-center mb-4 text-primary">
              📅 Book an Appointment
            </h4>

            <style>{`
              .appointment-form {
                padding: 2rem;
                border-radius: 15px;
                box-shadow: 0 12px 25px rgba(0,0,0,0.1);
                background-color: #ffffff;
                transition: transform 0.2s, box-shadow 0.2s;
              }
              .appointment-form:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 30px rgba(0,0,0,0.15);
              }
              .form-control:focus {
                border-color: #6610f2;
                box-shadow: 0 0 0 0.2rem rgba(102,16,242,0.25);
              }
              .submit-btn {
                background: linear-gradient(45deg, #0d6efd, #6610f2);
                border: none;
                color: white;
                font-weight: bold;
                transition: transform 0.2s, box-shadow 0.2s;
              }
              .submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 12px rgba(0,0,0,0.2);
              }
            `}</style>

            <Form onSubmit={handleSubmit} className="appointment-form">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.title}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Doctor</Form.Label>
                <Form.Select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className="submit-btn w-100">
                Book Appointment
              </Button>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentForm;
