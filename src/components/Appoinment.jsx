import React from "react";
import AppLayout from "./AppLayout";

const Appoinment = () => {
  return (
    <div className="bg-[#F3F5F7] mb-4 pb-2">
      <AppLayout>
        <p className="text-center font-bold text-[35px] text-[#000] pt-2 pb-6 ">
          Appointment
        </p>
        <div className=" p6-10 rounded  bg-[#151D09] pt-6">
          <div className="w-[90%] sm:w-[85%] lg:w-[80%]   sm:h-[100%]  items-center rounded-[10px]  lg:flex gap-2 justify-around mx-auto mt-[30px]  pb-20">
            <div className="">
              <p className="font-bold text-[10px]  sm:text-[20px]  text-[#248157]">
                Name
              </p>
              <input
                type="text"
                placeholder="name"
                className="font-bold text-[13px]  sm:text-[18px] w-[100%]  h-[30px]  sm:h-[40px] lg:h-[40px] bg-[#fff] rounded-[5px] px-3 text-black"
              />
            </div>
            <div className=" pt-4 lg:pt-0">
              <p className="font-bold text-[10px] sm:text-[20px]  text-[#248157] ">
                Contact No.
              </p>
              <input
                type="Text"
                placeholder="Mobile no."
                className="font-bold text-[13px]  sm:text-[18px]  w-[100%]  h-[30px] sm:h-[40px] lg:h-[40px] bg-[#fff] rounded-[5px] px-3 text-black"
              />
            </div>
            <div className=" pt-4 lg:pt-0">
              <p className="font-bold text-[10px] sm:text-[20px]  text-[#248157] ">
                Date
              </p>
              <input
                type="date"
                placeholder="Date"
                className="font-bold text-[13px]  sm:text-[18px]  w-[100%]  h-[30px] sm:h-[40px] lg:h-[40px] bg-[#fff] rounded-[5px] px-3 text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-[#38CB89] sm:w-[30%]  text-white rounded-md py-2 px-3 mt-7 font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Appoinment;
