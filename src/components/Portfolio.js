import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Portfolio() {
  const canvasRef = useRef(null);

  // Tech grid animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const points = [];

    // Create random data nodes
    for (let i = 0; i < 80; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw nodes
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "#00e5ff";
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,229,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at center, #0a0f1c 0%, #0d1117 100%)",
        color: "#fff",
        padding: "50px 0",
      }}
    >
      {/* Tech Grid Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Animated blue glow overlay */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at 30% 70%, rgba(13,110,253,0.15), transparent 70%)",
          zIndex: 1,
        }}
        animate={{
          x: ["0%", "10%", "-10%", "0%"],
          y: ["0%", "-10%", "10%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://github.com/alwinjstanley.png"
            alt="Alwin Joseph Stanley"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "3px solid #0d6efd",
              marginBottom: "20px",
            }}
          />
          <h1 className="fw-bold text-primary">Alwin Joseph Stanley</h1>
          <p className="fs-5 text-light">
            Python Full Stack Developer | React | Django | MySQL
          </p>
          <p className="text-light">
            <FaEnvelope className="me-2" /> alwinstanley1@gmail.com |{" "}
            <FaPhone className="mx-2" /> +91 96459 64088
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button
              style={{
                background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                border: "none",
              }}
              href="https://www.linkedin.com/in/alwinjstanley/"
              target="_blank"
            >
              <FaLinkedin className="me-2" /> LinkedIn
            </Button>
            <Button
              style={{
                background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                border: "none",
              }}
              href="https://github.com/alwinjstanley"
              target="_blank"
            >
              <FaGithub className="me-2" /> GitHub
            </Button>
          </div>
        </motion.div>

        {/* Objective */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="border-start border-4 ps-3 mb-3 text-primary">
            Objective
          </h3>
          <p className="text-light">
            Motivated and detail-oriented Python Full Stack Developer with strong
            knowledge in both front-end and back-end technologies. Passionate
            about solving real-world problems and eager to grow in a dynamic,
            collaborative environment.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="border-start border-4 ps-3 mb-3 text-primary">
            Technical Skills
          </h3>
          <Row className="gy-2 justify-content-center">
            {[
              "Python",
              "JavaScript",
              "React",
              "Django",
              "MySQL",
              "Bootstrap",
              "Tailwind",
              "Git",
            ].map((skill, i) => (
              <Col xs="auto" key={i}>
                <Badge
                  style={{
                    background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                    color: "white",
                    fontSize: "0.9rem",
                    padding: "0.5rem 0.8rem",
                  }}
                >
                  {skill}
                </Badge>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="border-start border-4 ps-3 mb-4 text-primary">
            Major Projects
          </h3>
          <Row className="gy-4">
            {[
              {
                title: "Hospital Management System (React + Django)",
                desc: "JWT authentication, role-based access, RESTful APIs for patient registration, appointment scheduling, medical records, and Stripe payment integration.",
                type: "Full Stack",
              },
              {
                title: "E-Commerce Website (Django + Stripe)",
                desc: "Responsive e-commerce platform with authentication, product management, and secure payment.",
                type: "Full Stack",
              },
              {
                title: "Travel Company & Clothing Store Websites",
                desc: "Responsive modern websites with enhanced UX using JavaScript and Bootstrap components.",
                type: "Frontend",
              },
            ].map((p, i) => (
              <Col md={4} key={i}>
                <Card
                  className="h-100 shadow-sm border-0 hover-zoom"
                  style={{
                    borderRadius: "15px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="fw-bold text-info">
                        {p.title}
                      </Card.Title>
                      <Card.Text>{p.desc}</Card.Text>
                    </div>
                    <Badge
                      style={{
                        background:
                          "linear-gradient(45deg, #0d6efd, #6610f2)",
                        color: "white",
                      }}
                    >
                      {p.type}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="border-start border-4 ps-3 mb-4 text-primary">
            Experience
          </h3>
          <Row className="gy-4">
            {[
              {
                title:
                  "Python Full Stack Developer Intern – Techolas Technologies, Kochi",
                period: "Nov 2024 – Present",
                desc: "Trained in HTML, CSS, Bootstrap, JavaScript, React, Python, Django, and MySQL. Developed hands-on projects to strengthen practical skills in full stack development.",
              },
              {
                title: "Freelance Web Developer - Remote",
                period: "Sept 2023 – Nov 2024",
                desc: "Designed and maintained client websites using HTML, CSS, and JavaScript. Collaborated with a small team to enhance performance and SEO optimization.",
              },
            ].map((exp, i) => (
              <Col md={6} key={i}>
                <Card
                  className="shadow-sm border-0 hover-zoom"
                  style={{
                    borderRadius: "15px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold text-info">
                      {exp.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-light">
                      {exp.period}
                    </Card.Subtitle>
                    <Card.Text>{exp.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="border-start border-4 ps-3 mb-4 text-primary">
            Certifications & Achievements
          </h3>
          <Row className="gy-4">
            {[
              {
                title: "Python Full Stack Development",
                desc: "Techolas Technologies, Kochi",
              },
              {
                title: "Business English Certificate (BEC)",
                desc: "Cambridge University",
              },
              {
                title: "IELTS 8.0 Band (No band below 7)",
                desc: "Cambridge University",
              },
              {
                title: "Professional Keyboard Player",
                desc: "Performed with various playback singers and artists; 2× Prize winner in ‘Orchestra’ – Inter-College Arts Fest, University of Kerala, Participated at State Level School Arts Fest.",
              },
            ].map((item, i) => (
              <Col md={6} key={i}>
                <Card
                  className="shadow-sm border-0 hover-zoom"
                  style={{
                    borderRadius: "15px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bold text-info">
                      {item.title}
                    </Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="border-start border-4 ps-3 mb-3 text-primary">
            Areas of Interest
          </h3>
          <Row className="gy-2 justify-content-center">
            {[
              "Information Technology",
              "Research",
              "Social Media Management",
              "Content Writing",
              "Video Editing",
              "Music (Piano & Drums)",
            ].map((interest, i) => (
              <Col xs="auto" key={i}>
                <Badge
                  style={{
                    background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                    color: "white",
                    fontSize: "0.9rem",
                    padding: "0.5rem 0.8rem",
                  }}
                >
                  {interest}
                </Badge>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Languages */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="border-start border-4 ps-3 mb-3 text-primary">
            Languages Known
          </h3>
          <Row className="gy-2 justify-content-center">
            {["English", "Hindi", "Malayalam"].map((lang, i) => (
              <Col xs="auto" key={i}>
                <Badge
                  style={{
                    background: "linear-gradient(45deg, #0d6efd, #6610f2)",
                    color: "white",
                    fontSize: "0.9rem",
                    padding: "0.5rem 0.8rem",
                  }}
                >
                  {lang}
                </Badge>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-5 pt-4 border-top text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="mb-0">
            © {new Date().getFullYear()} Alwin Joseph Stanley | Full Stack
            Developer
          </p>
        </motion.div>
      </Container>

      <style>{`
        .hover-zoom {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-zoom:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 25px rgba(13, 110, 253, 0.3);
        }
      `}</style>
    </div>
  );
}
