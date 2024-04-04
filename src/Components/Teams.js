import "../styles.css";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";

import { TechTeams,GdTeams,PrTeams,EventTeams,SponsorTeams,CoordinatorTeams,SocialTeams } from "../constants";

const Teams = () => {
  return (
    <div className="flex pb-12 css-selector flex-col justify-center items-center h-full w-full gap-10 bg-gradient-to-br from-black-93 via-gray-800 to-gray-800">
      <h1 className="text-2xl xl:text-5xl text-white mt-[9rem] main-font2">
          The Team
        </h1>
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl xl:text-4xl text-white main-font2">
        For any Website and Technical Queries
        </h1>
        <div className="team_container">
          {TechTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font ">{team.name}</div>
              <div class="secname main-font ">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl main-font xl:text-4xl text-white main-font2">
        For any Speaker related Queries
        </h1>
        <div className="team_container">
          {PrTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font">{team.name}</div>
              <div class="secname main-font">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl main-font2 xl:text-4xl text-white">
        For any Events realted Queries
        </h1>
        <div className="team_container">
          {EventTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font">{team.name}</div>
              <div class="secname main-font">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl main-font2 xl:text-4xl text-white">
        For any Media related Queries
        </h1>
        <div className="team_container">
          {SocialTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font">{team.name}</div>
              <div class="secname main-font">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl main-font2 xl:text-4xl text-white">
        For any Sponsorship related Queries
        </h1>
        <div className="team_container">
          {SponsorTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font">{team.name}</div>
              <div class="secname main-font">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl main-font2 xl:text-4xl text-white">
        For any Design related Queries
        </h1>
        <div className="team_container">
          {GdTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font">{team.name}</div>
              <div class="secname main-font">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[15px] ">
        <h1 className="text-2xl main-font2 xl:text-4xl text-white">
        Organisers
        </h1>
        <div className="team_container">
          {CoordinatorTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name main-font">{team.name}</div>
              <div class="secname main-font">{team.name}</div>
              <div class="about main-font1">{team.designation}</div>
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
  );
};

export default Teams;
