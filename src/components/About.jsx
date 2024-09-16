import { useEffect, useRef, useState } from "react";
import aarti from "../assets/Videos/aarti.mp4";
const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Start with the video playing
    // const [isMuted, setIsMuted] = useState(true); 
    const videoRef = useRef(null);
  
    // Function to control video play/pause
    const handleVideoPlayPause = () => {
      const videoElement = videoRef.current;
      if (isVideoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    };
  
    // Auto play the video on component mount
    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.play().catch(() => {
          // Handle any errors that may occur when attempting to play the video
          console.log("Video play failed.");
        });
      }
  
      // Reset play state when video ends
      videoElement.addEventListener('ended', () => setIsVideoPlaying(false));
  
      return () => {
        videoElement.removeEventListener('ended', () => setIsVideoPlaying(false));
      };
    }, []);
   
  return (
    <section className="bg-orange-50 py-8">
      <div className="container mx-auto">
        {/* About Us Content (Top Section) */}
        <div className="text-center lg:w-4/5 mx-auto py-4">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            Divine Connect offers a gateway to explore Ayodhya&apos;s sacred heritage, providing curated tours,
            event updates, and insightful resources. Immerse yourself in the city&apos;s divine essence through
            our expertly designed itineraries and stay informed about major festivals and spiritual
            activities, ensuring a profound and enriching journey.
          </p>
        </div>

        {/* Background Video (Bottom Section) */}
        <div className="relative">
          <video
            ref={videoRef}
            src={aarti}
            className="w-full lg:w-4/5 h-auto mx-auto rounded-lg shadow-lg"
            autoPlay
            controls={false}
            loop={false}
            muted={true} // Ensure the video is not muted
          />
          {!isVideoPlaying && (
            <div
              className="lg:w-4/5 lg:mx-auto absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
              onClick={handleVideoPlayPause}
            >
              <button className="text-white text-5xl font-bold">▶</button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default About