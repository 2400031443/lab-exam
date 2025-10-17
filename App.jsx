import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email validation function
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!regex.test(value)) return "Invalid email format";
    return "";
  };

  // Password validation function
  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passErr);

    if (!emailErr && !passErr) {
      setIsSubmitted(true);
      alert("Form submitted successfully!");
    }
  };

  const isFormValid = !emailError && !passwordError && email && password;

  return (
    <div style={styles.container}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={styles.input}
          />
          {emailError && <p style={styles.error}>{emailError}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={styles.input}
          />
          {passwordError && <p style={styles.error}>{passwordError}</p>}
        </div>

        <button type="submit" disabled={!isFormValid} style={styles.button}>
          Submit
        </button>

        {isSubmitted && <p style={styles.success}>Form submitted successfully!</p>}
      </form>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    padding: "8px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.85em",
    marginTop: "5px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};

export default FormValidation;
