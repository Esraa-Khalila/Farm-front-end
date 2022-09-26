import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFarm } from "../Store/Reducer/FarmReducer";
import { getActivity } from "../Store/Reducer/ActivityReducer";
import { getQuestion } from "../Store/Reducer/QuestionReducer";
import { getFeedback } from "../Store/Reducer/FeedbackReducer";
import { getNew } from "../Store/Reducer/NewReducer";
import { Link } from "react-router-dom";
import { findByTitle } from "../Store/Reducer/FarmReducer";
import swal from "sweetalert";
import axios from "axios";

const Home = () => {
 const dispatch = useDispatch();
  const farm = useSelector((state) => state.farms.farms);
  const activites = useSelector((state) => state.activites.activites);
  const questions = useSelector((state) => state.questions.questions);
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const news = useSelector((state) => state.news.news);
  console.log(news);


  useEffect(() => {
    dispatch(getFarm());
    dispatch(getActivity());
    dispatch(getQuestion());
    dispatch(getFeedback());
    dispatch(getNew());

 
  }, [dispatch]);
  console.log("title", farm);

  const [name, setSearchType] = useState("");
 



  const onChangeSearchTitle = (e) => {
    const name = e.target.value;
    setSearchType(name);
  };

  const findByName = (e) => {

    dispatch(findByTitle({ name: name }));
  };
    let isLoggedIn = JSON.parse(localStorage.getItem("user"));

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    let data = new FormData();

    data.append("title", title);
    data.append("question", question);
    data.append("answer", answer);
    data.append("user_id", isLoggedIn.logged_user.id);
    console.log(data);
    axios.post("http://localhost:8000/api/addQuestion", data).then((res) => {
      if (res.data.status === 200) {
        swal({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(function () {
          window.location.href = "/";
        });

  
      } else {
        // setError(res.data.validateError);
        swal({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(res.data.validateError);
      }
    });
  };
  return (
    <div>
      <main>
        {/* <!-- slider Area Start--> */}
        <div class="slider-area ">
          {/* <!-- Mobile Menu --> */}
          <div class="slider-active dot-style">
            <div
              class="single-slider  hero-overly slider-height d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/img/hero/farm.jpg)",
              }}
            >
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-xl-9">
                    <div class="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">
                        top Farms in the country
                      </h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">
                        Farms{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- slider Area End--> */}
        {/* <!-- Booking Room Start--> */}
        {/* <!-- Booking Room End--> */}
        {/* 
<!-- ================================
    START HOTEL AREA
================================= --> */}
        <section class="blog-area padding-top-50px padding-bottom-100px">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading text-center">
                  <h2 class="sec__title line-height-55">Latest Farms </h2>
                </div>
                {/* <!-- end section-heading --> */}
              </div>
              {/* <!-- end col-lg-12 --> */}
            </div>
            {/* <!-- end row --> */}
            <div class="row padding-top-50px">
              {farm.map((farm) => (
                <div class="col-lg-4 responsive-column">
                  <div class="card-item blog-card">
                    <div class="card-img">
                      <img
                        src={"http://127.0.0.1:8000/image/" + farm.images}
                        alt="bff"
                      />
                      alt="blog-img" />
                      <div class="post-format icon-element">
                        <i class="la la-photo"></i>
                      </div>
                      <div class="card-body">
                        <div class="post-categories">
                          <a href="#" class="badge"></a>
                          <a href="#" class="badge">
                            {farm.price}Jd
                          </a>
                        </div>
                        <h3 class="card-title line-height-26">
                          <a href="blog-single.html">{farm.name}</a>
                        </h3>
                        <p class="card-meta">
                          <span class="post__date">{farm.created_at}</span>
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
                            {farm.location}
                          </a>
                          <br />
                          <Link
                            class="author__title"
                            to={"farmSingle/" + farm.id}
                          >
                            details
                          </Link>
                        </div>
                      </div>
                      <div class="post-share">
                        <ul>
                          <li>
                            <i class="la la-share icon-element"></i>
                            <ul class="post-share-dropdown d-flex align-items-center">
                              <li>
                                <a href="#">
                                  <i class="lab la-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="lab la-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="lab la-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end card-item --> */}
                </div>
              ))}{" "}
            </div>

            {/* <!-- end row --> */}
            <div class="row">
              <div class="col-lg-12">
                <div class="btn-box text-center pt-4">
                  <a href="blog-grid.html" class="theme-btn">
                    Read More Post
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end farm-area --> */}
        {activites.map((activity) => {
          {
            /* <!-- Dining Start --> */
          }
          return (
            <div class="dining-area ">
              {/* <!-- Single Left img --> */}
              <div class="single-dining-area left-img">
                <div class="container">
                  <div class="row justify-content-end">
                    <div class="col-lg-8 col-md-8">
                      <div class="dining-caption">
                        <h3>{activity.name}</h3>
                        <p>{activity.description}</p>
                        <a href="#" class="btn border-btn">
                          Learn More <i class="ti-angle-right"></i>{" "}
                        </a>
                      </div>
                    </div>
                    ;
                  </div>
                </div>
              </div>
              {/* <!-- single Right img --> */}
              <div class="single-dining-area right-img">
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="col-lg-8 col-md-8">
                      <div class="dining-caption text-right">
                        <h3>{activity.name}</h3>
                        <p>{activity.description}</p>
                        <a href="#" class="btn border-btn">
                          Learn More <i class="ti-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
        {/* <!-- Dining End --> */}
        <section class="faq-area section-bg mt-5  customar-padding fix">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading text-center">
                  <h2 class="sec__title">Frequently Asked Questions</h2>
                </div>
                {/* <!-- end section-heading --> */}
              </div>
              {/* <!-- end col-lg-12 --> */}
            </div>
            {/* <!-- end row --> */}
            <div class="row padding-top-60px">
              <div class="col-lg-7">
                {" "}
                {questions.map((question) => {
                  return (
                    <div
                      class="accordion accordion-item"
                      defaultActiveKey="0"
                      flush="true"
                    >
                      <div class="card">
                        <div class="card-header" id="faqHeadingOne">
                          <h2 class="mb-0">
                            <button
                              class="btn btn-link d-flex align-items-center justify-content-between"
                              type="button"
                              data-toggle="collapse"
                              data-target="#faqCollapseOne"
                              aria-expanded="true"
                              aria-controls="faqCollapseOne"
                            >
                              <span>{question.title}</span>
                              <i class="la la-minus"></i>
                              <i class="la la-plus"></i>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="faqCollapseOne"
                          class="collapse show"
                          aria-labelledby="faqHeadingOne"
                          data-parent="#accordionExample"
                          eventKey="0"
                        >
                          <div class="card-body">
                            <p>{question.question}</p>
                            <ul class="list-items py-2">
                              <li>{question.answer}</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* <!-- end card --> */}
                    </div>
                  );
                })}
                <div class="accordion-help-text pt-2">
                  <p class="font-size-14 font-weight-regular">
                    Any questions? Just visit our
                    <a
                      href="#"
                      class="color-text"
                      style={{ color: "rgb(73, 160, 51)" }}
                    >
                      Help center
                    </a>
                    or
                    <a
                      href="#"
                      class="color-text"
                      style={{ color: "rgb(73, 160, 51)" }}
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- end col-lg-7 --> */}
              <div class="col-lg-5">
                <div class="faq-forum pl-4">
                  <div class="form-box border">
                    <div class="form-title-wrap">
                      <h3 class="title">Still have question?</h3>
                    </div>
                    {/* <!-- form-title-wrap --> */}
                    <div class="form-content">
                      <div class="contact-form-action">
                        <form method="post">
                          <div class="input-box">
                            <label class="label-text">Your Name</label>
                            <div class="form-group">
                              <span class="la la-user form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                placeholder={isLoggedIn.logged_user.name}
                                disabled
                              />
                            </div>
                          </div>
                          <div class="input-box">
                            <label class="label-text">title</label>
                            <div class="form-group">
                              <span class="la la-envelope-o form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="title"
                                placeholder="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>
                          <div class="input-box">
                            <label class="label-text">Message</label>
                            <div class="form-group">
                              <span class="la la-pencil form-icon"></span>
                              <textarea
                                class="message-control form-control"
                                name="question"
                                placeholder="Write message"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                          <div class="btn-box">
                            <button
                              type="button"
                              onClick={submitHandler}
                              class="theme-btn"
                              style={{ background: "rgb(73,160,51)" }}
                            >
                              Send Message{" "}
                              <i class="la la-arrow-right ml-1"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* <!-- end contact-form-action --> */}
                    </div>
                    {/* <!-- end form-content --> */}
                  </div>
                  {/* <!-- end form-box --> */}
                </div>
                {/* <!-- end faq-forum --> */}
              </div>
              {/* <!-- end col-lg-4 --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </section>
        {/* <!--end faq-area-->     
        <!-- Testimonial Start --> */}
        {/* <!-- Testimonial Start --> */}
        <div class="testimonial-area testimonial-padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-9 col-lg-9 col-md-9">
                <div class="h1-testimonial-active">
                  {/* <!-- Single Testimonial --> */}
                  {feedbacks.map((feedback) => {
                    return (
                      <div class="single-testimonial pt-65">
                        {/* <!-- Testimonial tittle --> */}
                        <div class="font-back-tittle mb-105">
                          <div class="archivment-front">
                            <img src="assets/img/logo/testimonial.png" alt="" />
                          </div>
                          <h3 class="archivment-back">Testimonial</h3>
                        </div>
                        {/* <!-- Testimonial Content --> */}
                        <div class="testimonial-caption text-center">
                          <p>{feedback.feedback}</p>
                          {/* <!-- Rattion --> */}
                          <div class="testimonial-ratting">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div class="rattiong-caption">
                            <span>
                              Clifford Frazier, <span>Regular Client</span>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}
        {/* <!-- Blog Start --> */}
        <div class="blog-area blog-padding">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8">
                {/* <!-- Seciton Tittle  --> */}
                <div class="font-back-tittle mb-50">
                  <div class="archivment-front">
                    <h3>Our News</h3>
                  </div>
                  <h3 class="archivment-back">Recent News</h3>
                </div>
              </div>
            </div>
            <div class="row">
              {" "}
              {news.map((news) => {
                return (
                  <div class="col-xl-4 col-lg-4 col-md-6">
                    {/* <!-- Single Blog --> */}

                    <div class="single-blog mb-30">
                      <div class="blog-img">
                        <a href="single-blog.html">
                          <img
                            src="assets/img/our_blog/Jordan-A-2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="blog-caption">
                        <div class="blog-cap-top d-flex justify-content-between mb-40">
                          <span>news</span>
                          <ul>
                            <li>
                              by<a href="#"> Catherina Cunnane</a>
                            </li>
                          </ul>
                        </div>
                        <div class="blog-cap-mid">
                          <p>
                            <a href="single-blog.html">{news.uncos}</a>
                          </p>
                        </div>
                        {/* <!-- Comments --> */}
                        <div class="blog-cap-bottom d-flex justify-content-between">
                          <span>{news.created_at}</span>
                          <span>
                            <img
                              src="assets/img/our_blog/blog-comments-icon.jpg"
                              alt=""
                            />
                            3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <!-- Blog End -->

        <!-- Gallery img Start--> */}
        <div class="gallery-area fix">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-md-12">
                <div class="gallery-active owl-carousel">
                  <div class="gallery-img">
                    <a href="#">
                      <img
                        src="assets/img/gallery/resize (6).jfif"
                        height="370px"
                        width="100px"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="gallery-img">
                    <a href="#">
                      <img
                        src="assets/img/gallery/resize (8).jfif"
                        height="370px"
                        width="100px"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="gallery-img">
                    <a href="#">
                      <img
                        src="assets/img/gallery/resize (7).jfif"
                        height="370px"
                        width="100px"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Gallery img End--> */}
      </main>
    </div>
  );
};

export default Home;
