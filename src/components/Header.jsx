import mainVideo from '../assets/Videos/main.mp4';
import Navbar from './Navbar';
const Header = () => {


  return (
    <header className="relative w-full h-screen overflow-hidden">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={mainVideo} 
      autoPlay
      loop
      muted
    />

    {/* Overlay (To darken the video for better text visibility) */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

    {/* Navbar */}
   <Navbar />

    {/* Centered Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
      <h1 className="text-4xl md:text-4xl font-bold mb-4">&ldquo;Discover the Spiritual Heart of India - Ayodhya &rdquo;</h1>
      <p className="text-lg md:text-lg">Explore the birthplace of Lord Rama, where ancient history and spirituality meet</p>
    </div>
  </header>
  );
};

export default Header;
