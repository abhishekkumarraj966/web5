import React from "react";
import AppLayout from "./AppLayout";
import ct1 from "./assets/Cat1.png";
import ct2 from "./assets/Cat2.png";
import ct3 from "./assets/Cat3.png";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Categories = () => {
  return (
    <div className="" id="services">
      <AppLayout>
        <h2 className=" font-bold text-[30px] text-center">Service</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="grid sm:grid-cols-2 my-8 gap-1">
              <div className="relative text-center">
                <Link to="/categoriespage">
                  <img
                    src={ct1}
                    alt=""
                    className="w-[100%] lg:h-[600px] sm:h-[500px]"
                  />
                </Link>
                <div className="absolute bottom-[10%] left-4 text-left">
                  <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                    Juniors Set
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    <Link to="/categoriespage">Collections &rarr;</Link>
                  </button>

                  <hr className="h-0.5 bg-black w-[50%]" />
                </div>
              </div>

              <div className="flex-col gap-2">
                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct2}
                      alt=""
                      className="w-[100%] lg:h-[285px] mb-4 sm:h-[245px] sm:mb-2"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                      Men’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>

                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct3}
                      alt=""
                      className="w-[100%] lg:h-[287px] sm:h-[245px]"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className=" text-[20px] sm:text-[30px] font-semibold text-black">
                      Women’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid sm:grid-cols-2 my-8 gap-1">
              <div className="relative text-center">
                <Link to="/categoriespage">
                  <img
                    src={ct1}
                    alt=""
                    className="w-[100%] lg:h-[600px] sm:h-[500px]"
                  />
                </Link>
                <div className="absolute bottom-[10%] left-4 text-left">
                  <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                    Juniors Set
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    <Link to="/categoriespage">Collections &rarr;</Link>
                  </button>

                  <hr className="h-0.5 bg-black w-[50%]" />
                </div>
              </div>

              <div className="flex-col gap-2">
                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct2}
                      alt=""
                      className="w-[100%] lg:h-[285px] mb-4 sm:h-[245px] sm:mb-2"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                      Men’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>

                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct3}
                      alt=""
                      className="w-[100%] lg:h-[287px] sm:h-[245px]"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className=" text-[20px] sm:text-[30px] font-semibold text-black">
                      Women’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid sm:grid-cols-2 my-8 gap-1">
              <div className="relative text-center">
                <Link to="/categoriespage">
                  <img
                    src={ct1}
                    alt=""
                    className="w-[100%] lg:h-[600px] sm:h-[500px]"
                  />
                </Link>
                <div className="absolute bottom-[10%] left-4 text-left">
                  <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                    Juniors Set
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    <Link to="/categoriespage">Collections &rarr;</Link>
                  </button>

                  <hr className="h-0.5 bg-black w-[50%]" />
                </div>
              </div>

              <div className="flex-col gap-2">
                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct2}
                      alt=""
                      className="w-[100%] lg:h-[285px] mb-4 sm:h-[245px] sm:mb-2"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                      Men’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>

                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct3}
                      alt=""
                      className="w-[100%] lg:h-[287px] sm:h-[245px]"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className=" text-[20px] sm:text-[30px] font-semibold text-black">
                      Women’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid sm:grid-cols-2 my-8 gap-1">
              <div className="relative text-center">
                <Link to="/categoriespage">
                  <img
                    src={ct1}
                    alt=""
                    className="w-[100%] lg:h-[600px] sm:h-[500px]"
                  />
                </Link>
                <div className="absolute bottom-[10%] left-4 text-left">
                  <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                    Juniors Set
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    <Link to="/categoriespage">Collections &rarr;</Link>
                  </button>

                  <hr className="h-0.5 bg-black w-[50%]" />
                </div>
              </div>

              <div className="flex-col gap-2">
                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct2}
                      alt=""
                      className="w-[100%] lg:h-[285px] mb-4 sm:h-[245px] sm:mb-2"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                      Men’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>

                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct3}
                      alt=""
                      className="w-[100%] lg:h-[287px] sm:h-[245px]"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className=" text-[20px] sm:text-[30px] font-semibold text-black">
                      Women’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="grid sm:grid-cols-2 my-8 gap-1">
              <div className="relative text-center">
                <Link to="/categoriespage">
                  <img
                    src={ct1}
                    alt=""
                    className="w-[100%] lg:h-[600px] sm:h-[500px]"
                  />
                </Link>
                <div className="absolute bottom-[10%] left-4 text-left">
                  <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                    Juniors Set
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    <Link to="/categoriespage">Collections &rarr;</Link>
                  </button>

                  <hr className="h-0.5 bg-black w-[50%]" />
                </div>
              </div>

              <div className="flex-col gap-2">
                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct2}
                      alt=""
                      className="w-[100%] lg:h-[285px] mb-4 sm:h-[245px] sm:mb-2"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                      Men’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>

                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct3}
                      alt=""
                      className="w-[100%] lg:h-[287px] sm:h-[245px]"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className=" text-[20px] sm:text-[30px] font-semibold text-black">
                      Women’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid sm:grid-cols-2 my-8 gap-1">
              <div className="relative text-center">
                <Link to="/categoriespage">
                  <img
                    src={ct1}
                    alt=""
                    className="w-[100%] lg:h-[600px] sm:h-[500px]"
                  />
                </Link>
                <div className="absolute bottom-[10%] left-4 text-left">
                  <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                    Juniors Set
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                    <Link to="/categoriespage">Collections &rarr;</Link>
                  </button>

                  <hr className="h-0.5 bg-black w-[50%]" />
                </div>
              </div>

              <div className="flex-col gap-2">
                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct2}
                      alt=""
                      className="w-[100%] lg:h-[285px] mb-4 sm:h-[245px] sm:mb-2"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className="text-[20px] sm:text-[30px] font-semibold text-black">
                      Men’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>

                <div className="relative text-center">
                  <Link to="/categoriespage">
                    <img
                      src={ct3}
                      alt=""
                      className="w-[100%] lg:h-[287px] sm:h-[245px]"
                    />
                  </Link>
                  <div className="absolute bottom-[10%] left-4 text-left">
                    <h1 className=" text-[20px] sm:text-[30px] font-semibold text-black">
                      Women’s Set
                    </h1>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
                      <Link to="/categoriespage">Collections &rarr;</Link>
                    </button>
                    <hr className="h-0.5 bg-black w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </AppLayout>
    </div>
  );
};

export default Categories;
