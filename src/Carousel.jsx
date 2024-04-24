import React, { useState } from "react";
import Slider from "react-slick";
import { TfiTimer } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toy from "./assets/toy.avif";
import toy2 from "./assets/toy2.avif";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    { id: 1, src: toy },
    { id: 2, src: toy2 },
    { id: 3, src: toy },
    { id: 4, src: toy2 },
    { id: 5, src: toy },
    { id: 6, src: toy2 },
    { id: 7, src: toy },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
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
  //   slidesToScroll: 1,
  //   beforeChange: (current, next) => setCurrentIndex(next),
  // };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div className="md:hidden text-center p-5 m-5">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={item.id} className="carousel-item">
            <img
              src={item.src}
              className="rounded-box"
              alt={`Item ${item.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
