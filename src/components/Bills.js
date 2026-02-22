import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import {
  FaUser,
  FaUserMd,
  FaCalendarAlt,
  FaDollarSign,
  FaReceipt,
} from "react-icons/fa";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Detect payment success in URL (?payment_success=true)
  const queryParams = new URLSearchParams(location.search);
  const paymentSuccess = queryParams.get("payment_success");

  // Fetch bills (refetch after payment)
  useEffect(() => {
    const fetchBills = async () => {
      const token = localStorage.getItem("access");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get("http://127.0.0.1:8000/api/bills/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBills(res.data);
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 401) {
          navigate("/login");
        } else {
          setError("Failed to load bills");
        }
      }
    };

    fetchBills();
  }, [navigate, paymentSuccess]); // refetch when paymentSuccess changes

  return (
    <div className="container my-5">
      <style>{`
        .bill-card {
          border-radius: 15px;
          padding: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .bill-info {
          flex: 1;
        }
        .bill-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .bill-item svg {
          margin-right: 8px;
          color: #0d6efd;
        }
        .pay-btn {
          background: linear-gradient(45deg, #0d6efd, #6610f2);
          border: none;
          font-weight: bold;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pay-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
      `}</style>

      <h3 className="mb-4 text-primary">My Bills</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      {bills.length === 0 ? (
        <p>No bills found.</p>
      ) : (
        bills.map((b) => {
          return (
            <Card key={b.id} className="bill-card mb-4 shadow-sm">
              <div className="bill-info">
                <div className="bill-item">
                  <FaReceipt /> <strong>Bill #{b.id}</strong>
                </div>
                <div className="bill-item">
                  <FaUser /> Patient: {b.appointment_info.patient_name}
                </div>
                <div className="bill-item">
                  <FaUserMd /> Doctor: {b.appointment_info.doctor}
                </div>
                <div className="bill-item">
                  <FaCalendarAlt /> Appointment: {b.appointment_info.date}
                </div>
                <div className="bill-item">
                  <FaDollarSign /> Amount: {b.amount}{" "}
                  {b.currency.toUpperCase()}
                </div>
                <div className="bill-item">
                  Status:{" "}
                  <Badge bg={b.paid ? "success" : "warning"}>
                    {b.paid ? "Paid" : "Pending"}
                  </Badge>
                </div>

                {!b.paid && (
                  <div className="mt-3">
                    <Button
                      className="pay-btn"
                      onClick={async () => {
                        const token = localStorage.getItem("access");
                        try {
                          const res = await axios.post(
                            "http://127.0.0.1:8000/api/create-checkout-session/",
                            { bill_id: b.id },
                            { headers: { Authorization: `Bearer ${token}` } }
                          );
                          // Redirect to Stripe payment page
                          window.location.href = res.data.url;
                        } catch (err) {
                          console.error(err);
                          alert("Could not start payment");
                        }
                      }}
                    >
                      Pay Now
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default Bills;

