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


const IdeathonPitch = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://miro.medium.com/v2/resize:fit:2000/1*gT814ZbgAr4ts-KXq03eQA.jpeg')] bg-no-repeat bg-center opacity-100 bg-cover mb-[100px]">
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
              <span className="green">IDEATHON</span>
              <br />
              <span className="white">PITCH</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/competitions/ideathon-pitch-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943323">REGISTER</Link></button>
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
            Welcome to the dynamic Ideathon, where aspiring innovators converge
            to ideate, innovate, and inspire. This immersive event provides a
            platform for undergraduate and graduate students to unleash their
            creativity, tackle pressing challenges, and transform bold ideas
            into tangible solutions. Participants have the opportunity to apply
            their academic knowledge in a practical setting, receive
            constructive feedback from industry experts, and collaborate with
            peers from diverse backgrounds.
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
              <li class="event" data-date="Round 1">
                  <h3 className=" ">6th April 2024</h3>
                  <p className="text-xs">9:00 AM - onwards</p>
                  <p>Teams formation, Problem Statement Reveal & Ideation.</p>
                </li>
                <li class="event" data-date="Round 2">
                  <h3>7th April 2024</h3>
                  <p className="text-xs">9:00 AM - 2:00 pm</p>
                  <p>Practice Pitches & Feedback.</p>
                </li>
                <li class="event" id="date" data-date="Round 3">
                <h3>7th April 2024</h3>
                <p className="text-xs">after 2:00 pm</p>
                <p>Final Pitches & Awards Ceremony</p>
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
                  title="What is Ideathon at E-Summit?"
                  answer="Ideathon is an event where undergraduate and graduate students come together to ideate, innovate, and inspire, transforming bold ideas into tangible solutions."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Are there any specific rules or guidelines participants should be aware of?"
                  answer="All team members must be present during the final pitch, presentations must adhere to allocated time limits, ethical and legal business practices must be demonstrated, and plagiarism of existing business models or ideas will result in disqualification."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="What resources and support will be provided to participants?"
                  answer="Participants may receive a list of resources or templates (e.g., Business Model Canvas) to assist them, and mentors will be available throughout the event to offer guidance and support."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="How can participants make the most of their experience at Ideathon?"
                  answer="Participants are encouraged to be creative, collaborative, and passionate about innovation, and to fully engage in all activities and mentorship sessions to maximize their learning and networking opportunities."
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

export default IdeathonPitch;
