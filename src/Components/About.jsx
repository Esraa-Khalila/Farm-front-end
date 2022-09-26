import React from "react";

const About = () => {
  return (
    <>
      <section
        class="site-hero inner-page overlay"
        style={{ backgroundImage: "url(sogo/images/hero_4.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div class="container">
          <div class="row site-hero-inner justify-content-center align-items-center">
            <div class="col-md-10 text-center" data-aos="fade">
              <h1 class="heading mb-3">About Us</h1>
              <ul class="custom-breadcrumbs mb-4">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>&bullet;</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>

        <a class="mouse smoothscroll" href="#next">
          <div class="mouse-icon">
            <span class="mouse-wheel"></span>
          </div>
        </a>
      </section>
      {/* <!-- end breadcrumb-area --> */}
      {/* <!-- ================================
    END BREADCRUMB AREA
================================= --> */}

      {/* <!-- ================================
    START INFO AREA
================================= --> */}
      <section class="info-area padding-top-100px padding-bottom-70px">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 responsive-column">
              <div
                class="card-item"
                data-toggle="tooltip"
                data-placement="top"
                title="hello word"
              >
                <div class="card-img">
                  <img src="images/img21.jpg" alt="about-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title mb-2">Who We Are?</h3>
                  <p class="card-text">
                    we are company care about customer and how make life easy to
                    user
                  </p>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div class="col-lg-4 responsive-column">
              <div class="card-item ">
                <div class="card-img">
                  <img src="images/img22.jpg" alt="about-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title mb-2">What We Do?</h3>
                  <p class="card-text">
                    we allow to user to rent farm from home and anyfarm his want
                  </p>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div class="col-lg-4 responsive-column">
              <div class="card-item ">
                <div class="card-img">
                  <img src="images/img23.jpg" alt="about-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title mb-2">Our Mission</h3>
                  <p class="card-text">
                    make life a small village and the user can access to farm so
                    easy
                  </p>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end info-area --> */}
      {/* <!-- ================================
    END INFO AREA
================================= --> */}

      <section class="py-5 bg-light" id="next">
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
              data-aos="fade-up"
            >
              <figure class="img-absolute">
                <img
                  src="sogo/images/food-1.jpg"
                  alt="Free Website Template by Templateux"
                  class="img-fluid"
                />
              </figure>
              <img
                src="sogo/images/farm1.jpg"
                alt="Image"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 class="heading">Welcome!</h2>
              <p class="mb-4">
                Recently, Web Application is an essential part for all business
                issues or any project you would to apply in real world you need
                to schedule or manage it and the best choice is create web
                application which contain all details and features you need to
                do with to make your life easier and faster. So, here we can see
                the responsibility of Web Application developers to make
                people’s issues easier to handle, so my application to easer
                booking farm and find any farm you need also you can filter
                farms through price, location ,space.
              </p>
              <p>
                <a
                  href="https://vimeo.com/channels/staffpicks/93951774"
                  data-fancybox
                  class="text-uppercase letter-spacing-1"
                >
                  See video
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="container section">
        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-7 mb-5">
            <h2 class="heading" data-aos="fade-up">
              Leadership
            </h2>
          </div>
        </div>

        <div class="row">
          <div
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="block-2">
              <div class="flipper">
                <div
                  class="front"
                  style={{ backgroundImage: "url(sogo/images/esraa.jpg)" }}
                >
                  <div class="box">
                    <h2>Esraa Alkhalilah</h2>
                    <p>web developer</p>
                  </div>
                </div>
                <div class="back">
                  {/* <!-- back content --> */}
                  <blockquote>
                    <p>
                      &ldquo;she make everything related on website and network and she care about user experince.&rdquo;
                    </p>
                  </blockquote>
                  <div class="author d-flex">
                    <div class="image mr-3 align-self-center">
                      <img src="sogo/images/esraa.jpg" alt="" />
                    </div>
                    <div class="name align-self-center">
                     Esraa <span class="position">web developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- .flip-container --> */}
          </div>

          <div
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="block-2">
              {/* <!-- .hover --> */}
              <div class="flipper">
                <div
                  class="front"
                  style={{ backgroundImage: "url(sogo/images/bahaa.jpeg)" }}
                >
                  <div class="box">
                    <h2>Bahaa alqade</h2>
                    <p>Business Manager</p>
                  </div>
                </div>
                <div class="back">
                  {/* <!-- back content --> */}
                  <blockquote>
                    <p>
                      &ldquo;he make everything related in manager and time
                      managment ,he responsbility on talk with other people
                      because he is communcation .&rdquo;
                    </p>
                  </blockquote>
                  <div class="author d-flex">
                    <div class="image mr-3 align-self-center">
                      <img src="sogo/images/bahaa.jpeg" alt="" />
                    </div>
                    <div class="name align-self-center">
                      Bahaa{" "}
                      <span class="position">Business Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- .flip-container --> */}
          </div>

          <div
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="block-2">
              <div class="flipper">
                <div
                  class="front"
                  style={{ backgroundImage: "url(sogo/images/person_2.jpg)" }}
                >
                  <div class="box">
                    <h2>Jeffrey Neddery</h2>
                    <p>Marketing Director</p>
                  </div>
                </div>
                <div class="back">
                  {/* <!-- back content --> */}
                  <blockquote>
                    <p>
                      &ldquo;Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of
                      Grammar.&rdquo;
                    </p>
                  </blockquote>
                  <div class="author d-flex">
                    <div class="image mr-3 align-self-center">
                      <img src="sogo/images/person_2.jpg" alt="" />
                    </div>
                    <div class="name align-self-center">
                      Jeffrey Neddery
                      <span class="position">HR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- .flip-container --> */}
          </div>
        </div>
      </div>
      {/* <!-- END .block-2 --> */}

     

      <div class="section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7 mb-5">
              <h2 class="heading" data-aos="fade">
                History
              </h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="timeline-item" date-is="2019" data-aos="fade">
                <h3>More Branches Worldwide</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>

              <div class="timeline-item" date-is="2011" data-aos="fade">
                <h3>Company Full Blast</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>

              <div class="timeline-item" date-is="2008" data-aos="fade">
                <h3>The Birth of the Company</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
