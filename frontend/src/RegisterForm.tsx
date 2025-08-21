import axios from "axios";
import { useState } from "react";
import "./RegisterForm.css"; // ✅ new CSS file

function RegisterForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalData = {
      name: name,   // ✅ fixed bug (was email before)
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/users/create", finalData)
      .then((response) => {
        alert("User registered successfully");
      });
  };

  console.log(name, password, email);
  return (
    <div className="register-wrapper">
      <form onSubmit={handleSubmit} className="register-box">
        <h1 className="register-heading">Create Account</h1>
        <p className="register-subtext">Join us and get started</p>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Choose a strong password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="register-btn">Register</button>
        <p className="register-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
export default RegisterForm;
