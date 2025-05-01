"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// Removed isScrolled prop
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white py-3 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="#home">
              <span className="font-bold text-xl text-black">
                <Image src="/logo.svg" alt="Logo" width={150} height={150} />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Courses", "Entrepreneurship", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-black hover:text-[#f57d56] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-black" />
            ) : (
              <Menu className="text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg rounded-b-lg transition-all duration-300 transform origin-top">
            <div className="flex flex-col p-4 space-y-3">
              {["Home", "Courses", "Entrepreneurship", "About"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-[#f57d56] py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
