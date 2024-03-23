import React from "react";
import Faq from '../Faq.js'
import { teams } from "../../constants/index.js";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import './compi.css'

const Competitions = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw]"></div>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex justify-center items-center flex-wrap pl-[10px] pr-[10px]">
          <p className="text-sm sm:4xl text-white ml-[10%] mr-[10%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est vitae,
            cumque reprehenderit molestias quaerat odio culpa. Ratione
            perferendis, a fugit, eaque doloribus ab maxime totam voluptatem
            ipsam, animi unde. Iste tempora nobis rem dolores, a ullam
            consequatur optio nihil dignissimos.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[50px]">

{/* rules and guidelines */}

            <div className="w-full flex justify-center items-center flex-col">
                
            {/* <!-- The Timeline --> */}
            <div id="timeline-content">
            <h1 className="text-3xl sm:text-4xl text-white ">Timeline</h1>

  <ul class="timeline">
    <li class="event" data-date="65Million B.C.">
      <h3>Dinosaurs Roamed the Earth</h3>
      <p>RAWWWWWWRRR 🐢🦂</p>
    </li>
    <li class="event" data-date="2005">
      <h3>Creative Component Launched</h3>
      <p>"We can be all things to all people!" 📣</p>    
    </li>
    <li class="event" id="date" data-date="2009">
      <h3>Squareflair was Born</h3>
      <p></p> <p>"We can be all things to Squarespace users!" 📣</p>    
    </li>
    
    <li class="event" data-date="2021">
      
      <h3>Squareflair Today</h3>
      
      <p>"We design and build from scratch!" 📣</p> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
<p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br />🤜💥🤛</p>
      
      <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
      
<p><a href="https://www.squareflair.com">squareflair.com</a></p>
    </li>
  </ul>
</div>

            </div>

{/* faq */}
            <div className="w-[100vw] flex flex-col justify-center items-center gap-5 decoration-0">
            <h1 className="text-3xl sm:text-4xl text-white ">FAQs</h1>
                <Faq />
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

export default Competitions;
