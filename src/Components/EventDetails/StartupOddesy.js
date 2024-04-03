import React from "react";
import Faq from "../Faq.js";
import { SocialTeams, teams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import "./compi.css";
import { Link } from "react-router-dom";


const StartupOddesy = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://img.freepik.com/premium-photo/creative-start-up-hologram-blue-background-new-business-beginnings-concept-3d-rendering_670147-71781.jpg')] bg-center  bg-no-repeat bg-cover mb-[100px]">
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
              <span className="green">STARTUP</span>
              <br />
              <span className="white">ODYSSEY</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/workshops-webinars/startup-odyssey-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943558">REGISTER</Link></button>
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
            Allow yourself to our exclusive bootcamp, where aspiring
            entrepreneurs will learn about the startup business from the
            renowned founders. This event provides the ideal balance of
            networking opportunities and priceless insights as attendees gain
            firsthand knowledge from seasoned founders who have successfully
            navigated the startup setting. Establish important relationships,
            share ideas, be a part of their experiences and acquire personal
            information while you set out on an entrepreneurial adventure.
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
              <li class="event" data-date="Event">
                  <h3 className=" ">6th April 2024</h3>
                  <p className="text-xs"> 9:00 AM - 11:00 AM</p>
                  <p>Network and learn from acclaimed startup founders at this exclusive boot camp</p>
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
                  title="What is StartUp Odyssey?"
                  answer="StartUp Odyssey is an event at E-Summit 2024, organized by E-Cell, VSSUT, designed to connect aspiring entrepreneurs with well-known industrialists to learn about the startup business."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Who can participate in StartUp Odyssey?"
                  answer="StartUp Odyssey is open to anyone interested in startups and entrepreneurship, whether you're a student, entrepreneur, or professional."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="What can participants expect at StartUp Odyssey?"
                  answer="Participants can expect to network with renowned industrialists, learn from experienced startup founders, and gain insights and strategies for entrepreneurial success."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Is there a fee to attend StartUp Odyssey?"
                  answer="StartUp Odyssey is a free event as part of E-Summit 2024."
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
              {SocialTeams.lead.map((team) => (
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

export default StartupOddesy;
