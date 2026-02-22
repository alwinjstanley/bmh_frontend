import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/departments/")
      .then(res => setDepartments(res.data))
      .catch(err => console.error("Error fetching departments:", err));
  }, []);

  return (
    <div className="container my-3">
      <style>{`
        .dept-card {
          border-radius: 15px;
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
          margin-bottom: 30px;
        }
        .dept-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .dept-card img {
          border-radius: 15px 15px 0 0;
        }
        .dept-btn {
          background: linear-gradient(45deg, #0d6efd, #6610f2);
          border: none;
          font-weight: bold;
          color: white !important;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .dept-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        .card-text {
          font-size: 0.9rem;
        }
      `}</style>

      <h2 className="text-center mb-4 text-primary">Our Departments</h2>

      <div className="row">
        {departments.map((dept) => (
          <div key={dept.id} className="col-12 col-md-6 col-lg-3">
            <Card className="dept-card h-100">
              <Card.Img
                variant="top"
                src={dept.image ? dept.image : "https://via.placeholder.com/150"}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{dept.title}</Card.Title>
                  <Card.Text>
                    {dept.description}
                  </Card.Text>
                </div>
                <Link to="/form/">
                  <Button className="dept-btn w-100">
                    Book Appointment
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
