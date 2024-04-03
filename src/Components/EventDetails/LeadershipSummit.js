import React from "react";
import Faq from "../Faq.js";
import { PrTeams, teams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import "./compi.css";
import { Link } from "react-router-dom";


const LeadershipSummit = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://emeritus.org/in/wp-content/uploads/sites/3/2023/09/Untitled-1000-%C3%97-720-px-25.png')] bg-no-repeat bg-center opacity-85 bg-cover mb-[100px]">
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
              <span className="green">LEADERSHIP</span>
              <br />
              <span className="white">SUMMIT</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/workshops-webinars/leaderships-summit-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943578">REGISTER</Link></button>
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
            The Leadership Summit serves as a platform for experts and thought
            leaders to engage in structured conversations on various topics.
            Panel discussions offer diverse perspectives, in-depth analysis, and
            actionable insights on business trends, industry challenges, social
            issues, and technological advancements. Attendees gain valuable
            knowledge and guidance, fostering personal and professional growth
            in a dynamic and collaborative environment.
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
                <li class="event " data-date="event">
                  <h3 className=" ">7th April 2024</h3>
                  <p className="text-xs">9:00 AM - 1:00 PM</p>
                  <p className="mb-2">
                    Disscution on: <br />
                  </p>
                  <p>
                    Leadership Strategy <br /> Strategic Decision-Making <br />
                    Innovation and Creativity <br />
                    Effective Communication <br /> Team Dynamics and
                    Collaboration <br /> Ethical Leadership
                  </p>
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
                  title="What is the Leadership Summit at E-Summit?"
                  answer="The Leadership Summit at E-Summit is a platform for experts and thought leaders to engage in structured conversations on various topics related to leadership."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="When and where will the Leadership Summit take place?"
                  answer="The Leadership Summit will take place on Day 2 of E-Summit, from 9:00 AM to 1:00 PM."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Who are the speakers or panelists at the Leadership Summit?"
                  answer="The speakers and panelists at the Leadership Summit are experts and thought leaders in their respective fields, providing diverse perspectives and actionable insights."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Will there be opportunities for attendees to ask questions or participate in discussions?"
                  answer="Yes, attendees will have the opportunity to engage in structured conversations, ask questions, and participate in discussions during the panel sessions."
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
              {PrTeams.lead.map((team) => (
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

export default LeadershipSummit;
