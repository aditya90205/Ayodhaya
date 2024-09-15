import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import mainVideo from '../assets/Videos/main.mp4';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={mainVideo} // Replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Overlay (To darken the video for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between p-5">
        <div className="text-3xl text-orange-500 font-bold">Divine<span className="text-pink-600">Connect</span></div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-black">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Places to visit</li>
          <li className="hover:underline">Events</li>
          <li className="hover:underline">Packages</li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden text-white text-2xl z-20">
          <FaBars onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="text-3xl text-orange-500 font-bold mb-8">Divine<span className="text-pink-600">Connect</span></div>
          <ul className="flex flex-col gap-8 text-lg font-medium text-black">
            <li onClick={toggleMenu} className="hover:underline">Home</li>
            <li onClick={toggleMenu} className="hover:underline">Places to visit</li>
            <li onClick={toggleMenu} className="hover:underline">Events</li>
            <li onClick={toggleMenu} className="hover:underline">Packages</li>
          </ul>
          {/* Close Icon */}
          <FaTimes onClick={toggleMenu} className="absolute top-4 right-4 text-2xl" />
        </div>
      </nav>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">&ldquo;Discover the Spiritual Heart of India - Ayodhya&rdquo;</h1>
        <p className="text-lg md:text-xl">Explore the birthplace of Lord Rama, where ancient history and spirituality meet</p>
      </div>
    </header>
  );
};

export default Header;
