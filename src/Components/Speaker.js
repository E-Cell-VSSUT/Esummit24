import React from "react";
import { teams } from "../constants";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";

const Speaker = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw"></div>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex justify-center items-center flex-wrap pl-[10px] pr-[10px]  ">
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 hover:dark:text-gray-300 ml-[5%] mr-[5%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vitae,
            cumque reprehenderit molestias quaerat odio culpa. Ratione
            perferendis, a fugit, eaque doloribus ab maxime totam voluptatem
            ipsam, animi unde. Iste tempora nobis rem dolores, a ullam
            consequatur optio nihil dignissimos.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Our Speakers</h1>

          <div className="flex justify-center items-center flex-wrap gap-10 ml-[10%] mr-[10%]">
            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation ">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 flex-wrap mb-[100px]">
              <div className="speaker-card">
                <img
                  alt=""
                  src="https://2k21.s3.amazonaws.com/ourspeakers/Radhika_Bajoria-removebg-preview.png"
                />
                <div class="details">
                  <p class="name">Radhika Bajoria</p>
                  <p class="designation">Founder, Radically Yours</p>
                </div>
              </div>
            </div>

            </div>
            {/* contact */}

            <div className="flex justify-center items-center flex-wrap flex-col gap-[100px] lg:gap-0">
              <h1 className="text-white text-2xl lg:text-5xl">Contact Us</h1>
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
      </div>
    </div>
  );
};

export default Speaker;
