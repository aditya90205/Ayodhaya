import ram from '../assets/Images/ram.png';
const Ram = () => {
  return (
    <div className="bg-[#f8f0e3] py-10 px-6 md:px-10 lg:px-10 text-center">
    {/* Image - Insert your image link below */}
    <div className="flex justify-center">
      <img
        src={ram}
        alt="Icon"
        className="h-20 w-20 mb-4"
      />
    </div>
  
    {/* Title */}
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
    &quot;Ayodhya: The Sacred City of Lord Rama&quot;
    </h1>
  
    {/* Paragraph */}
    <div>
    <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 max-w-4xl mx-auto lg:w-full">
      Ayodhya, a city steeped in history and spirituality, is best known as the birthplace of Lord Rama, making it one of the holiest places in Hinduism. Situated on the banks of the Saryu River, Ayodhya is a major pilgrimage destination, attracting devotees and tourists alike with its ancient temples, sacred ghats, and rich cultural heritage. Revered in the epic Ramayana, the city not only holds immense religious significance but also offers a blend of history, architecture, and vibrant festivals that celebrate its timeless spiritual essence.
    </p>
    </div>
  </div>
  
  )
}

export default Ram