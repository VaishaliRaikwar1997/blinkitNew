function Slider1() {
  const cardData = [
    {
      imageSrc:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      alt: "Product 1",
      duration: "12MINS",
      title: "Amul Fresh Milk",
      weight: "500ml",
      price: "₹32",
    },
    {
      imageSrc:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
      alt: "Product 1",
      duration: "12MINS",
      title: "Amul Masti Curd",
      weight: "200gm",
      price: "₹34",
    },
    {
      imageSrc:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/68554a.jpg?ts=1701174619",
      alt: "Product 1",
      duration: "12MINS",
      title: "Amul Fresh Malai Paneer",
      weight: "200gm",
      price: "₹22",
    },
    {
      imageSrc:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/68554a.jpg?ts=1701174619",
      alt: "Product 1",
      duration: "12MINS",
      title: "Amul Fresh Malai Paneer",
      weight: "200gm",
      price: "₹22",
    },
    {
      imageSrc:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/68554a.jpg?ts=1701174619",
      alt: "Product 1",
      duration: "12MINS",
      title: "Amul Fresh Malai Paneer",
      weight: "200gm",
      price: "₹22",
    },
    {
      imageSrc:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/68554a.jpg?ts=1701174619",
      alt: "Product 1",
      duration: "12MINS",
      title: "Amul Fresh Malai Paneer",
      weight: "200gm",
      price: "₹22",
    },
  ];

  return (
    <>
      <div className="carousel rounded-box w-full lg:hidden">
        {cardData.map((item, index) => (
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
export default Slider1;
