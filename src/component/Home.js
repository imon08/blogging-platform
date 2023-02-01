import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="h-screen w-screen">
  
      <Carousel className="m-10 h-[50%] w-[80%]">
        <div>
          <img className="object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1np8gl6kBojZfpz7kl1vo-fyf3tYs3fYBmuCbHGhTeN5XNEyqPy5iMS5NKGamzi30zr8&usqp=CAU" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className="object-contain"
           src="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className="object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVmXzkwE-rldD1mV2PijWue08y14EZWhXMayHY-zW0bXEsKWI0gs9AFoVpaGuK-emxYU&usqp=CAU" />
          <p className="legend">Legend 3</p>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Home;
