import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { login } from "../../Store/Reducer/userSlice";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [User, setUser] = useState(initialState);
  const [loggeduser, setLoggeduser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = () => {
    const { email, password, role } = User;

    dispatch(login({ email, password, role }))
      .unwrap()
      .then((data) => {
        console.log(data);
        console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          roles: ["Admin"],
        });
        localStorage.setItem("user", JSON.stringify(data));

        let isLoggedIn = JSON.parse(localStorage.getItem("user"));

        if (isLoggedIn.logged_user.role == "Admin") {
          swal({
            title: "Admin!",

            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/dashboard";
          });
        } else {
          swal({
            title: "User!",
            text: "Welcome to Farm!",
            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/";
          });
        }

        setSubmitted(true);
      })

      .catch((e) => {
        swal({
          title: "User!",
          text: "Check email and password!!",
          icon: "warning",
          button: "sure!",
        }).then(function () {
          window.location.href = "/login";
        });
      });
  };

  return (
    <>
      <div class="d-lg-flex half">
        <div
          class="bg order-1 order-md-2"
          style={{ backgroundImage: "url(images/image1.jfif)" }}
        ></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <h3>
                  Login to <strong>farm</strong>
                </h3>
                <p class="mb-4">
                 
                </p>
           
                  <div class="form-group last mb-3">
                    <label for="password">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
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
                      placeholder="Your paswword"
                      id="password"
                      onChange={handleInputChange}
                      value={User.password || ""}
                      required
                      name="password"
                      minlength="8"
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
                    onClick={save}
                    type="submit"
                    value="Log In"
                    class="btn btn-block btn-primary"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
