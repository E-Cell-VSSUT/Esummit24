import "../styles.css";

import { teams } from "../constants";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";

const Teams = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-10">
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full mt-[150px] ">
        <h1 className="text-2xl xl:text-5xl text-white">
          For any Media related Queries
        </h1>
        <div className="team_container">
          {teams.lead.map((team) => (
            <div class="wrapper ">
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full">
      <h1 className="text-2xl xl:text-5xl text-white">
          For any Media related Queries
        </h1>
        <div className="team_container">
          {teams.lead.map((team) => (
            <div class="wrapper ">
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full">
      <h1 className="text-2xl xl:text-5xl text-white">
          For any Media related Queries
        </h1>
        <div className="team_container">
          {teams.lead.map((team) => (
            <div class="wrapper ">
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


      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full">
         <h1 className="text-2xl xl:text-5xl text-white">
          For any Media related Queries
        </h1>
        <div className="team_container">
          {teams.lead.map((team) => (
            <div class="wrapper ">
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

      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 w-full">
      <h1 className="text-2xl xl:text-5xl text-white">
          For any Media related Queries
        </h1>
        <div className="team_container">
          {teams.lead.map((team) => (
            <div class="wrapper ">
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
  );
};

export default Teams;
