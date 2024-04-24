// import React, { useState } from "react";

// function Book() {
//   const [flippedPage2, setFlippedPage2] = useState(false);

//   const handleFlipPage1 = () => {
//     // Ensure page 1 doesn't flip when clicked
//     return;
//   };

//   const handleFlipPage2 = () => {
//     setFlippedPage2(!flippedPage2);
//   };

//   return (
//     <div className="cover flex">
//       <div className={`book`} onClick={handleFlipPage1}>
//         <div className="book__page book__page--1">
//           <img
//             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
//             alt=""
//           />
//         </div>
//       </div>
//       <div
//         className={`book ${flippedPage2 ? "flipped" : ""}`}
//         onClick={handleFlipPage2}
//       >
//         <div className="book__page book__page--2 flex flex-col justify-center h-full ">
//           <div className="book__page-front bg-[#FFEDD8]">
//             {/* Content for the front side */}
//             <h1 className="page__content-book-title">Foundation</h1>
//           </div>
//           <div className="book__page-back bg-[#FFEDD8]">
//             {/* Content for the back side */}
//             <h1 className="page__content-title">Reviews</h1>
//             <div className="page__content-reviews">
//               <div className="review">
//                 <p className="review__text">
//                   "Great book! I highly recommend it."
//                 </p>
//                 <p className="review__author">- John Doe</p>
//               </div>
//               <div className="review">
//                 <p className="review__text">
//                   "Fantastic read, couldn't put it down."
//                 </p>
//                 <p className="review__author">- Jane Smith</p>
//               </div>
//             </div>
//             <div className="page__number">2</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Book;
