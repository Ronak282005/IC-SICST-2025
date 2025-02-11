import {
  RiFacebookBoxFill,
  RiMailFill,
  RiPhoneFill,
  RiTwitterFill,
  RiMapPin2Fill,
  RiGlobalLine
} from "react-icons/ri";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      icon: RiTwitterFill,
      href: "https://x.com/PIET_Jaipur?t=Kjg5TmQrklkkRdjvFVElDw&s=09",
      label: "Twitter",
      hoverColor: "hover:text-sky-400"
    },
    {
      icon: RiPhoneFill,
      href: "tel:+91-9896017351",
      label: "Phone",
      hoverColor: "hover:text-emerald-500"
    },
    {
      icon: RiFacebookBoxFill,
      href: "https://www.facebook.com/PoornimaInstitute",
      label: "Facebook",
      hoverColor: "hover:text-indigo-500"
    },
    {
      icon: RiMailFill,
      href: "https://www.piet.poornima.org/",
      label: "Website",
      hoverColor: "hover:text-amber-400"
    }
  ];

  return (
    <footer className="bg-[#071952] text-white text-sm">
      <div className="mx-auto max-w-7xl px-3 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={32}
                height={32}
                src="/pietlogo.png"
                className="object-contain"
                alt="PIET Logo"
              />
              <div>
                <h2 className="text-lg font-bold">ICSICST 2025</h2>
                <p className="text-xs text-gray-300">
                  International Conference on Sustainable & Intelligent Computing
                </p>
              </div>
            </Link>
            <p className="text-gray-300 text-xs">
              Join us for the 1st International Conference on Sustainable & Intelligent Computing 
              in Science and Technology at PIET.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <RiMapPin2Fill className="text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Department Of Applied Sciences, PIET, Jaipur, Rajasthan
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <RiPhoneFill className="text-gray-400" />
                <a href="tel:+91-9896017351" className="text-gray-300 hover:text-white">
                  +91-8118874724
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <RiGlobalLine className="text-gray-400" />
                <a href="https://www.piet.poornima.org" 
                   className="text-gray-300 hover:text-white">
                  www.piet.poornima.org
                </a>
              </div>
            </div>
          </div>

          {/* College Logo */}
          <div className="hidden lg:flex justify-end">
            <Image
              width={200}
              height={120}
              src="/clglogo.png"
              className="object-contain"
              alt="College Logo"
            />
          </div>
        </div>

        <hr className="border-gray-800 my-4" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-xs text-gray-400">
            <p>© 2025 ICSICST. All rights reserved.</p>
            <p className="mt-1">
              Designed by{" "}
              {[
                { name: "Diya Mehta", href: "https://github.com/DiyaMehta60" },
                { name: "Ayush Jangid", href: "https://github.com/codeseker" },
                { name: "Ronak", href: "https://github.com/Ronak282005" }
              ].map((dev, index) => (
                <React.Fragment key={dev.name}>
                  <a
                    href={dev.href}
                    className="text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dev.name}
                  </a>
                  {index < 2 && ", "}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link 
                key={social.label}
                href={social.href}
                className={`text-xl text-gray-400 ${social.hoverColor}`}
                aria-label={social.label}
              >
                <social.icon className="hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
