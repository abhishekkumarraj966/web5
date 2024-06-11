import React from "react";
import AppLayout from "./AppLayout";
import man from "./assets/Profile.png";

import what from "./assets/whatsapp.png";
import fac from "./assets/facebook.png";
import you from "./assets/youtube.png";
import inst from "./assets/instagram.png";
import amo from "./assets/Amazon.png";
import big from "./assets/bigbasket.png";
import im from "./assets/Ebay.png";
import link from "./assets/linkedin.png";
import flip from "./assets/flipkart.png";
import Xi from "./assets/x.png";
import sw from "./assets/Swiggy (1).png";
import zo from "./assets/zomato.png";
import me from "./assets/indiamart.png";
import ju from "./assets/Justdial.png";
const Hero = () => {
  return (
    <AppLayout>
      <div
        class="grid  sm:grid-cols-3  gap-2  h-full my-[5%] bg-[#D9D9D9] rounded-md drop-shadow-xl "
        id="about"
      >
        <div class=" p-1 ">
          <div className=" mt-2 sm:mt-[55px]  lg:ml-16  sm:ml-[0px] example2">
            <img
              src={man}
              className="rounded-full lg:h-[150px] sm:h-[150px] sm:w-[180px] lg:w-[170px] h-[140px] w-[150px]  lg:pr-5 sm:pr-6 mx-auto"
              alt=""
            />
          </div>
        </div>
        <div class="  sm:col-span-2 p-4  sm:mt-[30px] lg:ml-[-100px]">
          <p className="lg:h-[237px]  h-[110px]   lg:text-[24px] sm:text-[20px] text-[18px] font-normal">
            “It is a long established fact that a reader will be tracked
            distracted by the readable content of a page is when looking at its
            layout. The point of using Lorem of distribution it look like
            readable English “
          </p>
        </div>
        <div className=" ml-2 mt-5 md:hidden block   pb-10 sm:ml-[50%]">
          <div className="flex gap-2 pb-1 mx-[5%] sm:mx-2 sm:gap-4">
            <img
              src={what}
              alt="facebook logo"
              className="h-[40px] w-[38px]  "
            />
            <img src={fac} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={you} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img
              src={inst}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img src={amo} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={big} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={Xi} alt="facebook logo" className="h-[40px] w-[38px] " />
          </div>
       
          <div className="flex gap-2 pt-2 mx-[5%] sm:mx-2 sm:gap-4">
            <img src={im} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img
              src={link}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img
              src={flip}
              alt="facebook logo"
              className="h-[40px] w-[38px] "
            />
            <img src={sw} alt="facebook logo" className="h-[40px] w-[38px] " />
            <img src={zo} alt="facebook logo" className="h-[40px] w-[60px] " />
            <img src={me} alt="facebook logo" className="h-[40px] w-[60px] " />
            <img src={ju} alt="facebook logo" className="h-[40px] w-[60px] " />
          </div>
        </div>

        <div className="items-center mt-[-18%]   mb-4 mx-[15%] hidden md:block">
          <ul className="flex gap-[10px] lg:gap-[15px] px-4">
            <img src={what} className="h-[50px] w-[50px] " alt="whataap" />
            <img src={fac} alt="facbook" className="h-[45px] w-[45px] mt-1" />
            <img
              src={inst}
              alt="instagram"
              className="h-[50px] w-[50px] mt-1"
            />
            <img
              src={you}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[60px] mt-1"
            />
            <img src={flip} alt="youtube" className="h-[60px] w-[60px]" />
            <img src={big} alt="youtube" className="h-[55px] w-[60px] mt-1" />
            <img src={im} alt="youtube" className="h-[50px] w-[70px] mt-1 " />
            <img src={amo} alt="youtube" className="h-[40px] w-[50px] mt-2" />
            <img src={Xi} alt="youtube" className="h-[50px] w-[50px] mt-1 " />
            <img src={link} alt="youtube" className="h-[55px] w-[50px] mt-1" />
            <img src={sw} alt="youtube" className="h-[50px] w-[50px]" />
            <img src={zo} alt="youtube" className="h-[60px] w-[70px]" />
            <img
              src={me}
              alt="youtube"
              className="h-[50px] w-[50px] md:w-[70px]"
            />
            <img src={ju} alt="youtube" className="h-[60px] w-[70px]" />
          </ul>
        </div>
      </div>
    </AppLayout>
  );
};

export default Hero;
