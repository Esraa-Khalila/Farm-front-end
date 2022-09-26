import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const AddFarmAdmin = () => {
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const [uncos, setUncos] = useState("");
  const [by, setBy] = useState("");


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
    data.append("uncos", uncos);
    data.append("by", by);
  
    data.append("user_id", isLoggedIn.logged_user.id);
    console.log(data);
    axios.post("http://localhost:8000/api/new", data).then((res) => {
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
      <section class="listing-form section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 mx-auto">
              <div class="listing-header pb-4">
                <h3 class="title font-size-28 pb-2">Edit Farm</h3>
              </div>
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">
                    <i class="la la-user mr-2 text-gray"></i>Your information
                  </h3>
                </div>
              </div>
              <div class="form-box">
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
                            name="uncos"
                            placeholder="Farm name"
                            value={uncos}
                            onChange={(e) => setUncos(e.target.value)}
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
                            name="by"
                            placeholder="example: Deadsea"
                            value={by}
                            onChange={(e) => setBy(e.target.value)}
                          />
                          <span style={{ color: "red" }}>{error.by}</span>
                        </div>
                      </div>
                    </div>
                
             
                  </form>
                </div>
              </div>

              <div class="submit-box">
                <h3 class="title pb-3">Add</h3>
   
                <div class="btn-box pt-3">
                  <button
                    type="submit"
                    class="theme-btn"
                    encType="multipart/form-data"
                    onClick={submitHandler}
                  >
                    Add <i class="la la-arrow-right ml-1"></i>
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

export default AddFarmAdmin;
