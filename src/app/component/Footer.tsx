
import React from 'react';
import Image from 'next/image';
import githubLogo from "@/app/asset/GitHub-Logo.svg";
import linkedinLogo from "@/app/asset/LinkedIn-Logo.svg";

const Footer = () => {
  return (
    <footer className=" shadow-lg py-4 w-full ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 text-center md:text-left">&copy; 2024 Asma Masood. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
          <a
            href="https://www.linkedin.com/in/asma-masood-588446304"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image
              src={linkedinLogo}
              alt="linkedin logo"
              className="w-16 h-16 md:w-32 md:h-32 b"
            />
          </a>
          <a
            href="https://github.com/asmamasood"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image
              src={githubLogo}
              alt="Github logo"
              className="w-16 h-16 md:w-32 md:h-32"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
