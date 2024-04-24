import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slider4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    { id: 1, src:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-04/1440X525-1.jpg" },
    { id: 2, src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-04/RAW_1440x525.jpg" },
    { id: 3, src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-04/RAW_1440x525.jpg"},
    { id: 4, src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-04/RAW_1440x525.jpg" },
    { id: 5, src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-01/1440x525-2-1.jpg" },
    { id: 6, src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-04/RAW_1440x525.jpg" },
    { id: 7, src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-04/RAW_1440x525.jpg"},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
              className="rounded-box w-[100%]"
              alt={`Item ${item.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider4;
