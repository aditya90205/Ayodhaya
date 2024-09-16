import { useState, useEffect } from "react";
import person1 from "../assets/Images/person1.png";
import person2 from "../assets/Images/person2.png";
import flower from "../assets/Videos/flower.mp4";
const Testimonials = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [`${person1}`, `${person2}`];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
    {/* Static Heading */}
    <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
      See the memories we have created
    </h1>

    <p className="text-center mb-8">
      Discover heartfelt experiences from visitors who have been touched by Ayodhya’s spiritual charm.
    </p>

    {/* Flower Video + Image */}
    <div className="flex items-center justify-center space-x-4 md:space-x-8">
      {/* Left Flower Video */}
      <div className="w-1/3">
        <video
          src={flower}
          autoPlay
          loop
          muted
          className="w-2/3"
        />
      </div>

      {/* PNG Image (changes every 5 seconds) */}
      <div className="w-full flex justify-center items-center">
        <img
          src={images[currentImage]}
          alt="Experience"
          className="w-11/12 h-auto object-contain"
        />
      </div>

      {/* Right Flower Video */}
      <div className="w-1/3">
        <video
          src={flower}
          autoPlay
          loop
          muted
          className="w-2/3 "
        />
      </div>
    </div>
  </div>
  );
};

export default Testimonials;
