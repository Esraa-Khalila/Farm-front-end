import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const AddFarm = () => {
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [space, setSpace] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [active, setActive] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [images, setImages] = useState("");
  const [error, setError] = useState([]);

  // const handleChange = (e) => {
  //   const imagesArray = [];

  //   for (let i = 0; i < e.target.files.length; i++) {
  //     imagesArray.push(e.target.files[i]);
  //   }
  //   setImages(imagesArray);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    let data = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   data.append("images[]", images[i]);
    // }
    data.append("name", name);
    data.append("images", images);
    data.append("location", location);
    data.append("price", price);
    data.append("space", space);
    data.append("description", description);
    data.append("day", day);
      data.append("time", time);
       data.append("phone", phone);
    data.append("active", "non-active");
      data.append("roomNumber", roomNumber);
       data.append("user_id", isLoggedIn.logged_user.id);
    console.log(data);
    axios.post("http://localhost:8000/api/farm", data).then((res) => {
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

        setError([]);
      } else {
        setError(res.data.validateError);
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
    <>
      <section class="breadcrumb-area bread-bg-7">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcrumb-content text-center">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">
                      List your farm with the world's <br />
                      largest community
                    </h2>
                  </div>
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
      {/* <!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START FORM AREA
================================= --> */}
      <section class="listing-form section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 mx-auto">
              <div class="listing-header pb-4">
                <h3 class="title font-size-28 pb-2">Add your Farm</h3>

                <p class="font-size-14">
                  <a href="#" class="text-color">
                    Read the complete farm policy for accommodations.
                  </a>
                </p>
              </div>
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-user mr-2 text-gray"></i>Your information
                  </h3>
                </div>
                <div class="form-content contact-form-action">
                  <form method="post" class="row">
                    <div class="col-lg-6 responsive-column">
                      <div class="input-box">
                        <label class="label-text">Your Name</label>
                        <div class="form-group">
                          <span class="la la-user form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="text"
                            value={isLoggedIn.logged_user.name}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-gear mr-2 text-gray"></i>Listing information
                    for your accommodation
                  </h3>
                </div>

                <div class="form-content contact-form-action">
                  <form method="post" class="row">
                    <div class="col-lg-6 responsive-column">
                      <div class="input-box">
                        <label class="label-text">Farm name</label>
                        <div class="form-group">
                          <span class="la la-briefcase form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="name"
                            placeholder="Farm name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.name}</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6 responsive-column">
                      <div class="input-box">
                        <label class="label-text">
                          City/Town, State/Province/Region
                        </label>
                        <div class="form-group">
                          <span class="la la-map form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="location"
                            placeholder="example: Deadsea"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.location}</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">Street address</label>
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="text"
                            placeholder="Building number and street name, example: 123 Main Street"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-box">
                        <label class="label-text">
                          Additional address information
                        </label>
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="text"
                            placeholder="Suite number, intersection, plaza, square"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-user mr-2 text-gray"></i>Contact Details
                  </h3>
                </div>
                <div class="form-content contact-form-action">
                  <form method="post" class="row">
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">Phone</label>
                        <div class="form-group">
                          <span class="la la-phone form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="+962 0777777"
                            value={phone}
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">Facebook Page</label>
                        <div class="form-group">
                          <span class="la la-facebook form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="https://www.facebook.com/"
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.facebook}</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-clock mr-2 text-gray"></i>Booking dates
                  </h3>
                </div>
                <div class="form-content contact-form-action">
                  <form method="post" class="row">
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">Day</label>
                        <div class="form-group">
                          <span class="la la-briefcase form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="day"
                            placeholder="Example: day 1"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.day}</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">time</label>
                        <div class="form-group">
                          <span class="la la-clock form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="time"
                            placeholder="4:00 AM-6 PM"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.time}</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-building-o mr-2 text-gray"></i>Information
                    about Farm
                  </h3>
                </div>
                <div class="form-content contact-form-action">
                  <form method="post" class="row">
                    <div class="col-lg-12">
                      <div class="input-box">
                        <label class="label-text">Total number of rooms </label>
                        <div class="form-group">
                          <span class="la la-pencil form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="roomNumber"
                            placeholder="Total number of rooms"
                            value={roomNumber}
                            onChange={(e) => setRoomNumber(e.target.value)}
                          />{" "}
                          <span style={{ color: "red" }}>
                            {error.roomNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">
                          Price range (per night)
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <input
                            class="form-control pl-3"
                            type="text"
                            name="price"
                            placeholder="Min"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />{" "}
                          <span style={{ color: "red" }}>{error.price}</span>
                          <span class="px-2">space</span>
                          <input
                            class="form-control pl-3"
                            type="number"
                            name="text"
                            value={space}
                            onChange={(e) => setSpace(e.target.value)}
                          />{" "}
                          <span style={{ color: "red" }}>{error.space}</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-box">
                        <label class="label-text mb-0 line-height-20">
                          Description of your Farm
                        </label>
                        <p class="font-size-13 mb-3 line-height-20">
                          400 character limit
                        </p>
                        <div class="form-group">
                          <span class="la la-pencil form-icon"></span>
                          <textarea
                            class="message-control form-control"
                            name="description"
                            placeholder=" "
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                          <span style={{ color: "red" }}>
                            {error.description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text text-color-6">
                          Minimum stay*{" "}
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <label
                            for="radio-1"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-1" name="radio" />
                            <span class="checkmark"></span>
                            <span>3 nights or less</span>
                          </label>
                          <label
                            for="radio-2"
                            class="radio-trigger mb-0 font-size-14"
                          >
                            <input type="radio" id="radio-2" name="radio" />
                            <span class="checkmark"></span>
                            <span>More than 3 nights</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text text-color-6">
                          Security *
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <label
                            for="radio-3"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-3" name="radio" />
                            <span class="checkmark"></span>
                            <span>On site</span>
                          </label>
                          <label
                            for="radio-4"
                            class="radio-trigger mb-0 font-size-14"
                          >
                            <input type="radio" id="radio-4" name="radio" />
                            <span class="checkmark"></span>
                            <span>None</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text text-color-6">
                          have pool *
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <label
                            for="radio-5"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-5" name="radio" />
                            <span class="checkmark"></span>
                            <span>Yes</span>
                          </label>
                          <label
                            for="radio-6"
                            class="radio-trigger mb-0 font-size-14"
                          >
                            <input type="radio" id="radio-6" name="radio" />
                            <span class="checkmark"></span>
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text text-color-6">
                          have football Studim *
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <label
                            for="radio-7"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-7" name="radio" />
                            <span class="checkmark"></span>
                            <span>Yes</span>
                          </label>
                          <label
                            for="radio-8"
                            class="radio-trigger mb-0 font-size-14"
                          >
                            <input type="radio" id="radio-8" name="radio" />
                            <span class="checkmark"></span>
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text text-color-6">
                          Farm frequency *
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <label
                            for="radio-9"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-9" name="radio" />
                            <span class="checkmark"></span>
                            <span>Daily</span>
                          </label>
                          <label
                            for="radio-10"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-10" name="radio" />
                            <span class="checkmark"></span>
                            <span>Weekly</span>
                          </label>
                          <label
                            for="radio-11"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-11" name="radio" />
                            <span class="checkmark"></span>
                            <span>Monthly</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text text-color-6">
                          play area*
                        </label>
                        <div class="form-group d-flex align-items-center">
                          <label
                            for="radio-16"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-16" name="radio" />
                            <span class="checkmark"></span>
                            <span>Yes</span>
                          </label>
                          <label
                            for="radio-17"
                            class="radio-trigger mb-0 font-size-14 mr-3"
                          >
                            <input type="radio" id="radio-17" name="radio" />
                            <span class="checkmark"></span>
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-photo mr-2 text-gray"></i>Choose a photo to
                    represent this listing
                  </h3>
                </div>
                <div class="form-content contact-form-action">
                  <form method="post" class="row">
                    <div class="col-lg-12">
                      <div class="file-upload-wrap">
                        <input
                          type="file"
                          name="images"
                          onChange={(e) => setImages(e.target.files[0])}
                          class="multi file-upload-input with-preview"
                          multiple
                          maxlength="3"
                        />
                        <span class="file-upload-text">
                          <i class="la la-upload mr-2"></i>Click or drag images
                          here to upload
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="submit-box">
                <h3 class="title pb-3">Submit this listing</h3>
                {/* <div class="custom-checkbox">
                  <input type="checkbox" id="agreeChb" />
                  <label for="agreeChb">
                    Check this box to certify that you are an official
                    representative of the property for which you are submitting
                    this listing and that the information you have submitted is
                    correct. In submitting a photo, you also certify that you
                    have the right to use the photo on the web and agree to hold
                    Trizen harmless for any and all copyright issues arising
                    from your use of the image.
                  </label>
                </div> */}
                <div class="btn-box pt-3">
                  <button
                    type="submit"
                    class="theme-btn"
                    encType="multipart/form-data"
                    onClick={submitHandler}
                  >
                    Submit Listing <i class="la la-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddFarm;
