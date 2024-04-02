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


const NetworkingLunch = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://media.licdn.com/dms/image/D5612AQFL8W1goz6qrQ/article-cover_image-shrink_720_1280/0/1679967164325?e=2147483647&v=beta&t=Naqebp4UD8aom_MsjcvSgKanFddmFuu0M1M0v0tPMJ8')] bg-no-repeat bg-center opacity-85 bg-cover mb-[100px]">
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
              <span className="green">FOOD</span>
              <br />
              <span className="white">FEST</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/events/food-fest-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-946021">REGISTER</Link></button>
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
            Experience our Culinary Adventure over the two-day summit,
            tantalizing your taste buds with a diverse array of flavors. From
            comforting classics to bold and spicy delights, we cater to every
            palate. So, arrive hungry, network with fervor, and let the E-Summit
            Food Fest be the nourishment propelling you towards greatness! Don't
            miss this opportunity to energize both your mind and body on 7th
            April from 9:00 AM to 1:00 PM and 3:00 PM to 8:00 PM as you embark
            on a journey of innovation and inspiration. Indulge in the flavors
            of success at the E-Summit, Food Fest!
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
                  <h3 className=" ">7th April 2024</h3>
                  <p className="text-xs"> 9:00 AM to 1:00 PM</p>
                  <p>Morning Session</p>
                </li>
                <li class="event" data-date="Round 2">
                  <h3>7th April 2024</h3>
                  <p className="text-xs">3:00 PM to 8:00 PM</p>
                  <p>Afternoon Session</p>
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
                  title="What is the Food Fest at E-Summit?"
                  answer="The Food Fest at E-Summit  offers attendees a diverse array of flavors and dishes to indulge in."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="When and where will the Food Fest take place?"
                  answer="The Food Fest will take place on 7th April, with a morning session from 9:00 AM to 1:00 PM and an afternoon session from 3:00 PM to 8:00 PM."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Can attendees bring outside food or drinks?"
                  answer="No, outside food or drinks are not allowed at the Food Fest. Attendees are encouraged to enjoy the culinary delights provided at the event."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Are there any rules or guidelines for attending the Food Fest?"
                  answer="Yes, attendees are expected to respect the venue and fellow attendees, adhere to designated eating areas, and dispose of waste responsibly."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Will there be opportunities for networking at the Food Fest?"
                  answer="Yes, the Food Fest provides a relaxed environment for attendees to engage in casual conversations and forge new connections over a shared meal."
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

export default NetworkingLunch;
