import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsHospital } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "rgba(0, 0, 0, 1)",
    transition: "background-color 0.3s ease",
  });

  const location = useLocation();

  // Handle transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;


      if (scrollY < 50) {
        setNavStyle({
          backgroundColor: "rgba(0, 0, 0, 1)",
          transition: "background-color 0.3s ease",
        });
      } else if (scrollY < 200) {
        const opacity = 1 - (scrollY - 50) / 200;
        setNavStyle({
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
          transition: "background-color 0.3s ease",
        });
      } else {
        setNavStyle({
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          transition: "background-color 0.3s ease",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location]);

  // Common link style
  const linkBase = {
    color: "white",
    margin: "0 12px",
    position: "relative",
    textDecoration: "none",
    paddingBottom: "4px",
    backgroundColor: "transparent",
  };

  return (
    <Navbar expand="lg" variant="dark" sticky="top" style={navStyle}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold d-flex align-items-center text-white"
        >
          <BsHospital size={28} className="me-2 text-primary" />
          Blount Memorial Hospital
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/departments", label: "Departments" },
              { to: "/doctors", label: "Doctors" },
              { to: "/news", label: "News" },
              { to: "/about", label: "About" },
              { to: "/login", label: "Login" },
              { to: "/portfolio", label: "Portfolio" },
            ].map((link) => (
              <Nav.Link
                key={link.to}
                as={Link}
                to={link.to}
                style={{
                  ...linkBase,
                  fontWeight:
                    location.pathname === link.to ? "600" : "normal",
                }}
                className={`nav-link-custom ${
                  location.pathname === link.to ? "active-link" : ""
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Inline CSS for animation */}
      <style>{`
        .nav-link-custom {
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scaleX(0);
          width: 50%;
          height: 2px;
          background-color: #007bff;
          transition: transform 0.3s ease;
          transform-origin: center;
        }

        .nav-link-custom:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link-custom.active-link::after {
          transform: translateX(-50%) scaleX(1);
        }
      `}</style>
    </Navbar>
  );
}
