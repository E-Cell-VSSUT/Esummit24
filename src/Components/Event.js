import React from "react";
import "../styles.css";
import { events } from "../constants";
const Event = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px] gap-10">
      <h1 className="text-white text-2xl xl:text-5xl">Events</h1>

      <div
      
        className="flex flex-wrap justify-center items-center gap-5 ml-[15%] mr-[15%]"
      >
        {events?.map((item) => (
          <div className="card">
            <img alt={item.id} className="img" src={item.logo} />
            <p class="title">{item.title}</p>

            <div className="content">
              <p>{item.content}</p>
              <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-5 bg-[#5190cf] text-white text-[13px] w-[80px] h-[40px] rounded-lg cursor-pointer">
                  Register
                </div>
                <div className="flex justify-center items-center gap-5 bg-[#5190cf] text-white text-[13px] w-[100px] h-[40px] rounded-lg cursor-pointer">
                  Event Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
