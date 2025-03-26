import { useState, useEffect, useRef } from 'react';
import image1 from '../assets/Java-Exception-Handling---1.png'; // Import image 1 - adjust path if needed
import image2 from '../assets/Java-Exception-Handling---2.png'; // Import image 2 - adjust path if needed
import image3 from '../assets/Java-Exception-Handling---3.png'; // Import image 3 - adjust path if needed

const ImageCarousel = () => {
  // State to track the index of the currently active image
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Ref to the carousel container (not currently used, but good practice for future enhancements)
  const carouselRef = useRef(null); 

  // Array of imported images. This makes it easier for Webpack to bundle them correctly.
  const images = [
    image1,
    image2,
    image3,
  ];

  // useEffect hook for setting up the automatic image cycling
  useEffect(() => {
    // Set up an interval to change the image every 3 seconds
    const intervalId = setInterval(() => {
      // Update currentIndex to the next image index (using modulo to wrap around)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 3 seconds

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId); 
  }, [images.length]); // The dependency array ensures this runs only when images.length changes

  // Function to handle going to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to handle going to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full" ref={carouselRef}> {/* Main carousel container */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96"> {/* Container for the images */}
        {images.map((image, index) => (
          <div
            key={index} // Important for React to efficiently update the list
            className={`absolute inset-0 duration-200 ease-linear transition-opacity ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0' // Conditional classes for fading in/out
            }`}
          >
            <img
              src={image} // The imported image is used here
              alt={`Slide ${index + 1}`} // Alt text for accessibility
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" // Positioning
            />
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        {/* ... (SVG and styling for the previous button - no changes needed) 
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
        */}
      </button>

      {/* Next button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        {/* ... (SVG and styling for the next button - no changes needed) 
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
        */}
      </button>
    </div>
  );
};

export default ImageCarousel;