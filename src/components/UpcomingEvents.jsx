import deepali from '../assets/Images/deepali.png';
import koshi1 from '../assets/Images/koshi1.png';
import deepotsav from '../assets/Images/deepotsav.png';
import koshi2 from '../assets/Images/koshi2.png';

const UpcomingEvents = () => {
    const events = [
        {
          title: 'Deepawali 1 November, 2024',
         imgUrl:  `${deepali}`,
        },
        {
          title: '14 Koshi Yatra',
          imgUrl: `${koshi1}`,
        },
        {
          title: 'Deepotsav',
          imgUrl: `${deepotsav}`,
        },
        {
          title: '5 Koshi Yatra',
          imgUrl: `${koshi2}`,
        },
      ];
    
      return (
        <div className="bg-[#f8f0e3] mx-auto p-4">
            <div className='lg:w-1/2 lg:mx-auto'>
        <h2 className="text-center text-3xl font-bold mb-4">Upcoming Events & Festivals</h2>
        <p className="text-center mb-8">
          From the grand festivities of Ram Navami, celebrating the birth of Lord Rama, to the illuminating celebrations of Diwali, 
          this section provides details on major events and festivals that draw thousands of visitors.
        </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 justify-center items-center lg:px-20">
          {/* First full-height image */}
          <div className="col-span-2 relative h-[400px]">
            <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
              <img
                src={events[0].imgUrl}
                alt={events[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm p-4">
                <h3 className="text-white text-lg font-semibold">{events[0].title}</h3>
                {events[0].date && <p className="text-white text-sm">{events[0].date}</p>}
              </div>
            </div>
          </div>
  
          {/* Middle two half-height images */}
          <div className="col-span-2 flex flex-col gap-4 h-[400px]">
            {events.slice(1, 3).map((event, index) => (
              <div key={index} className="relative h-full group overflow-hidden rounded-lg shadow-lg flex-1">
                <img
                  src={event.imgUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm p-4">
                  <h3 className="text-white text-lg font-semibold">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
  
          {/* Last full-height image */}
          <div className="col-span-2 relative h-[400px]">
            <div className="relative h-full group overflow-hidden rounded-lg shadow-lg">
              <img
                src={events[3].imgUrl}
                alt={events[3].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm p-4">
                <h3 className="text-white text-lg font-semibold">{events[3].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    
}

export default UpcomingEvents