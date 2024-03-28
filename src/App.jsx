import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Event from "./Components/Event";
import Main from "./Components/Main";
import Agenda from "./Components/Agenda";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Speaker from "./Components/Speaker";
import Competitions from "./Components/EventDetails.js/Competitions";

import { bg } from "./assets";

import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sponsors from "./Components/Sponsors";
import Teams from "./Components/Teams";
import Past from "./Components/Past/Past";
import ResMain from "./Components/ResMain";
import ResAbout from "./Components/ResAbout";
// import Signup from "./Components/SignUp/SignUp";
// import Login from "./Components/Login/LogIn";

const App = () => {
  const [check, setcheck] = useState(false);
  useEffect(() => {
    if (window.outerWidth < 1500) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="z-10 fixed flex-1 w-full">
          <Navbar />
        </div>
        <Routes>
          {/* {check ? ( */}
            {/* <Route
              path="/"
              element={
                <div className="flex flex-col gap-10" style={{backgroundImage:{bg}}}>
                  <div className="-z-10">
                    <ResMain />{" "}
                  </div>
                  <ResAbout />
                  <div className="flex flex-col justify-center items-center z-1">
                    <Event />
                    <Past />
                  </div>
                </div>
              }
            />
          ) : ( */}
            <Route
              path="/"
              element={
                <div className="flex flex-col gap-10">
                  <div className="-z-10">
                    {" "}
                    <Main />{" "}
                  </div>
                  <About />
                  <div className="flex flex-col justify-center items-center z-1 w-full">
                    <Event />
                    <Past />
                  </div>
                </div>
              }
            />
          {/* )} */}

          <Route
            path="/agenda"
            element={
              <div className="bg-[url('https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-66984.jpg?w=740&t=st=1711574893~exp=1711575493~hmac=3db94d44231ff1afaac3d370296317ee844a189a47124d3b0d632ea230ee9265')] bg-no-repeat bg-cover">
                <Agenda />
              </div>
            }
          />
          <Route
            path="/Sponsors"
            element={
              <div>
                <Sponsors />
              </div>
            }
          />
          <Route
            path="/event"
            element={
              <div className=" bg-[url('https://img.freepik.com/free-vector/interior-grunge-room-with-lights_125540-953.jpg?t=st=1711573462~exp=1711577062~hmac=06de1c10a82d534c9d689e3c0a9fc33adf5bc830082695f7bc71ed2bb430922a&w=1380')] bg-no-repeat bg-cover">
                <Event />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="bg-[url('https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-66984.jpg?w=740&t=st=1711574893~exp=1711575493~hmac=3db94d44231ff1afaac3d370296317ee844a189a47124d3b0d632ea230ee9265')] bg-no-repeat bg-cover">
                <Teams />
              </div>
            }
          />
          <Route
            path="/speakers"
            element={
              <div className="">
                <Speaker />
              </div>
            }
          />
          <Route
            path="/compi"
            element={
              <div className="">
                <Competitions />
              </div>
            }
          />
        </Routes>
        <div className="w-full">
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
