import { useContext, useState } from "react";
import { AuthContext, type IAuthContext } from "../App";
import "./LoginForm.css";
import axios from "axios";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { isAuth, setAuthState } = useContext<IAuthContext>(AuthContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalData = { email, password };
    axios
      .post("http://localhost:3000/users/login", finalData)
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("accessToken", token);
        window.location.href = "/";
      })
      .catch((error) => {
        const errors = error?.response?.data?.message || "An error occurred";
        alert(errors);
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1 className="login-heading">🎨 Welcome back</h1>
          <p className="login-subtext">Sign in to explore colorful vibes</p>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            ✨ Sign In
          </button>
          <p className="login-footer">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
