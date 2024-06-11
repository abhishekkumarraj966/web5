import { GrFormPrevious } from "react-icons/gr";
import React from "react";
import { GrFormNext } from "react-icons/gr";
import gl1 from "./assets/1.png";
import gl2 from "./assets/2.png";
import gl3 from "./assets/3.png";
import gl4 from "./assets/4.png";
import gl5 from "./assets/5.png";
let imagarr = [gl1, gl2, gl3,gl4, gl5, gl1]; // if you want to add some image then , gice url in this array

const CertificatesAll = ({ setIsPopupOpen, imsg, setImage }) => {
  let handleNextImage = () => {
    if (imsg === imagarr.length - 1) {
      setImage(0);
    } else {
      setImage(imsg + 1);
    }
  };

  let handlePrevImage = () => {
    if (imsg === 0) {
      setImage(imagarr.length - 1);
    } else {
      setImage(imsg - 1);
    }
  };
  return (
    <div className="h-screen w-full sm:mt-[3%] mt-[12%] bg-[#1f1c147c] fixed top-0 flex justify-center items-center z-10">
      <div
        className="text-right mt-2  text-white text-[31px] absolute right-5 top-3 cursor-pointer"
        onClick={() => setIsPopupOpen(false)}
      >
        X
      </div>

      <div className="flex w-full items-center">
        <div
          className="text-[50px]  text-white cursor-pointer z-10 absolute left-0 bg-[#00000081]"
          onClick={handlePrevImage}
        >
          <GrFormPrevious />
        </div>
        <img
          src={imagarr[imsg]}
          className="w-full transition-transform transform duration-100 hover:scale-110 h-[90%] mx-auto  lg:rounded-[1px]"
          alt="Image 1"
        />
        <div
          className="text-[50px] text-white cursor-pointer absolute z-10 right-0 bg-[#00000069]"
          onClick={handleNextImage}
        >
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};
export default CertificatesAll