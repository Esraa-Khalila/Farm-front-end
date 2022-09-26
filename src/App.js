import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import SignIn from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import About from "./Components/About";
import AddFarm from "./Components/Farm/AddFarm";
import FarmSingle from "./Components/Farm/FarmSingle";
import AllFarms from "./Components/Farm/AllFarms";
import FarmBooking from "./Components/Farm/FarmBooking";
import Dashboard from "./Components/Admin/Dashboard";
import AddFarmAdmin from "./Components/Admin/Farm/News/AddNewsAdmin";
import EditFarmAdmin from "./Components/Admin/Farm/EditFarmAdmin";
import TableNew from "./Components/Admin/Farm/News/TableNew";
import SignUp from "./Components/Auth/SignUp";
export const UserContext = createContext();
function App() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("isLogin")));
  }, []);
  const [checkout, setCheckOut] = useState(false);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            logged,
            setLogged,
          }}
        >
          <Routes>
            {/* Routes that needs a navbar will need to go as children of this Route component */}
            <Route path="/" element={<LayoutsWithNavbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/add-farm" element={<AddFarm />} />
              <Route path="/booking/:id" element={<FarmBooking />} />
              <Route path="/farmSingle/:id" element={<FarmSingle />} />

              <Route path="/All-farm" element={<AllFarms />} />
            </Route>
            <Route>
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/AddFarmAdmin" element={<AddFarmAdmin />} />
              <Route path="/EditFarmAdmin/:id" element={<EditFarmAdmin />} />
              <Route path="/tableNew" element={<TableNew />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );

  function LayoutsWithNavbar() {
    return (
      <>
        {/* Your navbar component */}
        <NavBar logged={logged} />

        {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
        <Outlet />

        {/* You can add a footer to get fancy in here :) */}
        <Footer />
      </>
    );
  }
}

export default App;
