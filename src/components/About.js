import React from 'react'
import CEO from "../assets/CEO.jpg";

const About = () => {
  return (
    <div className="container my-3">
      <style>{`
        .about-section {
          font-size: 1rem;
          line-height: 1.6;
          text-align: justify;
        }
        .about-section img {
          float: right;
          width: 220px;
          height: 250px;
          margin: 0 0 15px 15px; /* space between text and image */
          border-radius: 15px;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .ceo-name {
          font-weight: bold;
          margin-top: 10px;
        }
        .ceo-title {
          color: #6c757d;
          margin: 0 0 20px 0;
        }
        @media(max-width: 768px) {
          .about-section img {
            float: none;
            display: block;
            margin: 0 auto 20px auto;
          }
        }
      `}</style>

      <h4 className="text-center mb-4 text-primary">About Us</h4>

      <div className="about-section">
        <img src={CEO} alt="CEO" />
        <p>
          Since 1947, Blount Memorial Hospital has been at the forefront of health care in Blount County. We have expanded our services, locations, and physician and specialist staff over the years to better serve patients in the area, but we have always strived to maintain the strong sense of community that helped create us.
        </p>
        <p>
          This was the challenge at the hospital's inception, and it is one I believe we've met each day for more than seven decades. Blount Memorial is a proud part of this community. We constantly strive to advance technologically. We recruit top-flight physicians who can bring new ideas and specialties into the area. Our administrative, clinical and quality leaders spend time each day and each week visiting and interacting with our patients to ensure they are receiving the safe and high quality care they deserve.
        </p>
        <p>
          I'm proud to say we have zero serious reportable events for all of calendar year 2024 -- an experience we strive to provide every single day, every year for every patient. It's part of our mission to work diligently each day to provide the best health care possible for the people who call this place “home.” This is our ongoing commitment to the patients of Blount County and the surrounding area.
        </p>
        <p>
          At Blount Memorial Hospital, we believe that health care is not just about treating illnesses, but about caring for the whole person. Our team is dedicated to providing compassionate, patient-centered care while embracing the latest medical innovations. Every day, we strive to create an environment where patients feel valued, supported, and confident in their care journey.
        </p>

        <div className="ceo-name">Jonathan Smith</div>
        <div className="ceo-title">Chief Executive Officer</div>
      </div>
    </div>
  )
}

export default About;
