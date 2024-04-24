import Slider from "react-slick";
import amul from "./assets/amul.avif";
import amul2 from "./assets/amul2.avif";
import { TfiTimer } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
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

  return (
    <>
      <h1 className="text-stone-950 text-2xl font-bold px-5 py-5">
        Dairy,Breads & Eggs
      </h1>
      <Slider {...settings}>
        <div className="p-1">
          <div className="border border-gray-300 rounded-xl min-w-[130px]">
            <div className="flex justify-center">
              {" "}
              <img
                src={amul}
                className="w-[120px] rounded-xl border border-green-900 "
                alt="Amul Fresh Malai Paneer"
              />
            </div>
            <div className="flex text-sm">
              <TfiTimer className="text-sm mt-1" />
              <p className="pl-2">15MINS</p>
            </div>
            <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
            <br></br>
            <h1>200gm</h1>
            <br></br>
            <div className="flex justify-between items-center p-3">
              <h1 className="font-bold ">₹88</h1>
              <button className="border border-green-600  text-green-600 font-bold p-2 px-5 rounded-xl">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Add more items like this */}

        {/* Repeat this block for other items */}
      </Slider>

      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel2;
