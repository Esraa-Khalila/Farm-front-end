import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert'

const FarmBooking = () => {

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "CAD",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);


   let isLoggedIn = JSON.parse(localStorage.getItem("user"));
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   


   const submitHandler = (e) => {
     e.preventDefault();
     let data = new FormData();

     data.append("address", address);
     data.append("phone", phone);
     data.append("user_id", isLoggedIn.logged_user.id);
     console.log(data);
     axios.post("http://localhost:8000/api/booking", data).then((res) => {
       if (res.data.status === 200) {
         

 
       } else {
       
        swal({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(function () {
          window.location.href = "/";
        });
  
       }
     });
   };
  return (
    <div>
      <section class="breadcrumb-area bread-bg-7">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">Farm Booking</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Farm Booking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bread-svg-box">
          <svg
            class="bread-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
          </svg>
        </div>
      </section>
      <section class="booking-area padding-top-100px padding-bottom-70px">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">Your Personal Information</h3>
                </div>
                <div class="form-content ">
                  <div class="contact-form-action">
                    <form method="post" action="payment-complete.html">
                      <div class="row">
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">First Name</label>
                            <div class="form-group">
                              <span class="la la-user form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                placeholder="First name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Last Name</label>
                            <div class="form-group">
                              <span class="la la-user form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Your Email</label>
                            <div class="form-group">
                              <span class="la la-envelope-o form-icon"></span>
                              <input
                                class="form-control"
                                type="email"
                                name="email"
                                placeholder="Email address"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Phone Number</label>
                            <div class="form-group">
                              <span class="la la-phone form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="input-box">
                            <label class="label-text">Address Line</label>
                            <div class="form-group">
                              <span class="la la-map-marked form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                placeholder="Address line"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-12">
                          <div class="input-box">
                            <div class="custom-checkbox mb-0">
                              <input type="checkbox" id="receiveChb" />
                              <label for="receiveChb">
                                I want to receive Farm promotional offers in the
                                future
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">Your Card Information</h3>
                </div>{" "}
                <div ref={paypal}></div>
                <div class="form-content">
                  {" "}
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="credit-card"
                      role="tabpanel"
                      aria-labelledby="credit-card-tab"
                    >
                      <div class="contact-form-action">
                        <form method="post">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="input-box">
                                <div class="form-group">
                                  <div class="custom-checkbox">
                                    <input type="checkbox" id="agreechb" />
                                    <label for="agreechb">
                                      By continuing, you agree to the{" "}
                                      <a href="#">Terms and Conditions</a>.
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="btn-box">
                                <button
                                  class="theme-btn"
                                  type="submit"
                                  onClick={submitHandler}
                                >
                                  <a href="payment-complete.html">
                                    Confirm Booking
                                  </a>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="section-block"></div>

      <section class="info-area info-bg padding-top-90px padding-bottom-70px">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 responsive-column">
              <a href="#" class="icon-box icon-layout-2 d-flex">
                <div class="info-icon flex-shrink-0 bg-rgb text-color-2">
                  <i class="la la-phone"></i>
                </div>
                <div class="info-content">
                  <h4 class="info__title">Need Help? Contact us</h4>
                  <p class="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 responsive-column">
              <a href="#" class="icon-box icon-layout-2 d-flex">
                <div class="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                  <i class="la la-money"></i>
                </div>
                <div class="info-content">
                  <h4 class="info__title">Payments</h4>
                  <p class="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 responsive-column">
              <a href="#" class="icon-box icon-layout-2 d-flex">
                <div class="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                  <i class="la la-times"></i>
                </div>
                <div class="info-content">
                  <h4 class="info__title">Cancel Policy</h4>
                  <p class="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-area subscriber-area section-bg-2 padding-top-60px padding-bottom-60px">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="section-heading">
                <h2 class="sec__title font-size-30 text-white">
                  Subscribe to see Secret Deals
                </h2>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="subscriber-box">
                <div class="contact-form-action">
                  <form action="#">
                    <div class="input-box">
                      <label class="label-text text-white">
                        Enter email address
                      </label>
                      <div class="form-group mb-0">
                        <span class="la la-envelope form-icon"></span>
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />
                        <button
                          class="theme-btn theme-btn-small submit-btn"
                          type="submit"
                        >
                          Subscribe
                        </button>
                        <span class="font-size-14 pt-1 text-white-50">
                          <i class="la la-lock mr-1"></i>Don't worry your
                          information is safe with us.
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmBooking;
