import React from "react";

function Header() {
  return (
        <>
             {/* <!-- Header --> */}
                <nav class="navbar navbar-expand-lg navbar-light shadow">
                    <div class="container d-flex justify-content-between align-items-center">
                   
                        <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">  
                        <img className="logo-Header" src="./assets/images/cowcert-01.png" alt="" />
                        </a>
                        
                        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                            <div class="flex-fill">
                                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">Search</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/abount">Abount Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navbar align-self-center d-flex">
                                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login">Login</a>
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

export default Header;
