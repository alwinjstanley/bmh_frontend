import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Susan Jacob",
    location: "Chicago, USA",
    testimony:
      "My brother had no children for 12 years. Doctors here diagnosed the problem and they conceived naturally",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=400&h=400",
  },
  {
    id: 2,
    name: "Maria Joseph",
    location: "Brisbane, Australia",
    testimony:
      "The doctors had given up on my mother's health, but through prayer and compassionate care from the hospital staff, she recovered completely.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=400&h=400",
  },
  {
    id: 3,
    name: "James Mathew",
    location: "Canada",
    testimony:
      "The entire medical team treated me like family. Their dedication and support during surgery gave me peace and strength.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=400&h=400",
  },
];

export default function PatientTestimonials() {
  return (
    <div className="container my-3">
      <style>{`
        /* Dark arrows */
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(1);
        }

        /* Responsive text */
        .testimonial-text {
          max-width: 700px;
          word-wrap: break-word;
        }

        @media (max-width: 768px) {
          .testimonial-text {
            max-width: 90%;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <h2 className="text-center mb-4 fw-bold text-primary">
        What Our Patients Say
      </h2>

      {/* No fade for instant cut transition */}
      <Carousel interval={6000} pause="hover" indicators={true}>
        {testimonials.map((t) => (
          <Carousel.Item key={t.id}>
            <div className="d-flex flex-column align-items-center text-center px-4">
              <img
                className="rounded-circle shadow mb-4"
                src={t.image}
                alt={t.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "4px solid #e9ecef",
                }}
              />

              <p className="lead fst-italic text-muted mb-4 testimonial-text">
                “{t.testimony}”
              </p>

              <h5 className="fw-bold mb-2">{t.name}</h5>
              <small className="text-secondary">{t.location}</small>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
