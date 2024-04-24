import React from "react";
import Navbar from "./Navbar.jsx";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.avif";
import img3 from "./assets/img3.avif";
import img4 from "./assets/img4.avif";
import pharm from "./assets/pharm.avif";
import pet from "./assets/pet.avif";
import care from "./assets/care.avif";
import img5 from "./assets/img5.avif";
import img6 from "./assets/img6.avif";
import img7 from "./assets/img7.avif";
import img8 from "./assets/img8.avif";
import img9 from "./assets/img9.avif";
import img10 from "./assets/img10.avif";
import img11 from "./assets/img11.avif";
import img12 from "./assets/img12.avif";
import img13 from "./assets/img13.avif";
import img14 from "./assets/img14.avif";
import img15 from "./assets/img15.avif";
import img16 from "./assets/img16.avif";
import img17 from "./assets/img17.avif";
import img18 from "./assets/img18.avif";
import img19 from "./assets/img19.avif";
import img20 from "./assets/img20.avif";
import img21 from "./assets/img21.avif";
import fast from "./assets/fast.avif";
import Carousel from "./Carousel.jsx";
import Carousel2 from "./Carousel2.jsx";
import Carousel3 from "./Carousel3.jsx";
import Carousel4 from "./Carousel4.jsx";
import Slider1 from "./Slider1.jsx";
import Slider2 from "./Slider2.jsx";
import Slider3 from "./Slider3.jsx";
import Slider4 from "./Slider4.jsx";
import Slider5 from "./Slider5.jsx";
import Prop from "./Prop.jsx";
import Page2 from "./Page2.jsx";
import Page5 from "./Page5.jsx";
// import Slider from "react-slick";
// import SimpleSlider from "./SimpleSlider.jsx";

const Page1 = () => {
  return (
    <>
      <Navbar />

      <div className="px-5 py-5 ">
        <img src={img1} className="w-[100%]" />
        <div className=" hidden lg:flex">
          <img src={pharm} className="w-[280px]  m-5" />
          <img src={pet} className="w-[280px]  m-5" />
          <img src={care} className="w-[280px]  m-5" />
          <img src={fast} className="w-[280px]  m-5" />
        </div>
        {/* <Page2 /> */}
        <h1 className="font-bold">Shop by Category</h1>
        <div className="flex m-5 grid lg:grid-cols-10 grid-cols-4">
          <img src={img5} className="w-[250px] " />
          <img src={img2} className="w-[250px] " />
          <img src={img3} className="w-[250px] " />
          <img src={img4} className="w-[250px] " />
          <img src={img6} className="w-[250px] " />
          <img src={img7} className="w-[250px] " />
          <img src={img8} className="w-[250px] " />
          <img src={img9} className="w-[250px] " />
          <img src={img10} className="w-[250px] " />
          <img src={img11} className="w-[250px] " />
          <img src={img12} className="w-[250px] " />
          <img src={img13} className="w-[250px] " />
          <img src={img14} className="w-[250px] " />
          <img src={img15} className="w-[250px] " />
          <img src={img16} className="w-[250px] " />
          <img src={img17} className="w-[250px] " />
          <img src={img18} className="w-[250px] " />
          <img src={img19} className="w-[250px] " />
          <img src={img20} className="w-[250px] " />
          <img src={img21} className="w-[250px] " />
        </div>
      </div>
      {/* <Carousel2 /> */}
      {/* <Carousel /> */}
      {/* <Carousel3 /> */}
      <Slider1 />
      {/* <Carousel4 /> */}
      {/* <SimpleSlider /> */}
      {/* <Prop /> */}
      {/* <Page2 /> */}
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Slider5 />
      <Page5 />
    </>
  );
};
export default Page1;
