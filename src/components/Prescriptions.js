import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import Bills from "./Bills";
import { FaUserMd, FaCalendarAlt, FaPills, FaNotesMedical } from "react-icons/fa";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrescriptions = async () => {
      const token = localStorage.getItem("access");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/my-prescriptions/",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setPrescriptions(response.data);
      } catch (err) {
        console.error("Error fetching prescriptions:", err);
        if (err.response && err.response.status === 401) {
          navigate("/login");
        }
      }
    };

    fetchPrescriptions();
  }, [navigate]);

  return (
    <div
      className="container my-5"
      style={{
        minHeight: "80vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <style>{`
        .prescription-card {
          border-radius: 15px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .prescription-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .prescription-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .badge-doctor {
          background-color: #0d6efd;
          font-size: 0.8rem;
        }
        .prescription-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .prescription-item svg {
          margin-right: 8px;
          color: #0d6efd;
        }
      `}</style>

      <h2 className="mb-4 text-primary">My Prescriptions</h2>

      {prescriptions.length === 0 ? (
        <p>No prescriptions found.</p>
      ) : (
        prescriptions.map((p) => (
          <Card key={p.id} className="prescription-card mb-2 p-3 shadow-sm">
            <div className="prescription-header">
              <h5>
                <FaUserMd /> {p.doctor_name}
              </h5>
              <Badge className="badge-doctor">{p.appointment_date}</Badge>
            </div>

            <div className="prescription-item">
              <FaNotesMedical /> <strong>Diagnosis:</strong>&nbsp;{p.diagnosis}
            </div>
            <div className="prescription-item">
              <FaPills /> <strong>Medicines:</strong>&nbsp;{p.medicines}
            </div>
            <div className="prescription-item">
              <FaNotesMedical /> <strong>Remarks:</strong>&nbsp;{p.remarks}
            </div>
            <div className="text-end text-muted" style={{ fontSize: "0.8rem" }}>
              Created at: {new Date(p.created_at).toLocaleString()}
            </div>
          </Card>
        ))
      )}

      <Bills />
    </div>
  );
};

export default Prescriptions;
