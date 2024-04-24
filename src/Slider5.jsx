function Slider5() {
    const cardData5 = [
      {
        imageSrc:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/dee4bb20-4419-474c-abe1-624e02d1c760.jpg?ts=1708593182",
        alt: "Product 1",
        duration: "12MINS",
        title: "Wai Wai Ready To Eat Chicken",
        weight: "1pack(6pieces)",
        price: "₹86",
      },
      {
        imageSrc:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/dee4bb20-4419-474c-abe1-624e02d1c760.jpg?ts=1708593182",
        alt: "Product 1",
        duration: "12MINS",
        title: "Wai Wai Ready To Eat Chicken",
        weight: "1pack(6pieces)",
        price: "₹86",
      },
      {
        imageSrc:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/dee4bb20-4419-474c-abe1-624e02d1c760.jpg?ts=1708593182",
        alt: "Product 1",
        duration: "12MINS",
        title: "Wai Wai Ready To Eat Chicken",
        weight: "1pack(6pieces)",
        price: "₹86",
      },
      {
        imageSrc:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/dee4bb20-4419-474c-abe1-624e02d1c760.jpg?ts=1708593182",
        alt: "Product 1",
        duration: "12MINS",
        title: "Wai Wai Ready To Eat Chicken",
        weight: "1pack(6pieces)",
        price: "₹86",
      },
      {
        imageSrc:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/dee4bb20-4419-474c-abe1-624e02d1c760.jpg?ts=1708593182",
        alt: "Product 1",
        duration: "12MINS",
        title: "Wai Wai Ready To Eat Chicken",
        weight: "1pack(6pieces)",
        price: "₹86",
      },
      {
        imageSrc:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/dee4bb20-4419-474c-abe1-624e02d1c760.jpg?ts=1708593182",
        alt: "Product 1",
        duration: "12MINS",
        title: "Wai Wai Ready To Eat Chicken",
        weight: "1pack(6pieces)",
        price: "₹86",
      },
    ];
  
    return (
      <><div><h1 className="font-bold">Trending in your Area</h1></div>
        <div className="carousel rounded-box w-full lg:hidden">
          {cardData5.map((item, index) => (
            <div className="carousel-item w-1/2 p-1">
              <div className="rounded-xl">
                <div className="flex justify-center border border-gray-300 rounded-xl">
                  <img
                    src={item.imageSrc}
                    className="w-[150px] "
                    alt="Amul Fresh Malai Paneer"
                  />
                </div>
                <div className="flex text-sm">
                  <p className="pl-2">{item.duration}</p>
                </div>
                <h1 className="font-bold mt-2 ml-2">{item.title}</h1>
                <br></br>
                <h1 className="ml-2">{item.weight}</h1>
                <br></br>
                <div className="flex justify-between items-center p-3">
                  <h1 className="font-bold ">{item.price}</h1>
                  <button className="border border-green-600  text-green-600 font-bold p-2 px-5 rounded-xl">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  export default Slider5;
  