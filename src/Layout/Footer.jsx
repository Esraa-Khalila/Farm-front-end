import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* <!-- Footer Start--> */}
      <div class="footer-area black-bg footer-padding">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-footer-caption mb-30">
                {/* <!-- logo --> */}
                <div class="footer-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logoo.png" alt="" />
                  </a>
                </div>
                <div class="footer-social footer-social2">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-globe"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-behance"></i>
                  </a>
                </div>
                <div class="footer-pera">
                  {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="ti-heart" aria-hidden="true"></i> by <a href="" target="_blank">Esraa</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-5">
              <div class="single-footer-caption mb-30">
                <div class="footer-tittle">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <a href="#">About Farms</a>
                    </li>
                    <li>
                      <a href="#">Our Best Farm</a>
                    </li>
                    <li>
                      <a href="#">search</a>
                    </li>
                    <li>
                      <a href="#">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              <div class="single-footer-caption mb-30">
                <div class="footer-tittle">
                  <h4>Reservations</h4>
                  <ul>
                    <li>
                      <a href="#">Tel: +96207755555</a>
                    </li>
                    <li>
                      <a href="#">Skype:esraakh</a>
                    </li>
                    <li>
                      <a href="#">esraa.khalilah@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4  col-sm-5">
              <div class="single-footer-caption mb-30">
                <div class="footer-tittle">
                  <h4>Our Location</h4>
                  <ul>
                    <li>
                      <a href="#">AlGheish St,</a>
                    </li>
                    <li>
                      <a href="#">Zarqa</a>
                    </li>
                  </ul>
                  {/* <!-- Form --> */}
                  <div class="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get"
                        class="subscribe_form relative mail_part"
                      >
                        <input
                          type="email"
                          name="email"
                          id="newsletter-form-email"
                          placeholder="Email Address"
                          class="placeholder hide-on-focus"
                          onfocus="this.placeholder = ''"
                          onBlur="this.placeholder = ' Email Address '"
                        />
                        <div class="form-icon">
                          <button
                            type="submit"
                            name="submit"
                            id="newsletter-submit"
                            class="email_icon newsletter-submit button-contactForm"
                          >
                            <img src="assets/img/logo/form-iocn.jpg" alt="" />
                          </button>
                        </div>
                        <div class="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
