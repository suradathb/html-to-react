import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// function Footer() {
class Footer extends Component {
  render() {
    const useraccount = this.props.account;
    let ShowHide;
    if (useraccount) {
      ShowHide = (
        <li>
          <Link class="text-decoration-none" to="/addcowcert">
            CreateCowCert
          </Link>
        </li>
      );
    }

    return (
      <>
        {/* <!-- Start Footer --> */}
        <footer class="bg-dark" id="tempaltemo_footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4 pt-5 footer">
                <img
                  className="logo-Footer"
                  src="./assets/images/cowcert-01.png"
                  alt=""
                />
                <ul class="list-unstyled text-light footer-link-list">
                  <li>
                    <i class="fas fa-map-marker-alt fa-fw"></i>
                    คอนโดบ้านชื่อตรง เลขที่ 302/724 อาคาร 5 ชั้น 8 แขวง
                    คลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพมหานคร 10310
                  </li>
                  <li>
                    <i class="fa fa-phone fa-fw"></i>
                    <a class="text-decoration-none" href="tel:084-030-1191">
                      084-030-1191
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-envelope fa-fw"></i>
                    <a
                      class="text-decoration-none"
                      href="mailto:bondnuy007@me.com"
                    >
                      Bondnuy007@me.com
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-4 pt-5">
                {/* <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="#">Luxury</a></li>
                                <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                                <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                                <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                                <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                                <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                                <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
                            </ul> */}
              </div>

              <div class="col-md-4 pt-5">
                <h2 class="h2 text-light border-bottom pb-3 border-light">
                  Further Info
                </h2>
                <ul class="list-unstyled text-light footer-link-list">
                  <li>
                    <Link class="text-decoration-none" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link class="text-decoration-none" to="/search">
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link class="text-decoration-none" to="/abount">
                      About Us
                    </Link>
                  </li>
                  {ShowHide}
                  {/* <li>
                    <Link class="text-decoration-none" to="/addcowcert">
                      CreateCowCert
                    </Link>
                  </li> */}
                  <li>
                    <Link class="text-decoration-none" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row text-light mb-4">
              <div class="col-12 mb-3">
                <div class="w-100 my-3 border-top border-light"></div>
              </div>
              <div class=" me-auto socal">
                <ul class="list-inline text-left footer-icons">
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.facebook.com/gtonuy.shonan"
                    >
                      <i class="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.instagram.com/gto_nuy/"
                    >
                      <i class="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://twitter.com/GTO_NUY"
                    >
                      <i class="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.linkedin.com/in/suradath-bangnikrai-50b825140/"
                    >
                      <i class="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                {/* <label class="sr-only" for="subscribeEmail">Email address</label>
                            <div class="input-group mb-2">
                                <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                                <div class="input-group-text btn-success text-light">Subscribe</div>
                            </div> */}
              </div>
            </div>
          </div>

          <div class="w-100 bg-black py-3">
            <div class="container">
              <div class="row pt-2">
                <div class="col-12">
                  <p class="text-left text-light con">
                    Copyright &copy; 2021 Company Name | Designed by{" "}
                    <a
                      rel="sponsored"
                      href="https://www.facebook.com/gtonuy.shonan"
                      target="_blank"
                    >
                      Suradth Bangnikrai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
