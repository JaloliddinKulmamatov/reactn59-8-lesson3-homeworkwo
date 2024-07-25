import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./logout.scss"

export default function LogoutButton({ children }) {
  const navigate = useNavigate();

  const { user,setUser } = useContext(UserContext);


  function logOut() {
    localStorage.removeItem("user");
    setUser(null)
    navigate("/login", { replace: true });
  }

  return (
    <button
      onClick={logOut}
      className="logOut"
    >
      {children}
    </button>
  );
}
