import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Contact Info */}
        <div style={styles.info}>
          <h3>Blount Memorial Hospital</h3>
          <p>907 East Lamar Alexander Parkway</p>
          <p>Maryville, TN 37804</p>
          <p>Phone: (865) 983-7211</p>
          <p>Toll-Free: 1-800-448-0219</p>

          {/* Social Icons */}
          <div style={styles.social}>
            <a href="#" style={styles.icon}><FaFacebookF /></a>
            <a href="#" style={styles.icon}><FaTwitter /></a>
            <a href="#" style={styles.icon}><FaInstagram /></a>
            <a href="#" style={styles.icon}><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Google Map Embed */}
        <div style={styles.map}>
          <iframe
            title="Blount Memorial Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.3320265480974!2d-83.98424398479014!3d35.7734068801988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885aadc11d90afdb%3A0x3da9ae93512b399d!2sBlount%20Memorial%20Hospital!5e0!3m2!1sen!2sus!4v169xxyyzzzzzzzz" 
            width="100%" 
            height="200" 
            style={{ border: 0, borderRadius: "8px" }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>

        </div>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} Blount Memorial Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#120f1eff",
    color: "#bbb",
    padding: "30px 20px",
    borderTop: "1px solid #333"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  info: {
    flex: "1 1 300px",
    margin: "10px"
  },
  map: {
    flex: "1 1 300px",
    margin: "10px"
  },
  bottom: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#888"
  },
  social: {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  },
  icon: {
    color: "#bbb",
    fontSize: "1.2rem",
    transition: "0.3s",
    textDecoration: "none"
  },
  newsletter: {
    marginTop: "20px",
    textAlign: "center"
  },
  input: {
    padding: "8px",
    width: "70%",
    maxWidth: "200px",
    marginRight: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  btn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#0d6efd",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  }
};

export default Footer;
