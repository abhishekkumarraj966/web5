import React from "react";
import fac from "./assets/facebook.png";
import what from "./assets/whatsapp.png";
import inst from "./assets/instagram.png";
import you from "./assets/youtube.png";
import QR from "./assets/QR.jpeg";
import AppLayout from "./AppLayout";
const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#121212] text-[#34B47A] h-auto">
        <AppLayout>
          <div class="grid grid-cols-1 sm:grid-cols-3  gap-4">
            <div className="lg:mb-0 mt-10 lg:mt-10 mx-5 sm:mx-0">
              <p className="mb-3 text-[20Px] font-bold ">ABOUT US</p>
              <p className="mb-3 text-[20Px] font-bold ">CONTACT US</p>
              <p className="mb-3 text-[20Px] font-bold ">TERMS & CONDITIONS</p>
              <p className="mb-3 text-[20Px] font-bold ">PRIVACY POLICY</p>
            </div>

            <div className=" lg:mt-24 sm:mt-24 text-center mt-4">
              <div className="ml-[27%]">
                <img
                  src={QR}
                  alt="QR"
                  className="m-2 h-[120px] w-[#130px] pb-5 "
                />
              </div>
            </div>

            <div className=" mb-2 sm:mb-8 lg:mb-0  lg:mt-10 mx-5 sm:mx-0 ">
              <p className="mb-4 text-[22Px] font-semibold  pt-12 ">
                CONNECT WITH US
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium ">
                <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
                  <img
                    src={what}
                    alt="whatsAAp logo"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                  <img
                    src={fac}
                    alt="facebook logo"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                  <img
                    src={inst}
                    alt="insta"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                  <img
                    src={you}
                    alt="youtube"
                    className="w-[25px] lg:w-[32px] sm:w-[25px] sm:h-[25px] h-[25px] lg:h-[32px]"
                  />
                </span>
              </ul>
            </div>
          </div>

          <hr className="my-1 bg-black text-black" />
          <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 mb-1">
            <div className="mt-4 md:mt-0">
              <p className="text-sm font-medium text-center ">
                © 2023 DevUI. All rights anyintech.
              </p>
            </div>
          </div>
        </AppLayout>
      </footer>
    </div>
  );
};

export default Footer;
