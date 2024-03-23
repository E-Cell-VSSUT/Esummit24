import React, { useEffect, useState } from "react";
import About from "./Components/About";
import Event from "./Components/Event";
import Main from "./Components/Main";
import Agenda from "./Components/Agenda";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Past_Speaker from "./Components/Past_Speaker";
import Past_Sponsors from "./Components/Past_Sponsors";

import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sponsors from "./Components/Sponsors";
import Teams from "./Components/Teams";

const App = () => {
  const [check, setcheck] = useState(false);
  useEffect(() => {
    if (window.outerWidth < 1500) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  }, check);
  return (
    <div>
      <BrowserRouter>
      <div className="z-10 fixed w-full">
       <Navbar/> 
        </div>
        <Routes>
          <Route path="/" element={
            <div>
              <Main />
              <About />
              <Event />
              <Past_Speaker />

              <Past_Sponsors />

            </div>
          } />

          <Route path="/agenda"
            element={
              <div>
                <Agenda />
              </div>
            }
          />
           <Route path="/Sponsors"
            element={
              <div>
                <Sponsors />
              </div>
            }
          />
           <Route path="/contact"
            element={
              <div className="">
                <Teams />
              </div>
            }
          />
        </Routes>
<Footer />
</BrowserRouter>
    </div>
  );
};

export default App;
