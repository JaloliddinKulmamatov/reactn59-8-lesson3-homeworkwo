import React from "react";
import { HiBars4 } from "react-icons/hi2";
import { FaSearch, FaListUl } from "react-icons/fa";
import { FiFastForward } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";
import LogoutButton from "../logout-button/LogoutButton";
import { MdLogout } from "react-icons/md";

import "./panel.scss"

const Panel = () => {
  return (
    <div className="panel-container">
      <div className="panel-header">
        <h1>Menu</h1>
        <HiBars4 />
      </div>
      <form className="panel-search-form">
        <FaSearch />
        <input type="text" placeholder="Search..." />
      </form>
      <div className="panel-content">
        <ul className="panel-tasks">
          <li>
            <h2>Tasks</h2>
          </li>
          <li className="panel-task-item">
            <FiFastForward />
            <span>
              <p>Upcoming</p>
              <p>15+</p>
            </span>
          </li>
          <li className="panel-task-item">
            <FaListUl />
            <span>
              <p>Today</p>
              <p>8</p>
            </span>
          </li>
          <li className="panel-task-item">
            <IoIosCalendar />
            <p>Calendar</p>
          </li>
          <li className="panel-task-item">
            <FaNoteSticky />
            <p>Sticky Wall</p>
          </li>
        </ul>
        <ul className="panel-lists">
          <li className="panel-list-item">
            <h3>Lists</h3>
          </li>
          <li className="panel-list-item">
            <span className="panel-list-color panel-list-work"></span>
            <p>Work</p>
          </li>
          <li className="panel-list-item">
            <span className="panel-list-color panel-list-personal"></span>
            <p>Personal</p>
          </li>
          <li className="panel-list-item">
            <span className="panel-list-color panel-list-study"></span>
            <p>Study</p>
          </li>
          <li className="panel-list-item">
            <span className="panel-add-new-list">
              <IoAddCircleOutline />
              <p>Add</p>
            </span>
          </li>
        </ul>
      </div>
      <div className="panel-footer">
        <div className="panel-settings">
          <HiBars3CenterLeft />
          <p>Settings</p>
        </div>
        <div className="panel-logout">
          <LogoutButton>
            <MdLogout /> Sign out
          </LogoutButton>
        </div>
      </div>
    </div>
  );
};

export default Panel;
