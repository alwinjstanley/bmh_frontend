import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/doctors/")
      .then(res => setDoctor(res.data))
      .catch(err => console.error("Error fetching doctors:", err));
  }, []);

  return (
    <div className="container my-3">
      <style>{`
        .doctor-card {
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }
        .doctor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .doctor-card img {
          border-radius: 15px 15px 0 0;
          object-fit: cover;
          height: 250px;
        }
        .doctor-btn {
          background: linear-gradient(45deg, #0d6efd, #6610f2);
          border: none;
          color: white !important;
          font-weight: bold;
          width: 100%;
          margin-top: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .doctor-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        .card-text {
          font-size: 0.9rem;
        }
      `}</style>

      <h2 className="text-center mb-4 text-primary">Our Doctors</h2>

      <div className="row">
        {doctor.map((doc) => (
          <div key={doc.id} className="col-12 col-md-6 col-lg-3">
            <Card className="doctor-card h-100">
              <Card.Img
                variant="top"
                src={doc.image ? doc.image : "https://via.placeholder.com/150"}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Text>
                    {doc.department}<br/>
                    {doc.qualification}
                  </Card.Text>
                </div>
                <Link to="form/">
                  <Button className="doctor-btn">Book Appointment</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
