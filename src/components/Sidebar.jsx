import React from "react";
import logo from "../asset/melodico.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  function changeMenuStyle(target) {
    console.log(target);
    resetStyle();
    target.parentElement.parentElement.classList.add("active");
  }

  function resetStyle() {
    const menus = document.querySelectorAll(".menu");
    menus.forEach((m) => {
      m.classList.remove("active");
    });
  }

  return (
    <div
      className="sidebar bg-dark vh-100 text-light fixed-top shadow"
      style={{ width: "200px" }}
    >
      <img src={logo} alt="logo" className="w-75 mt-3 d-block mx-auto" />
      <ul className="sidebar-menu list-group mt-3">
        <li
          id="home"
          className="active menu px-3 d-flex align-items-center p-2"
        >
          <Link to="/" onClick={(e) => changeMenuStyle(e.target)}>
            <ion-icon name="home"></ion-icon>
            <span className="ms-3 d-inline-block">Home</span>
          </Link>
        </li>
        <li id="browse" className="menu px-3 d-flex align-items-center p-2">
          <Link to="/browse" onClick={(e) => changeMenuStyle(e.target)}>
            <ion-icon name="compass"></ion-icon>
            <span className="ms-3 d-inline-block">Browse</span>
          </Link>
        </li>
        <li id="library" className="menu px-3 d-flex align-items-center p-2">
          <Link to="/library" onClick={(e) => changeMenuStyle(e.target)}>
            <ion-icon name="musical-notes"></ion-icon>
            <span className="ms-3 d-inline-block">Library</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
