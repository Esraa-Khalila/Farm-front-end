import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link  } from "react-router-dom";
import axios from "axios";
import { getNew } from "../../../../Store/Reducer/NewReducer";

const TableNew = () => {
  const [items, setItems] = useState([]);
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  if (!isLoggedIn.logged_user.role=='Admin') {
    window.location.href="/login";
  }
  const deleteRequestHandler = (post_id) => {
    const response = axios.delete(`http://127.0.0.1:8000/api/new/${post_id}`);
    setItems(items.filter((user) => user.id !== post_id));
  };
  const dispatch = useDispatch();
  const uncos = useSelector((state) => state.news.news);
  useEffect(() => {
    dispatch(getNew());
  }, [dispatch]);
  return (
    <div class="dark-edition">
      <div class="wrapper ">
        <div
          class="sidebar"
          data-color="green"
          data-background-color="black"
          data-image="../assets/img/sidebar-2.jpg"
        >
          <div class="logo">
            <a
              href="http://www.creative-tim.com"
              class="simple-text logo-normal"
            >
              Creative Tim
            </a>
          </div>
          <div class="sidebar-wrapper">
            <ul class="nav">
              <li class="nav-item  ">
                <a class="nav-link" href="dashboard">
                  <i class="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>

              <li class="nav-item active ">
                <a class="nav-link" href="dashboard">
                  <i class="material-icons">content_paste</i>
                  <p>Farm List</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/tableNew">
                  <i class="material-icons">library_books</i>
                  <p>News List</p>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="./icons.html">
                  <i class="material-icons">bubble_chart</i>
                  <p>Icons</p>
                </a>
              </li>

              <li class="nav-item active-pro ">
                <a class="nav-link" href="./upgrade.html">
                  <i class="material-icons">unarchive</i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-panel">
          <nav
            class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
            id="navigation-example"
          >
            <div class="container-fluid">
              <div class="navbar-wrapper">
                <a class="navbar-brand" href="javascript:void(0)">
                  Table List
                </a>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#navigation-example"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                      <i class="material-icons">dashboard</i>
                      <p class="d-lg-none d-md-block">Stats</p>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link"
                      href="javscript:void(0)"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="material-icons">notifications</i>
                      <span class="notification">5</span>
                      <p class="d-lg-none d-md-block">Some Actions</p>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="javascript:void(0)">
                        Mike John responded to your email
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        You have 5 new tasks
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        You're now friend with Andrew
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another Notification
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another One
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                      <i class="material-icons">person</i>
                      <p class="d-lg-none d-md-block">Account</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="container-fluid">
              <br />
              <button
                style={{
                  background: "#28a745",
                  width: "150px",
                  margin: "20px",
                }}
              >
                <Link to={"/create"}>Add</Link>
              </button>
              <button style={{ background: "#28a745", width: "150px" }}>
                <Link to={"/"}>Home</Link>
              </button>
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header card-header-primary">
                      <h4 class="card-title ">Simple Table</h4>
                      <p class="card-category">
                        {" "}
                        Here is a subtitle for this table
                      </p>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class=" text-primary">
                            <th>new</th>
                            <th>by</th>

                            {/* <th>price</th> */}

                            <th>Actions</th>
                          </thead>
                          {uncos &&
                            uncos.map((uncos, index) => (
                              <tbody>
                                <tr>
                                  <td key={index}>{index + 1}</td>
                                  <td>{uncos.uncos}</td>
                                  <td>{uncos.by}</td>

                                  {/* <td>{cloth.price}</td> */}

                                  <td>
                                    <Link to={"/EditFarmAdmin/" + uncos.id}>
                                      Actions
                                    </Link>
                                  </td>
                                  <button
                                    class=" theme-btn btn-style-two regular"
                                    onClick={(e) =>
                                      deleteRequestHandler(
                                        uncos?.id,
                                        uncos.user_id,
                                        uncos.post_id
                                      )(e)
                                    }
                                  >
                                    Delete
                                  </button>
                                </tr>
                              </tbody>
                            ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <footer class="footer">
                  <div class="container-fluid">
                    <nav class="float-left">
                      <ul>
                        <li>
                          <a href="https://creative-tim.com/presentation">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="http://blog.creative-tim.com">Blog</a>
                        </li>
                        <li>
                          <a href="https://www.creative-tim.com/license">
                            Licenses
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div class="copyright float-right" id="date">
                      , made with <i class="material-icons">favorite</i> by
                      <a href="https://www.creative-tim.com" target="_blank">
                        Esraa
                      </a>{" "}
                      for a better web.
                    </div>
                  </div>
                </footer>
                <script>
                  const x = new Date().getFullYear(); let date =
                  document.getElementById('date'); date.innerHTML = '&copy; ' +
                  x + date.innerHTML;
                </script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableNew;
