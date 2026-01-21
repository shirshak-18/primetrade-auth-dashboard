import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL;
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      login(data.token);
      navigate("dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <h2>Login</h2>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
            <p>
              New user?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => navigate("signup")}
              >
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
