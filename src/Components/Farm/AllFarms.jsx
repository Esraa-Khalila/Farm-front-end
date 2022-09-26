import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFarm, findByTitle } from "../../Store/Reducer/FarmReducer";

const AllFarms = () => {
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const farm = useSelector((state) => state.farms.farms);

  useEffect(() => {
    dispatch(getFarm());
  }, [dispatch]);
  const [name, setSearchType] = useState("");
  const [location, setSearchlocation] = useState("");
  const findByName = (e) => {
    dispatch(findByTitle({ name: name }));
  };
  const onChangeSearchTitle = (e) => {
    const name = e.target.value;
    setSearchType(name);
  };
  const onChangeSearchlocation = (e) => {
    const location = e.target.value;
    setSearchlocation(location);
  };
  const findBylocation = (e) => {
    // refreshData();
    dispatch(findBylocation({ location: location }));
  };
  return (
    <div>
      <section class="breadcrumb-area bread-bg-9">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">All Farm</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Farms</li>
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
      <div class="booking-area">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <form action="">
                <div class="booking-wrap d-flex justify-content-between align-items-center">
                  {/* <!-- select in date --> */}
                  <div class="single-select-box mb-30">
                    {/* <!-- select out date --> */}
                    <div class="boking-tittle">
                      <span> search by name:</span>
                    </div>
                    <div class="boking-datepicker">
                      <input
                        id="datepicker1"
                        value={name}
                        name="name"
                        onChange={onChangeSearchTitle}
                        style={{width:'800px'}}
                      />
                    </div>
                  </div>
                  
                  {/* <!-- Single Select Box --> */}

                  {/* <!-- Single Select Box --> */}
                  <div class="single-select-box pt-45 mb-30">
                    <button
                      href="#"
                      class="btn select-btn"
                      type="button"
                      onClick={findByName}
                    >
                      search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section class="card-area section--padding">
        <div class="container">
          <div class="row">
            {farm.map((farm) => {
              return (
                <div class="col-lg-4 responsive-column">
                  <div class="card-item blog-card">
                    <div class="card-img">
                      <img
                        src={"http://127.0.0.1:8000/image/" + farm.images}
                        alt="bff"
                      />
                      <div class="post-format icon-element">
                        <i class="la la-photo"></i>
                      </div>
                      <div class="card-body">
                        <div class="post-categories">
                          <a href="#" class="badge">
                            Travel
                          </a>
                          <a href="#" class="badge">
                            lifestyle
                          </a>
                        </div>
                        <h3 class="card-title line-height-26">
                          <a href="blog-single.html">{farm.description}</a>
                        </h3>
                        <p class="card-meta">
                          <span class="post__date">{farm.created_at}</span>
                          <span class="post-dot"></span>
                        </p>
                      </div>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                      <div class="author-content d-flex align-items-center">
                        <div class="author-img">
                          <img
                            src="images/small-team1.jpg"
                            alt="testimonial image"
                          />
                        </div>
                        <div class="author-bio">
                          <a href="#" class="author__title">
                            {isLoggedIn.logged_user.name}
                          </a>
                        </div>
                      </div>
                      <div class="post-share">
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="btn-box mt-3 text-center">
                <button type="button" class="theme-btn">
                  {/* <i class="la la-refresh mr-1"></i>Load More */}
                </button>
                <p class="font-size-13 pt-2">Showing 1 - 6 of 44 Posts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="section-block"></div>

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

export default AllFarms;
