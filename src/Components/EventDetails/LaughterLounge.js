import React from "react";
import Faq from "../Faq.js";
import { teams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import "./compi.css";
import { Link } from "react-router-dom";


const LaughterLounge = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://www.kmmc.in/kmmc/uploads/2023/09/close-up-microphone-concert-stage-with-beautiful-lighting.jpg')] bg-no-repeatbg-center bg-cover mb-[100px]">
        <div className="hero-container">
          <div className="background">
            {/* <img
              src="https://www.ecell.in/esummit/assets/images/top-left.png"
              className="top-left"
            /> */}
            <img
              src="	https://www.ecell.in/esummit/assets/images/bottom-left.png"
              className="bottom-left"
            />
            {/* <img
              src="https://www.ecell.in/esummit/assets/images/bottom-right.png"
              className="bottom-right"
            /> */}
          </div>
          <div className="reg-button">
            <div className="header">
              <span className="green">LAUGHTER</span>
              <br />
              <span className="white">LOUNGE</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/events/the-laughter-lounge-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943586">REGISTER</Link></button>
              <h3 className="text mt-2 text-slate-100">Registration Opens!</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <h1 className="mb-4 text-4xl main-font2 font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white">
          About
        </h1>
        <div className="flex justify-center items-center flex-wrap pl-[10px] pr-[10px]">
          <p className="mb-6 text-lg main-font font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 hover:dark:text-gray-300">
            Get ready to loosen up at the Laughter Lounge presented by E-Cell,
            VSSUT as a part of E-Summit 2K24, where comics deliver punchlines
            that will leave you rolling in the aisles. Laugh your worries away,
            relax & unwind with some much-needed laughter therapy after the
            intense E-Summit sessions, as this event promises to be an
            unforgettable experience. Come and join us for an event brimming
            with endless laughter!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[50px]">
          {/* rules and guidelines */}

          <div className="w-full flex justify-center items-center flex-col">
            {/* <!-- The Timeline --> */}
            <div id="timeline-content">
              <h1 className="text-3xl main-font2 sm:text-4xl text-white ">
                Time line
              </h1>

              <ul class="timeline ">
                <li class="event" data-date="event">
                  <h3 className=" ">7th April 2024</h3>
                  <p className="text-xs">5:15 PM - 6:00 PM</p>
                  <p>Enjoy a performance that will relax your soul through its comics and jokes.</p>
                </li>
               
                
              </ul>
            </div>
          </div>

          {/* faq */}
          <div className="w-[100vw] flex flex-col justify-center items-center gap-5 decoration-0">
            <h1 className="text-3xl sm:text-4xl text-white ">FAQs</h1>
            <div className=" w-[70%] h-full p-10 gap-4 border-4 border-[#607ca5] rounded-xl decoration-0 ">
              <div className=" py-1">
                <Accordion
                  title="What is The Laughter Lounge at E-Summit?"
                  answer="The Laughter Lounge is an event presented by E-Cell, VSSUT as part of E-Summit 2K24, featuring comedians who deliver punchlines that will leave attendees rolling with laughter."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="When and where will The Laughter Lounge take place?"
                  answer="The Laughter Lounge will take place on a specific date and time during E-Summit 2K24, typically in the evening from 5:15 PM to 6:00 PM."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="What can attendees expect from The Laughter Lounge?"
                  answer="Attendees can expect to enjoy a performance by comedians that will relax their soul through jokes and humor, providing much-needed laughter therapy."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Will there be opportunities for attendees to participate in the comedy show?"
                  answer="The format of The Laughter Lounge may vary, but attendees can typically expect to be part of a relaxed audience enjoying the comedy performance."
                />
              </div>
            
            </div>
          </div>

          {/* contact */}

          <div className="flex justify-center items-center flex-wrap flex-col gap-[100px] lg:gap-0">
            <h1 className="text-white text-2xl lg:text-4xl main-font2">
              Contact Us
            </h1>
            <div className="team_container">
              {teams.lead.map((team) => (
                <div class="wrapper">
                  <div class="img-area">
                    <div class="inner-area">
                      <img src={team.url} alt="" />
                    </div>
                  </div>
                  <div class="effect"></div>
                  <div class="name">{team.name}</div>
                  <div class="secname">{team.name}</div>
                  <div class="about">{team.designation}</div>
                  <div class="social-icons">
                    <a
                      href="#"
                      className=" XTwitter flex justify-center items-center text-2xl"
                    >
                      <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                        <FaXTwitter />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="Facebook flex justify-center items-center text-2xl"
                    >
                      <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                        <FaFacebook />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="Linkedin flex justify-center items-center text-2xl"
                    >
                      <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                        <LiaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="Instagram flex justify-center items-center text-2xl"
                    >
                      <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                        <CiInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaughterLounge;
