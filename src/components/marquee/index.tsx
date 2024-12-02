import React from "react";

const Marquee = () => {
  const handleMarqueeClick = () => {
    window.open("/Important Instructions to the Authors.pdf");
  };

  return (
    <div
      className="relative cursor-pointer overflow-hidden whitespace-nowrap border border-red-500 bg-red-100 py-2"
      onClick={handleMarqueeClick}
      style={{ animationDelay: "0s" }}
    >
      <div className="inline-block animate-marquee px-4 text-xl text-black">
        Important: New ACM Open Access publishing model for ICIMMI-2024. Free
        publishing options available for eligible authors. Discounted APC rates
        for lower-middle-income countries.
      </div>
    </div>
  );
};

export default Marquee;
