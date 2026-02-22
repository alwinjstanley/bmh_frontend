import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        setSuccess("Login successful ✅");
        navigate("/prescription");
      } else {
        setError("Invalid credentials ❌");
      }
    } catch (err) {
      setError("Something went wrong ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "url('https://images.unsplash.com/photo-1588776814546-d8135f1f12f0?auto=format&fit=crop&w=1470&q=80') no-repeat center center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <style>{`
        .login-card {
          backdrop-filter: blur(12px);
          background-color: rgba(255, 255, 255, 0.85);
          border-radius: 15px;
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .login-card h3 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #0d6efd;
        }

        .login-btn {
          background: linear-gradient(45deg, #0d6efd, #6610f2);
          border: none;
          font-weight: bold;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }

        .alert {
          border-radius: 10px;
        }
      `}</style>

      <Card className="login-card">
        <h3>Patient Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100 login-btn">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
