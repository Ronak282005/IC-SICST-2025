import ImportantDetails from "@/components/importantDetails";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Publications() {
  return (
    <>
      <Head>
        <title>
          Publications - ICSICST - International Conference on Sustainable & Intelligent Computing in Science and Technology
        </title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <Schedule />
      <br />

      <main className="bg-gradient-to-b from-blue-50 to-white px-8">
        {/* Coming Soon Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <div className="bg-blue-50 rounded-full p-8 mb-6">
              <svg 
                className="w-16 h-16 text-blue-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              The publication details for ICSICST 2025 are currently being finalized. 
              Please check back later for complete information about conference proceedings 
              and publication opportunities.
            </p>
          </div>
        </div>

        {/* Placeholder for Future Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 hidden">
          <h2 className="text-2xl font-bold mb-6">Publication Opportunities</h2>
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Selected, Registered and post conference papers will be published in the
                proceedings of ICIMMI 2024 in Scopus Indexed ACM International
                Conference Proceedings.
              </p>
              <p className="text-gray-700">
                Selected, Extended Versions of the Conference papers may be considered
                for the following Journal. Extended papers must have at least 70% of new
                contents in the extended manuscripts for consideration for the following
                Journal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Publication Venues</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    ACM International Conference Proceeding Series
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Journal of Discrete Mathematical Sciences & Cryptography
                    ISSN:0972-0529 (Q1-Scopus & WoS Indexed) (Additional APC will be
                    applicable)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Sponsored />
      </main>
    </>
  );
}

export default Publications;
