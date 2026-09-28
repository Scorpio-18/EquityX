import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://equityx-backend-9dib.onrender.com/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login response:", response.data);

      // Get JWT token
      const token = response.data.token;

      // Store JWT token
      localStorage.setItem("token", token);

      alert("Login successful!");

      // Go to Dashboard and pass the token
      window.location.href =
        "https://equityx-dashboard.onrender.com?token=" + token;

    } catch (error) {
      console.log("Login error:", error);
      console.log("Response:", error.response);

      alert(
        error.response?.data?.message ||
          "Login failed. Please check your email and password."
      );
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.logo}>EquityX</div>

        <h1 style={styles.heading}>Welcome Back</h1>

        <p style={styles.subtitle}>
          Login to continue using EquityX
        </p>

        <form onSubmit={handleSubmit}>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <button
            type="submit"
            style={styles.button}
          >
            Login
          </button>

        </form>

        <p style={styles.signupText}>
          Don't have an account?{" "}
          <span
            style={styles.signupLink}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  container: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },

  logo: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  heading: {
    textAlign: "center",
    margin: "0 0 8px 0",
    fontSize: "26px",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "30px",
  },

  inputGroup: {
    marginBottom: "18px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },

  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "10px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#387ed1",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  signupText: {
    textAlign: "center",
    marginTop: "22px",
    fontSize: "14px",
    color: "#666",
  },

  signupLink: {
    color: "#387ed1",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Login;