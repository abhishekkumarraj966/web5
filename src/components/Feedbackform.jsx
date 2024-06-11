import React from "react";
import AppLayout from "./AppLayout";

const Feedbackform = () => {
  return (
    <div className=" bg-[#F3F5F7] py-[15px] my-8  ">
      <AppLayout>
      <h2 className="font-bold text-[30px]  text-start pb-6  text-black ">
            Feedback form
          </h2>
        <div className="p-4 mx-auto sm:mx-20 w-[80%] bg-[#151D09] rounded-xl ">
         
          <p className="text-[#248157]">Name</p>
          <input
            type="text"
            placeholder="Name"
            className=" w-[100%] rounded-md h-8 py-1 px-2 mt-1"
          />
          <p className="text-[#248157] mt-5">Feedback</p>
          <input
            type="text"
            placeholder="Type your message..."
            className=" w-[100%]  rounded-md h-14 lg:h-24 px-2 mt-1 "
          />
          <br/>
          <button
            type="submit"
            className="bg-[#38CB89] sm:w-[30%]  text-white rounded-md py-2 px-3 mt-4 font-medium"
          >
            Submit
          </button>
        </div>
      </AppLayout>
    </div>
  );
};

export default Feedbackform;
