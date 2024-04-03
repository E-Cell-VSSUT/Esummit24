import React from "react";
import Faq from "../Faq.js";
import { SponsorTeams, teams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import "./compi.css";
import { Link } from "react-router-dom";


const TraderCamp = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://media.licdn.com/dms/image/C4E12AQHevIUkqrZd1g/article-cover_image-shrink_720_1280/0/1594068414514?e=2147483647&v=beta&t=WCNQ-ftzVUVKgUaAR9YjA1hUVpyrDLJP7NE9hV8vLvE')] bg-no-repeat bg-center  bg-cover mb-[100px]">
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
              <span className="green">TREDERS'</span>
              <br />
              <span className="white">BOOTCAMP</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/events/traders-bootcamp-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943575">REGISTER</Link></button>
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
            Experience the heart of market action without the risk. Master
            trading strategies, test your instincts, and compete in a dynamic
            simulated environment. Join us for an exhilarating journey where you
            can hone your trading skills, build valuable connections, and
            unleash your potential in a safe and controlled setting.
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
                  <h3 className=" ">6th April 2024</h3>
                  <p className="text-xs">2:00 PM - 4:30 PM</p>
                  <p>Put your knowledge into practice through simulated trading sessions.</p>
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
                  title="What is Trader's Bootcamp?"
                  answer="Trader's Bootcamp is an event at E-Summit 2024, conducted by E-Cell, VSSUT, designed to help participants enhance their trading skills through simulated trading sessions."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Who can participate in Trader's Bootcamp?"
                  answer="Trader's Bootcamp is open to anyone interested in trading, whether you're a beginner looking to learn or an experienced trader wanting to refine your skills."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Do I need prior trading experience to attend Trader's Bootcamp?"
                  answer="No, Trader's Bootcamp is suitable for all skill levels. Whether you're new to trading or have some experience, you can benefit from this event."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="What will I learn at Trader's Bootcamp?"
                  answer="At Trader's Bootcamp, you will learn trading strategies, test your instincts, and participate in simulated trading sessions to gain practical experience."
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
              {SponsorTeams.lead.map((team) => (
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

export default TraderCamp;
