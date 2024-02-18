import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

interface DropdownProps {
  title: string;
  subtitle?: string;
  items: { label: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, subtitle, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId!);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); 
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="flex items-center text-ideablack hover:text-mildgreen nav-link"
      >
        <span>{title}</span>
        {isDropdownOpen ? (
          <ChevronUpIcon className="h-5 w-5 ml-1" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 ml-1" />
        )}
      </button>
      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } origin-top-left absolute w-96 mt-2 bg-darkgreen`}
        ref={dropdownRef}
      >
        <div
          className="py-4"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {subtitle && (
            <p className="font-semibold underline underline-offset-8 ml-3 mb-4 text-lightgreen">{subtitle}</p>
          )}
          {items.map((item) => (
          <Link key={item.href} href={item.href || '#'} legacyBehavior>
            <a
              role="menuitem"
              className="block px-4 py-2 text-m font-light text-lightgreen hover:font-semibold hover:text-white"
            >
              {item.label}
            </a>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
