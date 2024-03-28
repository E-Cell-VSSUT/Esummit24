import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Event from "./Components/Event";
import Main from "./Components/Main";
import Agenda from "./Components/Agenda";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Speaker from "./Components/Speaker";
import Event1 from "./Components/EventDetails.js/event1";
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
              <div className="bg-[#161b22] bg-no-repeat bg-cover">
                <Agenda />
              </div>
            }
          />
          <Route
            path="/Sponsors"
            element={
              <div className="bg-[#161b22] bg-no-repeat bg-cover">
                <Sponsors />
              </div>
            }
          />
          <Route
            path="/event"
            element={
              <div className=" bg-[#161b22] bg-no-repeat bg-cover">
                <Event />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="bg-[#161b22] bg-no-repeat bg-cover">
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
           <Route
            path="/compi1"
            element={
              <div className="">
                <Event1 />
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
