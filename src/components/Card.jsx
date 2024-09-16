// import rammandir from "../assets/Images/rammandir.png";
// import kanak from "../assets/Images/kanak.png";
// import guptar from "../assets/Images/guptar.png";
// import sita from "../assets/Images/Sita rasoi.png";
// import hanuman from "../assets/Images/hanuman garhi.png";
// import saryu from "../assets/Images/Saryu ghat.png";
import data from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import { div, img } from "framer-motion/client";
// import { useRef, useEffect, useState } from "react";
const Card = () => {
  //   const carouselRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 slides on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,  // For medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,  // For small screens (e.g., phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#f8f0e3] py-10 px-6 md:px-10 lg:px-16">
      {/* Heading Section */}
      <div className="text-center mb-8 md:flex md:items-center md:justify-between">
        <div className="md:text-left">
        <p className="text-md font-bold ">
          Must-Visit Attractions in Ayodhya
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Explore Ayodhya’s Sacred Landmarks and Cultural Heritage
        </h2>
        </div>
        <div>
        <p className="text-base md:text-lg mt-2 text-gray-900 font-semibold max-w-4xl mx-auto md:text-left lg:w-4/5 ">
          Whether you&lsquo;re visiting ancient temples, exploring ghats, or 
          experiencing vibrant festivals, Ayodhya&lsquo;s must-visit spots
          provide an unforgettable journey through history and devotion.
        </p>
        </div>
      </div>

      {/* Scrollable Image Section */}
      <div className="m-auto py-10">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="px-3" key={d.title}>
            <div className="relative rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              
              {/* Text with blurred background */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end rounded-lg">
                <div className="p-4 text-white backdrop-blur-lg w-full rounded-b-lg">
                  <h2 className="font-bold text-lg">{d.title}</h2>
                  <p className="text-sm mt-2">{d.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Card;
