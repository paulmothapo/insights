"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';
import Dropdown from "./Dropdown";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";


const Header = ({}) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);
      const toggleInsightsDropdown = () => {
        setShowInsightsDropdown(!showInsightsDropdown);
      };

      const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
      const toggleIndustryDropdown = () => {
        setShowIndustryDropdown(!showIndustryDropdown);
      };

      const [showServicesDropdown, setShowServicesDropdown] = useState(false);
      const toggleServicesDropdown = () => {
        setShowServicesDropdown(!showServicesDropdown);
      };

      const [showAboutDropdown, setShowAboutDropdown] = useState(false);
      const toggleAboutDropdown = () => {
        setShowAboutDropdown(!showAboutDropdown);
      };

      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      const getToggleIcon = (isExpanded) => (isExpanded ? "-" : "+");

      const getNavLink = (url, text) => (
        <Link href={url} legacyBehavior>
          <a className={`text-ideablack text-base${styles["nav-link"]}`}>{text}</a>
        </Link>
      );

      const getButton = (url, text) => (
        <Link href={url} legacyBehavior>
          <a className={`text-ideablack outline ${styles["glass-button"]}`}>
            {text}
          </a>
        </Link>
      );

      const MobileMenu = () => (
        <div className="md:hidden absolute top-8 w-screen space-y-5 p-10">
          <div className="bg-lightgreen py-10 w-screen shadow-xl border-t border-darkgreen">
          <div className="relative">
          <div className="flex items-center cursor-pointer ml-4 text-lg font-semibold text-ideablack" onClick={toggleInsightsDropdown}>
            <span>Featured</span>
            <span className="ml-2">{getToggleIcon(showInsightsDropdown)}</span>
          </div>
          {showInsightsDropdown && (
            <div className="mt-2 ml-8 space-y-2">
              {getNavLink("https://idealisticworld.com/insights/podcast", "Podcast")}
              <div className="mt-5">{getNavLink("https://idealisticworld.com/insights/fintechworld", "Fintech World")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/insights/books", "Books")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/insights/newsletter", "Newsletter")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/insights/reports", "Reports")}</div>
            </div>
          )}
        </div>
        <hr className="my-4 border-ideablack" />
        <div className="relative">
          <div className="flex items-center cursor-pointer ml-4 text-lg font-semibold text-ideablack" onClick={toggleIndustryDropdown}>
            <span>Industries</span>
            <span className="ml-2">{getToggleIcon(showIndustryDropdown)}</span>
          </div>
          {showIndustryDropdown && (
            <div className="mt-2 ml-8 space-y-2">
              {getNavLink("/industries/education", "Education")}
              <div className="mt-5">{getNavLink("https://idealisticworld.com/industries/energy", "Energy")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/industries/fianacial-services", "Financial Services")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/industries/healthcare", "Healthcare")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/industries/media-and-entertainment", "Media & Entertainment")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/industries/technology", "Technology")}</div>
            </div>
          )}
        </div>
        <hr className="my-4 border-ideablack" />
        <div className="relative">
          <div className="flex items-center cursor-pointer ml-4 text-lg font-semibold text-ideablack" onClick={toggleServicesDropdown}>
            <span>Services</span>
            <span className="ml-2">{getToggleIcon(showServicesDropdown)}</span>
          </div>
          {showServicesDropdown && (
            <div className="mt-2 ml-8 space-y-2">
              {getNavLink("/services/change-management", "Change Management")}
              <div className="mt-5">{getNavLink("https://idealisticworld.com/services/innovation", "Innovation")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/services/sustainability", "Sustainability")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/services/sales-and-marketing", "Sales & Marketing")}</div>
              <div className="mt-5">{getNavLink("https://idealisticworld.com/services/transformation", "Transformation")}</div>
            </div>
          )}
        </div>
        <hr className="my-4 border-ideablack" />
        <div className="relative">
          <div className="flex items-center cursor-pointer ml-4 text-lg font-semibold text-ideablack" onClick={toggleAboutDropdown}>
            <span>About</span>
            <span className="ml-2">{getToggleIcon(showAboutDropdown)}</span>
          </div>
          {showAboutDropdown && (
            <div className="mt-2 ml-8 space-y-2">
              {getNavLink("https://idealisticworld.com/about", "About Overview")}
              <div className="mt-5">{getNavLink("/about/our-purpose-mission-values", " Purpose, Mission & Values")}</div>
              {/* <div className="mt-5">{getNavLink("", "How we work")}</div> */}
            </div>
          )}
        </div>
        <hr className="my-4 border-ideablack" />
        <div className="ml-4 mt-5">
          <CallToAction />
        </div>
      </div>
    </div>
  );
      
    const DesktopMenu = () => (
      <div className="hidden md:flex space-x-4 justify-center">
        <Dropdown title="Insights" subtitle="Transforming the world with innovative ideas." items={[{label:"Books", href:"https://idealisticworld.com/insights/books"}, {label:"Fintech World", href:"https://idealisticworld.com/insights/fintech-world"}, {label:"Newsletter", href:"https://idealisticworld.com/insights/newsletter"}, {label:"Podcast", href:"https://idealisticworld.com/insights/podcast"},{ label:"Reports", href:"https://idealisticworld.com/insights/reports"}]} />
        <Dropdown title="Industries" subtitle="Innovative ideas, transforming industries." items={[{label:"Education", href:"https://www.idealisticworld.com/industries/education/how-we-help-clients"}, {label:"Energy", href:"https://www.idealisticworld.com/industries/energy/how-we-help-clients"}, {label:"Financial Services", href:"https://www.idealisticworld.com/industries/financial-services/how-we-help-clients"}, {label:"Healthcare", href:"https://www.idealisticworld.com/industries/healthcare/how-we-help-clients"}, {label:"Media & Entertainment", href:"https://www.idealisticworld.com/industries/media-and-entertainmnet/how-we-help-clients"}, {label:"Technology", href:"https://www.idealisticworld.com/industries/technology/how-we-help-clients"}]} />
        <Dropdown title="Services" subtitle="How we can help." items={[{label:"Change Management", href:"https://idealisticworld.com/services/change-management"}, {label:"Innovation", href:"https://idealisticworld.com/services/innovation"}, {label:"Sustainability", href:"https://idealisticworld.com/services/sustainability"}, {label:"Transformation", href:"https://idealisticworld.com/services/transformation"}]} />
        <Dropdown title="About" items={[{label: "About Overview", href: "https://idealisticworld.com/about"}, {label: "Purpose, Mission & Values", href: "https://idealisticworld.com/about/our-purpose-mission-values"}]} />
      </div>
    );
    

      const CallToAction = () => (
        <div>
            {getButton("https://idealisticworld.com/about/contact-us", "Become A Client")}
        </div>
      );
      
    
      return (
      <>      
        <nav className={styles[""]}>
          <div className="bg-lightgreen flex items-center header justify-between p-3 fixed top-0 z-50 w-full shadow-xl">
          
            <div className={`font-black ${styles["logo"]}`}>
              <a href="https://idealisticworld.com">
                <Image  
                  width={150}
                  height={150}
                  src="/Idealistic/1-1.png" 
                  alt="Idealistic, Inc Logo" 
                  className={`${styles["logo"]}`} 
                />
              </a>
            </div>

             <div className="md:hidden ">
              <button
                onClick={toggleMobileMenu}
                className="text-ideablack focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
              
            </div>
            {isMobileMenuOpen && <MobileMenu />}
            <DesktopMenu  />
            <div className="hidden md:block">
              <CallToAction />
            </div>
          </div>
          
        </nav>
        </>
      );
    };
    
    export default Header;