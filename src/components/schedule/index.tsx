import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import React from "react";
import Marquee from "../marquee";

const dates = [
  {
    label: "Full Paper Submission Date", 
    date: "26 April 2025",
    color: "#7AB2B2",
  },
  {
    label: "Notification of Acceptance",
    date: "02 May 2025", 
    color: "#006A67",
  },
  {
    label: "Revised Paper Submission",
    date: "06 May 2025",
    color: "#F96E2A",
  },
  {
    label: "Early Bird Registration",
    date: "06 May 2025",
    color: "#133E87",
  },
  {
    label: "Late Registration",
    date: "10 May 2025",
    color: "#7E60BF",
  },
  {
    label: "Conference Dates",
    date: "16-17 May 2025",
    color: "#201E43",
  },
];

function Schedule() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-4 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-blue-600 mb-3"> 
            <a href="/pdfs/ICSICST2025-Conference-Schedule.pdf" target="_blank" rel="noopener noreferrer">
              Click Here To See Full ICSICST2025 Conference Schedule
            </a>
          </h2>
          <h2 className="text-lg font-bold text-gray-900">
            Important Dates :
          </h2>
          <div className="h-0.5 w-12 bg-blue-600 mx-auto mt-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {dates.map((dateInfo, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-sm p-3 border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="h-8 w-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ 
                    backgroundColor: `${dateInfo.color}15`
                  }}
                >
                  <FaCalendarAlt 
                    size={14}
                    color={dateInfo.color}
                  />
                </div>

                <div>
                  <h3 
                    className="font-medium text-sm"
                    style={{ color: dateInfo.color }}
                  >
                    {dateInfo.label}
                  </h3>
                  <div className="text-gray-600 text-xs mt-0.5">
                    {dateInfo.date}
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <div className="h-1 w-full bg-gray-100 rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${100 - (index * 15)}%`,
                      backgroundColor: dateInfo.color
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block relative mt-6">
          <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 transform -translate-y-1/2">
            {dates.map((dateInfo, index) => (
              <div
                key={index}
                className="absolute w-1.5 h-1.5 rounded-full transform -translate-y-1/2"
                style={{
                  left: `${(index + 1) * (100 / (dates.length + 1))}%`,
                  backgroundColor: dateInfo.color
                }}
              >
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">
                  {dateInfo.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
