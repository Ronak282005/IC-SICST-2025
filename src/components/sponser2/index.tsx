import React from "react";

function Sponsored2() {
  return (
    <div className="mb-8 w-full overflow-hidden">
      <h2
        className={
          "mb-10 text-center text-lg font-bold lg:text-center lg:text-2xl"
        }
      >
        
      </h2>
      <div className="flex flex-wrap justify-around">
        <div className="my-4 flex-shrink-0 justify-center px-4 sm:my-0">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/img1.jpg"
              alt="First image"
            />
          </div>
          
        </div>
        <div className="my-4 flex-shrink-0 justify-center px-4 sm:my-0">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/img2.png"
              alt="First image"
            />
          </div>
          
        </div>
        <div className="my-4 flex-shrink-0 justify-center px-4 sm:my-0">
          <div className="flex justify-center">
            <img
              className="h-48 w-48 rounded-full object-cover"
              src="/img3.png"
              alt="First image"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sponsored2;