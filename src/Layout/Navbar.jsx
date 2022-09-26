import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

const Navbar = () => {
  function logout() {
    swal({
      title: "logging out!",
      text: "Are you sure you want to log out!",
      icon: "warning",
      button: "sure!",
    }).then(function () {
      window.location.href = "/";
    });
    localStorage.clear();

    // window.location.href="/";
  }

  let isLoggedIn = JSON.parse(localStorage.getItem("user")) || null;;
  return (
    <div>
      <header>
        {/* <!-- Header Start --> */}
        <div class="header-area header-sticky">
          <div class="main-header ">
            <div class="container">
              <div class="row align-items-center">
                {/* <!-- logo --> */}
                <div class="col-xl-2 col-lg-2">
                  <div class="logo">
                    <a href="/">
                      <img src="assets/img/logo/logoo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                  {/* <!-- main-menu --> */}
                  <div class="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="about">About</a>
                        </li>

                        <li>
                          <a href="">Farms</a>
                          <ul class="submenu">
                            <li>
                              <a href="add-Farm">Add Farm</a>
                            </li>
                            <li>
                              <a href="all-farm">All Farms</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="Contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 d-flex">
                  <ul className="">
                    {!isLoggedIn ? (
                      <li>
                        <a
                          style={{
                            fontSize: "14px",
                            background: "GREEN",
                            color: "white",
                            marginRight:'10px'
                          }}
                           href="/login"
                        >
                          login
                        </a>
                        <a
                          style={{
                            fontSize: "14px",
                            background: "GREEN",
                            color: "white",
                          }}
                          href="/register"
                        >
                          register
                        </a>
                      </li>
                    ) : null}

                    {isLoggedIn ? (
                      <li>
                        <a
                          style={{
                            fontSize: "20px",
                            background: "GREEN",
                            color: "white",
                          }}
                          onClick={logout}
                        >
                          Log out
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
                {/* <!-- Mobile Menu --> */}
                <div class="col-12">
                  <div class="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>
      {/* <!-- start back-to-top --> */}
      <div id="back-to-top">
        <i class="la la-angle-up" title="Go top"></i>
      </div>
    </div>
  );
};

export default Navbar;
