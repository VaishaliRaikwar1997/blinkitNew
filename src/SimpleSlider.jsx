import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
          className="w-[100%] rounded-xl ml-5"
        />
        <h3>1</h3>
      </div>
      <div>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
          className="w-[100%] rounded-xl ml-5"
        />
        <h3>2</h3>
      </div>
      <div>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
          className="w-[100%] rounded-xl ml-5"
        />
        <h3>3</h3>
      </div>
      <div>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
          className="w-[100%] rounded-xl ml-5"
        />
        <h3>4</h3>
      </div>
      <div>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
          className="w-[100%] rounded-xl ml-5"
        />
        <h3>5</h3>
      </div>
      <div>
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
          className="w-[100%] rounded-xl ml-5"
        />
        <h3>6</h3>
      </div>
    </Slider>
  );
}
