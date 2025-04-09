import Schedule from "@/components/schedule";
import Sponsored2 from "@/components/sponser2";
import Sponsored from "@/components/sponsored";
import Head from "next/head";
import React from "react";

function Partners() {
  return (
    <>
      <Head>
        <title>Contact Us - ICSICST - International Conference on Sustainable &amp;Intelligent Computing in Science and Technology</title>
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
            Email : icsicst@poornima.org <br /> <br /> <br />
            Dr. Bhanu Pratap <br />
            Associate Professor, <br />
            Poornima Institute of Engineering & Technology, <br />
            Email: bhanu.pratap@poornima.org <br />
            Phone: +91 8118874724
            </p>
          </div>
          <div className="mt-8">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.2424729285285!2d75.8484933148641!3d26.76853977272645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee859ae1f1b64b0!2sPoornima+Institute+of+Engineering+and+Technology!5e0!3m2!1sen!2sin!4v1520493557018" width="100%" height="350" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
        </div>

        {/* Placeholder for Future Content */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 hidden">
          <h2 className="text-2xl font-bold mb-6">Conference Partners</h2>
          <p className="text-gray-700 mb-8">
            &ldquo;This groundbreaking event marks a new era of innovation, collaboration, and knowledge exchange. 
            Join us as we unveil a remarkable conference experience that will shape the future of technology and academia.&rdquo;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "IIIT Nagpur",
                description: "Indian Institute of Information Technology Nagpur, is a prestigious institution of higher education in the field of Information Technology and Computer Science it is one of the leading institutes in India dedicated to fostering excellence in education, research, and innovation. With a focus on providing industry-relevant curriculum, state-of-the-art facilities, and a vibrant academic environment, IIIT Nagpur aims to nurture the next generation of technocrats and leaders in the IT industry."
              },
              {
                name: "Asia University",
                description: "Asia University, located in Taiwan, is a prestigious institution renowned for its commitment to academic excellence and innovative research. With a diverse and vibrant campus community, Asia University offers a wide range of undergraduate and graduate programs in various fields. With a focus on global perspectives, interdisciplinary learning, and practical skills development, Asia University prepares students to excel in their chosen careers and make a positive impact in the world."
              },
              {
                name: "Namibia University",
                description: "Namibia University provide exceptional education and a vibrant learning community. This institution is dedicated to nurturing intellectual growth, fostering critical thinking skills, and promoting a spirit of innovation. With a wide range of academic programs, state-of-the-art facilities, and a supportive faculty and aim to empower their students to become future leaders and contribute positively to society. The Namibia University provides transformative educational journey, where knowledge meets opportunity."
              }
            ].map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Sponsored />
      </main>
    </>
  );
}

export default Partners;
