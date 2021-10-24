import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const useraccount = this.props.account;
    let button;
    if (useraccount) {
      button = <Link class="nav-link" to="/login">{useraccount}</Link>;
    } else {
      button = <Link class="nav-link" to="/login">Login</Link>;
    }
    let Permission;
    if(useraccount){
      Permission = <li class="nav-item">
      <Link class="nav-link" to="/showcowcert">
        CreateCowCert
      </Link>
    </li>
    }else{
     
    }
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light shadow">
          <div class="container d-flex justify-content-between align-items-center">
            <a
              class="navbar-brand text-success logo h1 align-self-center"
              href="/"
            >
              <img
                className="logo-Header"
                src="./assets/images/cowcert-01.png"
                alt=""
              />
            </a>

            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div class="flex-fill">
                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/search">
                      Search
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/abount">
                      About Us
                    </Link>
                  </li>
                  {Permission}
                  {/* <li class="nav-item">
                    <Link class="nav-link" to="/showcowcert">
                      CreateCowCert
                    </Link>
                  </li> */}
                  {/* <li class="nav-item">
                    <Link class="nav-link" to="/Alert">
                        TestAlert
                    </Link>
                  </li> */}
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="navbar align-self-center d-flex">
                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li class="nav-item">
                    {button}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- Close Header --> */}
      </>
    );
  }
}

export default Header;
