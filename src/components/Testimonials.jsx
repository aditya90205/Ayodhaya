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
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        {/* Static Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          See the memories we have created
        </h1>

        <p className="text-center mb-8">
          Discover heartfelt experiences from visitors who have been touched by
          Ayodhya’s spiritual charm.
        </p>

        {/* Flower Video + Image */}
        <div className="flex items-center justify-center space-x-4 md:space-x-8 w-full mb-5">
          {/* Left Flower Video */}
          <div className="w-1/3 flex justify-center">
            <video src={flower} autoPlay loop muted className="w-2/3 mx-auto" />
          </div>

          {/* PNG Image (changes every 5 seconds) */}
          <div className=" flex justify-center">
            <img
              src={images[currentImage]}
              alt="Experience"
              className="w-11/12 h-auto object-contain mx-auto"
            />
          </div>

          {/* Right Flower Video */}
          <div className="w-1/3 flex justify-center">
            <video src={flower} autoPlay loop muted className="w-2/3 mx-auto" />
          </div>
        </div>
        <div className="md:w-full rounded bg-gradient-to-r from-orange-600 to-purple-600 flex flex-col md:flex-row items-center justify-around p-10">
          <p className="text-white text-2xl text-center">
          &quot;Secure Your Exclusive Darshan Experience Today!&quot;
          </p>
          <button className="bg-gradient-to-r from-purple-400 via-orange-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
