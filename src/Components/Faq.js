import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className=" w-[70%] h-full p-10 gap-4 border-4 border-[#354b6c]  rounded-xl decoration-0 ">

       <div className=" py-1">
       <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
       </div>
       <div className=" py-1">
       <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
       </div>
       <div className=" py-1">
       <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
       </div>
       <div className=" py-1">
       <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
       </div>
       <div className=" py-1">
       <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
       </div>
    </div>
    
  );
};

export default Faq;