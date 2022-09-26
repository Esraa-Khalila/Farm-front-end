import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import swal from "sweetalert";
import axios from "axios";
import { Link } from "react-router-dom";
const EditFarmAdmin = () => {
  const [data, setData] = useState({
    name: "",
    space: "",
    phone: "",
    location: "",
    day: "",
    time: "",
    active: "",
  });

  const [update, setUpdate] = useState(false);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const data = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/farm/${id}`);
      const dbData = await response.json();
      setData(dbData);
      console.log(dbData);
    };
    data();
  }, [update]);

  const updateHandeler = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/farm/${id}`, data)
      .then((res) => setData(res.data))
      .then(() => setUpdate(!update));
    console.log(data);
    if (!update) {
      window.alert(" Farm has been uploaded successfuly");
    }
    return axios.post("http://localhost:8000/api/farm", data).then((res) => {
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
           position: "top-end",
           icon: "success",
           title: "Your work has been saved",
           showConfirmButton: false,
           timer: 1500,
         }).then(function () {
           window.location.href = "/";
         });
        // console.log(res.data.validateError);
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
                            name="name"
                            placeholder="Farm name"
                            value={data.name}
                            onChange={(e) =>
                              setData({ ...data, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 responsive-column">
                      <div class="input-box">
                        <label class="label-text">City/Town</label>
                        <div class="form-group">
                          <span class="la la-map form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="location"
                            placeholder="example: Deadsea"
                            value={data.location}
                            onChange={(e) =>
                              setData({ ...data, location: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">space</label>
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="space"
                            placeholder="space"
                            value={data.space}
                            onChange={(e) =>
                              setData({ ...data, space: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">day</label>
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="day"
                            placeholder="day"
                            value={data.day}
                            onChange={(e) =>
                              setData({ ...data, day: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="input-box">
                        <label class="label-text">time</label>
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="time"
                            value={data.time}
                            onChange={(e) =>
                              setData({ ...data, time: e.target.value })
                            }
                          />
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
                            name="active"
                            value={data.active}
                            onChange={(e) =>
                              setData({ ...data, active: e.target.value })
                            }
                          />
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
                    </div>{" "}
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
                  </form>
                </div>
              </div>

              <div class="submit-box">
                <h3 class="title pb-3">Edit</h3>
                <div class="btn-box pt-3">
                  <button
                    type="submit"
                    class="theme-btn"
                    encType="multipart/form-data"
                    onClick={updateHandeler}
                  >
                    Edit <i class="la la-arrow-right ml-1"></i>
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

export default EditFarmAdmin;
