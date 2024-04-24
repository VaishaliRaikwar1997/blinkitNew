function Slider3() {
    const cardData3 = [
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/assets/search/usecase/ghee_roast_dosa_v2.png",
        
        title: "Ghee Roast Dosa",
        
      },
      {
        imageSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/assets/search/usecase/karela_chips_v2.png",
        title:"Karela Chips"
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/assets/search/usecase/paneer_handi_zdish.png",
        
        title: "Paneer Handi",
        
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/assets/search/usecase/bhel_poori_zdish.png",
        
        title: "Bhel Poori",
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/assets/search/usecase/blackberry_barfi_v2.png",
       
        title: "BlackBerry Barfi",
       
      },
      {
        imageSrc:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/assets/search/usecase/gobi_manchurian_4.png",
        
        title: "Gobhi Manchurian",
       
      },
    ];
  
    return (
      <>
      <div className="flex justify-between lg:hidden">
      <h1 className="font-bold ml-3 lg:hidden ">Cooking Ideas</h1>
      <a className="text-green-600 mr-4 font-bold" href="see all">see all</a>
      </div>
        <div className="carousel rounded-box w-full lg:hidden">
          {cardData3.map((item, index) => (
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
  export default Slider3;
  