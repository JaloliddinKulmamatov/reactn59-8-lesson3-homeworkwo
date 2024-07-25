import { useContext, useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import backround from "../../assets/backround.svg"

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function login() {
    setError(null);
    setLoading();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
        throw new Error(error);
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);
      navigate("/"); 
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginRight}>
        <img src={backround} alt="abc" />
      </div>
      <div className={styles.loginLeft}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-control"]}>
            <input
              type="text"
              value={userName}
              id="userName"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles["form-control"]}>
            <input
              type="password"
              value={password}
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className={styles.error}>Error: {error.message}</p>}
          <div>
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className={styles.socialMeida}>
          <p>___________________________or____________________________</p>
          <div>
            <button>
              <FcGoogle />
              Google
            </button>
            <button>
              <FaFacebook />
              Facebook
            </button>
          </div>
          <a href="#">Don't have you accaount sign up</a>
        </div>
      </div>
    </div>
  );
}
