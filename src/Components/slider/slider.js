// import React, { useState } from 'react';

// const Slider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevSlide = () => {
//     const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   }

//   const goToNextSlide = () => {
//     const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }

//   return (
//     <div className="slider">
//       {/* <button onClick={goToPrevSlide}>Previous</button> */}
//       <img className='slider' src={images[currentIndex]} alt="Slide" onClick={goToPrevSlide}/>
//       {/* <button onClick={goToNextSlide}>Next</button> */}
//     </div>
//   );
// }

// export default Slider;
