import { Routes, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Today from "./components/dashboard/Today";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Todo from "./components/todo/Todo";
// import LogoutButton from "./components/logout-button/LogoutButton";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Tomorrow from "./Tomorrow";
import ThisWeek from "./ThisWeek";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/today">Today</NavLink>
            </li>
            <li>
              <NavLink to="/tomorrow">Tomorrow</NavLink>
            </li>
            <li>
              <NavLink to="/thisweek">This week</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/today" element={<Today />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/tomorrow" element={<Tomorrow />} />
          <Route path="/thisweek" element={<ThisWeek />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
