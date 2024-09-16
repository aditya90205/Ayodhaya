import backgroundImage from '../assets/Images/background.png'; // Replace with your image path


const HolidaySpecialOffer = () => {
    return (
      <div
        className="mt-1 relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          {/* Text Section */}
          <div className="text-center text-white px-4 md:px-0">
            <h2 className="text-lg md:text-xl font-semibold">Holiday package offer</h2>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2">HOLIDAY SPECIAL 25% OFF</h1>
            <p className="mt-4 text-sm md:text-lg">
              Enter your email ID to get notified on latest offers & discounts
            </p>
          </div>
  
          {/* Email Input Section */}
          <div className="mt-6 flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email id..."
              className="py-3 px-4 w-64 sm:w-96 rounded-l-md border-none outline-none"
            />
            <button className="py-3 px-6 bg-gradient-to-r from-purple-400 via-orange-500 to-red-500 text-white font-bold rounded-r-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HolidaySpecialOffer;
