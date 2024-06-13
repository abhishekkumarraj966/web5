import React from "react";
import rev from "./assets/Rev.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Feedbackmock from "./MockData/Feedbackmock";
import AppLayout from "./AppLayout";
const Reviews = () => {
  return (
    <AppLayout>
    <div className="my-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="md:ml-[10%] mb-[-75%] sm:mb-[0%]">
          <img src={rev} alt=""  className=" sm:h-[403px] rounded-md "/>
        </div>
        <div className="">
          <div className="bg-black ml-[-2%] rounded-md sm:h-[400px]">
            <h2 className="text-[30px] text-white font-bold  ml-[6%] ">Reviews</h2>
            <div className="  sm:h-[300px] pb-[10px] lg:mt-[10%]">
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
                modules={[Navigation]}
                navigation
                className="mySwiper"
              >
                {Feedbackmock.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className=" my-2 h-[300px] w-[100%]  text-[#38CB89] rounded-xl  px-10 ">
                      <h1 className="pt-2 px-3 text-[15px] font-sans">
                        {item.content}
                      </h1>
                      <div className="sm:pt-4 pt-[-8px] sm:pl-[170px] pl-[120px]">
                        <h1 className="text-[16px] font-semibold sm:pl-10 pl-6 pb-2">
                          -{item.author}
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppLayout>
  );
};

export default Reviews;
