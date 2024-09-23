import React from "react";
import { Link } from "react-router-dom";
import '../Style/footer.css'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div class="footerhead">
            <hr />
            <footer class=" footerd py-4">
                <div class="container-fluid">
                    <div class="row align-items-">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div class="footer-top-data d-flex  align-items-center ">
                                <img src="https://blog.myntra.com//wp-content/uploads/2016/09/Myntra_TryAndBuy2.jpg" alt="" style={{ width: "70px", height: "70px" }} />
                                <h2 class="mb-0 text- p-3">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span class="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer class="py-0">
                <div class="container-fluid">
                    <div class="row" id="faatercss">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <h4 class="text mb-4">Contact Us</h4>
                            <div>
                                <address class="texts fs-6">
                                    Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                                    PinCode: 131103
                                </address>
                                <a
                                    href="tel:+91 8264954234"
                                    class="mt-3 d-block mb-1 text-white"
                                >
                                    +91 8264954234
                                </a>
                                <a
                                    href="mailto:navdeepdahiya753@gmail.com"
                                    class="mt-2 d-block mb-0 text-white"
                                >
                                    navdeepdahiya753@gmail.com
                                </a>
                                <div class="social_icons d-flex align-">
                                    <a class="text-" href="#">
                                        <BsLinkedin class="fs-4" />
                                    </a>
                                    <a class="text-" href="#">
                                        <BsInstagram class="fs-4" />
                                    </a>
                                    <a class="text-" href="#">
                                        <BsGithub class="fs-4" />
                                    </a>
                                    <a class="text-" href="#">
                                        <BsYoutube class="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <h4 class="text mb-4">Information</h4>
                            <div class="footer-link d-flex flex-column">
                                <Link to="/privacy-policy" class="text- py-2 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link to="/refund-policy" class="text- py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link to="/shipping-policy" class="text- py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link to="/term-conditions" class="text- py-2 mb-1">
                                    Terms & Conditions
                                </Link>
                                <Link class="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <h4 class="text mb-4">Account</h4>
                            <div class="footer-link d-flex flex-column">
                                <Link class="text- py-2 mb-1">About Us</Link>
                                <Link class="text- py-2 mb-1">Faq</Link>
                                <Link class="text- py-2 mb-1">Contact</Link>
                                <Link class="text- py-2 mb-1">Location</Link>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                            <h4 class="text mb-4">Quick Links</h4>
                            <div class="footer-link d-flex flex-column">
                                <Link class="text- py-2 mb-1">Laptops</Link>
                                <Link class="text- py-2 mb-1">Headphones</Link>
                                <Link class="text- py-2 mb-1">Tablets</Link>
                                <Link class="text- py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
            <footer class="py-0">
                <div class="container-xxl">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by Developer's DRRS
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
