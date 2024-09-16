import candle from '../assets/Videos/candle.mp4';

const DivineConnect = () => {
  return (
    <div className="bg-orange-50 flex flex-col justify-center items-center lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:max-w-7xl mx-auto rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          {/* Text Section */}
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Why to choose DivineConnect</h2>
            <p className="mt-4 text-gray-600">
              A platform that fosters a deeper spiritual connection, offering individuals a way to explore, learn, and engage with their faith or beliefs in a more meaningful way.
            </p>

            <div className="mt-6 space-y-9">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Convenient Access to Rituals</h3>
                <p className="text-gray-600">
                  Easily book and participate in religious services and rituals from anywhere, tailored to your personal beliefs and needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Spiritual Guidance</h3>
                <p className="text-gray-600">
                  Connect with spiritual leaders and mentors for advice, guidance, and support on your faith journey.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Experience</h3>
                <p className="text-gray-600">
                  Receive tailored recommendations for prayers, events, and rituals based on your spiritual preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">User-Friendly Platform</h3>
                <p className="text-gray-600">
                  Simplifies the process of engaging with spirituality through an intuitive interface, making spiritual practices more accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative flex justify-center items-center">
            {/* Video Embed */}
            <div className="w-full lg:w-full h-64 md:h-auto">
              <video
                className="w-full h-full object-cover"
                src={candle}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>

            {/* Button over video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-gradient-to-r from-purple-400 via-orange-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineConnect;
