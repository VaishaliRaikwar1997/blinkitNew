function Slider2() {
    const cardData2 = [
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/toys-store_1.png",
        
        title: "Toy Store",
        
      },
      {
        imageSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/pet-store.png",
        title:"Pet Store"
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/stationery-store.png",
        
        title: "Stationary Store",
        
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/kid-store_0.png",
        
        title: "Kids Store",
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/health-store.png",
       
        title: "Health Store",
       
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/beauty-store.png",
        
        title: "Beauty Store",
       
      },
    ];
  
    return (
      <>
      <div><h1 className="font-bold ml-3 lg:hidden ">Shop by Store</h1></div>
        <div className="carousel rounded-box w-full lg:hidden">
          {cardData2.map((item, index) => (
            <div className="carousel-item w-1/4 p-1 ml-3">
              <div className="rounded-xl">
                <div className="flex justify-center">
                  <img
                    src={item.imageSrc}
                    className="w-[70px] h-[65px] rounded-xl"
                    alt="Amul Fresh Malai Paneer"
                  />
                </div>
               
                <h1 className="font-bold mt-2 ml-2 text-center">{item.title}</h1>
                <br></br>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  export default Slider2;
  