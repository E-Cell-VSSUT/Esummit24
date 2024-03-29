import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Event from "./Components/Event";
import Main from "./Components/Main";
import Agenda from "./Components/Agenda";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Speaker from "./Components/Speaker";
import StartupOddesy from "./Components/EventDetails.js/StartupOddesy";
import Competitions from "./Components/EventDetails.js/Competitions";
import BrandBuildUp from "./Components/EventDetails.js/BrandBuildUp";
import IPLAuction from "./Components/EventDetails.js/IPLAuction";
import CreaterCorner from "./Components/EventDetails.js/CreaterCorner";
import IdeathonPitch from "./Components/EventDetails.js/IdeathonPitch";
import LaughterLounge from "./Components/EventDetails.js/LaughterLounge";
import LeadershipSummit from "./Components/EventDetails.js/LeadershipSummit";
import NetworkingLunch from "./Components/EventDetails.js/NetworkingLunch";
import TraderCamp from "./Components/EventDetails.js/TraderCamp";

import { shortLogo } from "./assets";

import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sponsors from "./Components/Sponsors";
import Teams from "./Components/Teams";
import Past from "./Components/Past/Past";

import PropagateLoader from "react-spinners/PropagateLoader";



const App = () => {

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  },[])

  return (
    <div>
      {loading ? 
    <div className="flex justify-center items-center text-center bg-[#0d1117] w-full h-screen">
      <div className="flex flex-col justify-center items-center -mt-[100px]">
      <img src={shortLogo} className="w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] " />
         <PropagateLoader 
         color="#164457"
         size={20}
         aria-label="Loading Spinner"
         data-testid="loader"
         /> 
         </div>
         </div>
         : 
      <BrowserRouter>
        <div className="z-10 fixed flex-1 w-full bg-[#161b2216]">
          <Navbar />
        </div>
        <Routes>

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
            path="/StartupOddesy"
            element={
              <div className="">
                <StartupOddesy />
              </div>
            }
          />
          <Route
            path="/BrandBuildUp"
            element={
              <div className="">
                <BrandBuildUp />
              </div>
            }
          />
           <Route
            path="/IPLAuction"
            element={
              <div className="">
                <IPLAuction />
              </div>
            }
          />
           <Route
            path="/CreaterCorner"
            element={
              <div className="">
                <CreaterCorner />
              </div>
            }
          />
          <Route
            path="/IdeathonPitch"
            element={
              <div className="">
                <IdeathonPitch />
              </div>
            }
          />
           <Route
            path="/TraderCamp"
            element={
              <div className="">
                <TraderCamp />
              </div>
            }
          />
           <Route
            path="/LaughterLounge"
            element={
              <div className="">
                <LaughterLounge />
              </div>
            }
          />
          <Route
            path="/LeadershipSummit"
            element={
              <div className="">
                <LeadershipSummit />
              </div>
            }
          />
           <Route
            path="/NetworkingLunch"
            element={
              <div className="">
                <NetworkingLunch />
              </div>
            }
          />
        </Routes>
        <div className="w-full">
        <Footer />
        </div>
      </BrowserRouter>
      }
    </div>
  );
};

export default App;
