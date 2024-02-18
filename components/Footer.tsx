import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaMedium, FaTwitter, FaYoutube } from 'react-icons/fa';
import Newsletter from './Subscribe';

const Footer: React.FC = () => {
  const iconSize = 20;
  return (
    <div>
      <footer className="md:pt-5 text-ideablack border-t">
        <div className="w-4/5 container px-5 py-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:mt-0 mt-5 text-left">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-base">
                Follow us
              </h2>
              <hr className="my-4 w-44 border border-mildgreen" />
              <nav className="list-none mb-10 flex space-x-4 text-sm font-normal">
                <li>
                  <a href="https://www.linkedin.com/company/idealistic-inc/" className="link">
                    <FaLinkedin className="inline-block mr-2" style={{ color: 'black' ,fontSize: iconSize }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Idealisticmedia" className="link">
                    <FaFacebook className="inline-block mr-2" style={{ color: 'black',fontSize: iconSize }} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/idealistic_inc" className="link">
                    <FaTwitter className="inline-block mr-2" style={{ color: 'black',fontSize: iconSize }} />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/theidealisticworld/' className='link'>
                    <FaInstagram className='inline-block mr-2' style={{ color: 'black',fontSize: iconSize }} />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@theidealisticworld" className="link">
                    <FaMedium className="inline-block mr-2" style={{ color: 'black',fontSize: iconSize }} />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/@idealisticworld' className='link'>
                    <FaYoutube className='inline-block mr-2' style={{ color: 'black',fontSize: iconSize }} />
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div>
            <Newsletter />
          </div>
        </div>

        <div className="w-4/5 mx-auto py-2 md:mt-5 text-sm">
          <div className="font-bold flex flex-col sm:flex-row mb-8 mx-auto text-white-600 justify-center md:justify-between py-2 ml-6">

            <div>
              <a href="/">
                <Image
                  width={150}
                  height={150} 
                  src="/Idealistic/1-1.png" 
                  alt="Idealistic, Inc Logo" 
                />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
              <div className='flex flex-row'>
                <a className="mt-2 sm:mt-0 sm:text-lg" href="/about/idealistic-inc-careers">
                  <span>Careers</span>
                </a>
                <a className="mt-2 sm:mt-0 sm:text-lg ml-4" href="/about/contact-us">
                  <span>Contact Us</span>
                </a>
                <a className="mt-2 sm:mt-0 sm:text-lg ml-4" href="/about">
                  <span>About Us</span>
                </a>
              </div>
              
              <div className='flex flex-row' >
              <a className="mt-2 sm:mt-0 sm:text-lg" href="/about/policies/privacy-policy">
                <span>Privacy policy</span>
              </a>
              <a className="mt-2 sm:mt-0 sm:text-lg ml-4" href="/about/policies/terms-of-use">
                <span>Terms Of Use</span>
              </a>
              <a className="mt-2 sm:mt-0 sm:text-lg ml-4" href="/partner-with-us">
                <span>Partner With Us</span>
              </a>
              </div>

            </div>
          </div>

          <hr className="h-px  border-mildgreen border-1 mb-4" />
          <span className=' text-sm '>&copy; {new Date().getFullYear()} All rights reserved under Idealistic, Inc.</span>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
