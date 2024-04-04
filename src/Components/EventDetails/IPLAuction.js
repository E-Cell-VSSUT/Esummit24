import React from "react";
import { GdTeams, teams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Accordion from "../Accordion.js";
import "./compi.css";
import { Link } from "react-router-dom";

const IPLAuction = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://www.insidesport.in/wp-content/uploads/2022/02/de48ad5e-049f-4a5a-a674-9dd67f8e9fa2.jpg')] bg-no-repeat  bg-cover mb-[100px]">
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
              <span className="green">IPL</span>
              <br />
              <span className="white">AUCTION</span>
            </div>
            <div className="button ">
              <button className=""><Link className=" hover:no-underline hover:text-slate-900 " target="blank" to="https://unstop.com/events/ipl-auction-e-summit-2024-veer-surendra-sai-university-of-technology-vssut-odisha-945762">REGISTER</Link></button>
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
            Every cricket aficionado has harbored the dream of crafting their
            own IPL team, envisioning how the addition of a particular player
            could lead to victory. Now, here's your golden opportunity to turn
            that dream into reality! Join us at E-Cell, VSSUT for a thrilling
            student-based IPL auction, where you can bid for your favorite
            players and assemble the squad of your dreams for your franchise.
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
                  <p className="text-xs">2:00 pm</p>
                  <p>Teams formation of 6 to 8 members.</p>
                </li>
                <li class="event" data-date="Round 2">
                  <h3>6th April 2024</h3>
                  <p className="text-xs">2:30 pm</p>
                  <p>The bidding starts.</p>
                </li>
                <li class="event" id="date" data-date="Round 3">
                <h3>7th April 2024</h3>
                <p className="text-xs">afternoon</p>
                <p>Winners will be announced and awarded their prizes during this ceremony.</p>
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
                  title="What is the IPL Auction event at E-Summit?"
                  answer="The IPL Auction event at E-Summit is a student-based auction where participants can bid for their favorite cricket players and assemble their dream IPL team."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Who can participate in the IPL Auction"
                  answer="Only the 10 IPL participating franchises will have the opportunity to bid in the auction, namely Chennai Super Kings, Mumbai Indians, Kolkata Knight Riders, Sunrisers Hyderabad, Kings XI Punjab, Delhi Capitals, Rajasthan Royals, Royal Challengers Bangalore, Gujarat Titans, and Lucknow Super Giants."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="How does the bidding process work?"
                  answer="The bidding starts from the base price of the player, and at a time, only two teams can be involved in the bidding process. The bid increases based on the player's base price, with different increments for different price ranges."
                />
              </div>
              <div className=" py-1">
                <Accordion
                  title="Is there a salary cap for teams in the IPL Auction?"
                  answer="Yes, each team will have a salary cap of Rupees 80 crores, and participants must adhere to this cap to avoid disqualification."
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
              {GdTeams.lead.map((team) => (
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

export default IPLAuction;
