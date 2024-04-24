// import React from "react";
// import Page1 from "./Page1";

// const Page2 = () => {
//   return (
//     <div className="px-4">
//       <div className="mt-5">
//         <img
//           src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-02/android_feed_mweb-1.png"
//           className="w-100%"
//         ></img>
//       </div>

//       <Slider {...settings}>
//         <div className="flex">
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/toys-store_1.png"
//             >
//               Toy Store
//             </img>
//           </div>
//           <div>
//             {" "}
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/pet-store.png"
//             >
//               Pet Store
//             </img>
//           </div>
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/stationery-store.png"
//             >
//               Stationary Store
//             </img>
//           </div>
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/kid-store_0.png"
//             >
//               Kids Store
//             </img>
//           </div>
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/health-store.png"
//             >
//               Health Store
//             </img>
//           </div>
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/beauty-store.png"
//             >
//               Beauty Store
//             </img>
//           </div>
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/print-store_new_0.png"
//             >
//               Print Store
//             </img>
//           </div>
//           <div>
//             <img
//               className="mt-5"
//               src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/electrics-store.png"
//             >
//               Electronic Store
//             </img>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Page2;

import React from "react";
import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme CSS

const Page2 = () => {
  // Settings for the Slider component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="px-4">
      <div className="mt-5">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-02/android_feed_mweb-1.png"
          className="w-100%"
          alt="Image"
        />
      </div>

      {/* Slider component */}
      <Slider {...settings}>
        {/* Slides */}
        <div>
          <img
            className="mt-5"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/toys-store_1.png"
            alt="Toy Store"
          />
          Toy Store
        </div>
        <div>
          <img
            className="mt-5"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/pet-store.png"
            alt="Pet Store"
          />
          Pet Store
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default Page2;
