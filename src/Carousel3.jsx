import React from "react";
import Slider from "react-slick";
import img22 from "./assets/img22.avif";
import img24 from "./assets/img24.avif";
import img25 from "./assets/img25.avif";
import img26 from "./assets/img26.avif";
import img23 from "./assets/img23.avif";
import { TfiTimer } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-5 py-5 W-[100%]">
        <h1 className="text-stone-950 text-2xl font-bold px-5 py-5">
          Fresh Flowers & Leaves
        </h1>

        <Slider {...settings}>
          <div className="border border-gray-800  rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img22}
              className="w-full h-full  text-center object-cover"
              alt="Amul Fresh Malai Paneer"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img23}
              className="w-full h-full  text-center object-cover"
              alt="Amul Fresh Malai Paneer"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img24}
              className="w-full h-full text-center object-cover"
              alt="Amul Fresh Malai Paneer"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img25}
              className="w-full h-full text-center object-cover"
              alt="Amul Fresh Malai Paneer"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img26}
              className="w-full h-full text-center object-cover"
              alt="Amul Fresh Malai Paneer"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px] ">
            <img
              src={img24}
              className="w-full h-full text-center object-cover"
              alt="Amul Pure Milk Cheese Slices"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img25}
              className="w-full h-full text-center object-cover"
              alt="Amul Pure Milk Cheese Slices"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px] ">
            <img
              src={img26}
              className="w-full h-full text-center object-cover"
              alt="Amul Pure Milk Cheese Slices"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img22}
              className="w-full h-full text-center object-cover"
              alt="Amul Pure Milk Cheese Slices"
            />
          </div>

          <div className="border border-gray-800 rounded-3xl overflow-hidden mx-auto h-[250px]">
            <img
              src={img23}
              className="w-full h-full text-center object-cover"
              alt="Amul Pure Milk Cheese Slices"
            />
          </div>
          {/* Repeat this block for other items */}
        </Slider>
      </div>
    </>
  );
};

export default Carousel3;
