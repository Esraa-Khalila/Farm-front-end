import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { register } from "../../Store/Reducer/userSlice";

const SignUp = () => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    role: "user",
    confirm_password: "",
  };

  const [User, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();
    const { name, email, password, role, confirm_password } = User;

    dispatch(register({ name, email, password, role, confirm_password }))
      .unwrap()
      .then((data) => {
        console.log(data);
        console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          role: data.role,
          confirm_password: data.confirm_password,
        });

        swal({
          title: "Register Success",
          icon: "warning",
          button: "sure!",
        }).then(function () {
          window.location.href = "/login";
        });
        setSubmitted(true);
      })

      .catch((e) => {
        console.log(e);
        swal({
          title: "SOMETHING WRON! ",
          text: "The password must be at least 8 characters or The email has already been taken!",
          icon: "warning",
          button: "wrong!",
        }).then(function () {
          window.location.href = "/register";
        });
      });
  };

  return (
    <div class="d-lg-flex half">
      <div
        class="bg order-1 order-md-2"
        style={{ backgroundImage: "url(login/images/image1.jfif)" }}
      ></div>
      <div class="contents order-2 order-md-1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <h3>
                Register to <strong>Farm</strong>
              </h3>
              <p class="mb-4">
                to get a addtitional feautred
              </p>
              <form onSubmit={save}>
                <div class="form-group first">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    class="form-control"
                   
                    id="username"
                    onChange={(event) => handleInputChange(event)}
                    value={User.name || ""}
                    required
                    name="name"
                  />
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Email</label>
                  <input
                    type="email"
                    class="form-control"
                 
                    id="email"
                    onChange={handleInputChange}
                    value={User.email || ""}
                    required
                    name="email"
                    minlength="8"
                  />
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    
                    id="password"
                    onChange={handleInputChange}
                    value={User.password || ""}
                    required
                    name="password"
                    minlength="8"
                  />
                </div>
                <div class="form-group  mb-3">
                  <label for="password"> confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                 
                    onChange={handleInputChange}
                    required
                    value={User.confirm_password || ""}
                    name="confirm_password"
                  />
                </div>

                <div class="d-flex mb-5 align-items-center">
                  <label class="control control--checkbox mb-0">
                    <span class="caption">Remember me</span>
                    <input type="checkbox" checked="checked" />
                    <div class="control__indicator"></div>
                  </label>
                  <span class="ml-auto">
                    <a href="#" class="forgot-pass">
                      Forgot Password
                    </a>
                  </span>
                </div>

                <input
                  type="submit"
                  value="Register"
                  class="btn btn-block "
                  style={{ background: "green", color: "white" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
