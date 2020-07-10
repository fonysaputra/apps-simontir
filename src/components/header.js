import React, { useState, useEffect } from "react";

import { logout } from "../../lib/cek_login";
import { useRouter } from "next/router";

function Header() {
  let e = "";
  const router = useRouter();

  if (typeof window === "object") {
    e = window.location.pathname;
  }
  let name = "";

  if (typeof localStorage !== "undefined") {
    name = localStorage.getItem("browserName");
  }

  const actionLogout = async () => {
    const responseLogout = await logout();

    if (responseLogout) {
      await router.push("/login");
    }
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark  "
        style={{ backgroundColor: "#0acdf6" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-img" href="/home">
            <img src="./logo.png" height={40} width={80} />
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5"></ul>

          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5">
              <li className="nav-item active">
                <a
                  className="nav-link ml-lg-5 "
                  href="/home"
                  style={{ backgroundColor: "#026cce" }}
                >
                  <i className="fa fa-home "></i> Home
                  <span className="sr-only"></span>
                </a>
              </li>
              <li
                className={
                  e.toString() === "/dashboard"
                    ? "nav-item active"
                    : "nav-item active "
                }
              >
                <a className="nav-link" href="/dashboard">
                  <i className="fa fa-plug"></i> Dashboard
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link " href="/report">
                  <i className="fa fa-area-chart"></i> Report
                </a>
              </li>
            </ul>
            <span className=" my-2 my-sm-0 pr-4" style={{ color: "white" }}>
              <i className="fa fa-bell "></i>
            </span>
            <span className=" my-2 my-sm-0 pr-4" style={{ color: "white" }}>
              <i className="fa fa-question-circle "></i>
            </span>
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              onClick={() => actionLogout()}
            >
              <i className="fa fa-user">&nbsp;{name}</i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
