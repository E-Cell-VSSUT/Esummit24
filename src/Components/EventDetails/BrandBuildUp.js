import React from "react";
import { SponsorTeams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import { Link } from "react-router-dom";
import "./compi.css";

const BrandBuildUp = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://ied.eu/wp-content/uploads/2018/05/brand.png')]  bg-no-repeat bg-center bg-cover mb-[100px]">
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
              <span className="green">BRAND</span>
              <br />
              <span className="white">IT UP</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/competitions/brand-it-up-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-943567">REGISTER</Link></button>
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
            Brand It Up is a 24-hour social media marketing competition where
            teams will be tasked with developing a winning campaign for a real
            product from a well-known brand from the ground up. Throughout the
            24-hour timeframe, teams will utilize their social media savvy to
            create engaging content, in the form of
            posters/videos/slogans/hashtags etc strategically target their
            audience, and generate maximum reach for the assigned product.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[50px]">
          {/* rules and guidelines */}

          <div className="w-full flex justify-center items-center flex-col ml-[70px]">
            {/* <!-- The Timeline --> */}
            <div id="timeline-content">
              <h1 className="text-3xl main-font2 sm:text-4xl text-white mr-[70px] ">
                Timeline
              </h1>

              <ul class="timeline ">
                <li class="event" data-date="Round 1">
                  <h3 className=" ">6th April 2024</h3>
                  <p className="text-xs">11:30 AM - 1:00 PM</p>
                  <p>Teams formation of 1 to 4 members.</p>
                </li>
                <li class="event" data-date="Round 2">
                  <h3>6th -7th April 2024</h3>
                  <p className="text-xs">11 AM on the 6th - 09 AM on the 7th</p>
                  <p>
                    teams will have 22 hours to develop and execute their social
                    media campaign.
                  </p>
                </li>
                <li class="event" id="date" data-date="Round 3">
                  <h3>7th April 2024</h3>
                  <p className="text-xs">afternoon</p>
                  <p>
                    Winners will be announced and awarded their prizes during
                    this ceremony.
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
                  title="What is Brand It Up at E-Summit?"
                  answer="Brand It Up is a 24-hour social media marketing competition where teams develop a winning campaign for a real product from a well-known brand, focusing on visual identity, messaging, storytelling, and customer experiences."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="How are teams formed for Brand It Up?"
                  answer="Teams must consist of 1 to 4 members and can be formed spontaneously on the day of the E-Summit."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="What are the evaluation criteria for Brand It Up?"
                  answer="The success of each team will be evaluated based on the reach, engagement, and popularity of their social media posts, including likes, shares, comments, and overall visibility."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Are there any specific rules or guidelines participants should be aware of?"
                  answer="Participants must adhere to rules regarding team formation, product ideation, branding process, social media marketing, fair play, and prize distribution. Plagiarism or unethical behavior will result in disqualification."
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

export default BrandBuildUp;
