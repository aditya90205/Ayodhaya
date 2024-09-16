

import line from '../assets/Images/line.png'; // Replace with your top image
import logo from '../assets/Images/logo.png'; // Replace with your logo
import social from '../assets/Images/social.png'; // Replace with your Instagram icon


const Footer = () => {
  return (
    <footer className=" text-black w-full">
      {/* Top Decorative Image */}
      <div className="w-4/5 lg:w-2/3 mx-auto">
        <img src={line} alt="Top Decoration" className="w-full h-auto" />
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <img src={logo} alt="DivineConnect Logo" className="w-48 h-auto mb-4" />

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-lg w-full md:w-auto">
          <a href="#contact" className="hover:underline">Contact us</a>
          <a href="#about" className="hover:underline">About us</a>
          <a href="#privacy" className="hover:underline">Privacy policy</a>
          <a href="#holiday" className="hover:underline">Holiday offers</a>
          <a href="#packages" className="hover:underline">Our packages</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 my-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={social} alt="Instagram" className="" />
        </a>

      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm py-4">
        © 2024 by DivineConnect
      </div>
    </footer>
  );
};

export default Footer;
