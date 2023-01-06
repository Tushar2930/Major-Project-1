import React from "react";
import "../styles.css";
function Header() {
  return (
    <div>
      <nav>
        <div>
          <ul type="none">
            <li className="brand">
              <img src="logo.png" alt="" />
              Kickstarter
            </li>
            <li>Home </li>
            <li>How it works </li>
            <li>Projects </li>
            <li>
              {" "}
              <input type="text" name="search" placeholder="Search" />{" "}
            </li>
            <li>
              {" "}
              <a href="/user/login"> Login </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
