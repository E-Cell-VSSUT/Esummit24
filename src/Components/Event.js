import React from "react";
import "../styles.css";
import { events } from "../constants";
import { Link,useNavigate } from "react-router-dom";

const Event = () => {
  const navigate=useNavigate();
  const handleRegister=()=>{
    navigate('./SignUp')
  }
  const handleLogin=()=>{
    navigate('./LogIn')
  }
  return (
    <div className="flex flex-col justify-center items-center pt-[100px] pb-[100px] gap-10">
      <h1 className="text-white text-2xl xl:text-5xl">Events</h1>

      <div
      
        className="  flex flex-wrap justify-center items-center gap-5 ml-[15%] mr-[15%]"
      >
        {events?.map((item) => (

          <div className="ec">
            <img alt={item.id} className="img" src={item.logo} />
            <p class="title">{item.title}</p>

            <div className="econ">
              <p>{item.content}</p>
              <div className="flex justify-center items-center gap-5">
                <div className="flex event-button justify-center items-center gap-5 bg-[#1a56db] text-white text-[13px] w-[100px] h-[40px] rounded-lg cursor-pointer" onClick={handleRegister}>
                 <a className="font-semibold hover:no-underline hover:text-neutral-50" > Register</a>
                </div>
                <div className="flex event-button justify-center items-center gap-5 bg-[#1a56db] text-white text-[13px] w-[100px] h-[40px] rounded-lg cursor-pointer">
                  <Link className="font-semibold hover:no-underline hover:text-neutral-50" to='/compi' >Event Details</Link>
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
