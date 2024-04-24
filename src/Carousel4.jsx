import React from "react";
import Slider from "react-slick";
import amul from "./assets/amul.avif";
import amul2 from "./assets/amul2.avif";
import { TfiTimer } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel4 = () => {
  const settings = {
    dots: true,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-5 py-5">
        <h1 className="text-stone-950 text-2xl font-bold px-5 py-5">
          Dairy,Breads & Eggs
        </h1>
        <div className="px-5 py-5 w-full ">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/layout-engine/2024-04/Home-Makeover-Sale-Header.jpg"
            className="w-[100%]"
          />
        </div>

        <div className="flex gap-4 rounded-xl px-4 w-full ">
          <div>
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Sparkling-Bathrooms.png"
              className="w-[100%] rounded-xl"
            />
          </div>
          <div>
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Revamp-your-space.png"
              className="w-[100%] rounded-xl"
            />
          </div>
          <div>
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-04/Chef-Style-Kitchens.png"
              className="w-[100%] rounded-xl"
            />
          </div>
        </div>

        <Slider {...settings}>
          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="border border-gray-300 rounded-xl pl-3">
              <img
                src={amul}
                className="w-48 h-36 rounded-xl"
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br />
              <h1>200gm</h1>
              <br />
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
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

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className=" border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>

              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between justify-items-stretch p-3">
                <h1 className="font-bold ">₹88</h1>
                <button className="border border-green-600  text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
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

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
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

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
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

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
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

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3 ">
              <img
                src={amul}
                className="w-[200px] h-[150px] rounded-xl "
                alt="Amul Fresh Malai Paneer"
              />
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

          <div className="p-2">
            <div className="border border-gray-300 rounded-xl pl-3  ">
              <img
                src={amul2}
                className="w-[200px] h-[150px] rounded-xl  "
                alt="Amul Fresh Malai Paneer"
              />
              <div className="flex text-sm">
                <TfiTimer className="text-sm mt-1" />
                <p className="pl-2">15MINS</p>
              </div>
              <h1 className="font-bold mt-2">Amul Fresh Malai Paneer</h1>
              <br></br>
              <h1>200gm</h1>
              <br></br>
              <div className="flex justify-between items-center p-3">
                <h1 className="font-bold">₹88</h1>
                <button className="border border-green-600 text-green-600 font-bold p-2 px-5 rounded-xl">
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Add more items like this */}

          {/* Repeat this block for other items */}
        </Slider>
      </div>
    </>
  );
};

export default Carousel4;
