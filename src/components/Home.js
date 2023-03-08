import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="h-full w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        swipeable
        stopOnHover
        infiniteLoops
        className="flex justify-center m-10 h-[50%] w-[80%]"
      >
        <div>
          <img
            className="object-contain"
            src=""
          />
        </div>
        <div>
          <img className="object-contain" src="" />
        </div>
        <div>
          <img
            className="object-contain"
            src=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
