import React from "react";
import Faq from "../Faq.js";
import { EventTeams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaBuyNLarge, LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import "./compi.css";
import { Link } from "react-router-dom";

const CreaterCorner = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://img.freepik.com/premium-photo/two-chairs-microphones-podcast-interview-room-podcast-interview-concept-generative-ai_159242-29955.jpg?w=900')] bg-no-repeat bg-center bg-cover mb-[100px]">
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
              <span className="green">CREATOR'S</span>
              <br />
              <span className="white">CORNER</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/events/creators-corner-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943580">REGISTER</Link></button>
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
          Creators Corner is your one-stop shop for igniting your inner influencer! 
           Network with fellow creators, industry experts, and established influencers.
            Share experiences and swap tips to master the art of
           captivating storytelling, audience engagement, and platform optimization. 
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[50px]">
          {/* rules and guidelines */}

          <div className="w-full flex justify-center items-center flex-col">
            {/* <!-- The Timeline --> */}
            <div id="timeline-content">
              <h1 className="text-3xl sm:text-4xl text-white main-font2 ">Timeline</h1>

              <ul class="timeline ">
              <li class="event" data-date="event">
                  <h3 className=" ">6th April 2024</h3>
                  <p className="text-xs">1:00 PM onwards</p>
                  <p>Learn how to monetize your passion and stay ahead of the curve in the ever-evolving digital landscape.</p>
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
                  title="What is Creator's Corner at E-Summit?"
                  answer="Creator's Corner is a platform at E-Summit aimed at igniting creativity and empowering content creators to succeed in the digital landscape."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="What can participants expect at Creator's Corner?"
                  answer="Participants can expect to network with fellow creators, learn from industry experts and established influencers, and gain insights into storytelling, audience engagement, platform optimization, monetization strategies, and staying ahead in the ever-evolving digital landscape."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="When and where will Creator's Corner take place?"
                  answer="Creator's Corner will take place at E-Summit. Specific timings and locations will be communicated through official channels."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Will there be workshops or sessions at Creator's Corner?"
                  answer="Yes, there may be workshops, sessions, or panel discussions where participants can learn from industry experts and influencers."
                />
              </div>
              
            </div>
          </div>

          {/* contact */}

          <div className="flex justify-center items-center flex-wrap flex-col gap-[100px] lg:gap-0">
            <h1 className="text-white text-2xl lg:text-4xl main-font2">Contact Us</h1>
            <div className="team_container">
              {EventTeams.lead.map((team) => (
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

export default CreaterCorner;
