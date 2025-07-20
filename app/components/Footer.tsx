import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Link href="#home">
                <span className="font-bold text-xl text-black">
                  <Image src="/logo.svg" alt="Logo" width={150} height={150} />
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation of technical founders with the
              skills, resources, and connections they need to succeed.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              {[
                "Startup Fundamentals",
                "Marketing Strategies",
                "Funding and Investment",
                "Networking and Partnerships",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Entrepreneurship</h3>
            <ul className="space-y-3">
              {[
                "CTO Skills Development",
                "Startup Funding",
                "Product Management",
                "Business Intelligence",
                "Founder Success Program",
                "Mentorship Opportunities",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-[#f57d56] mr-2 mt-1" size={16} />
                <Link
                  href="mailto:youngfounder8@gmail.com"
                  className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
                >
                  stackskills.in@gmail.com
                </Link>
              </li>
              <li className="flex items-start">
                <Phone className="text-[#f57d56] mr-2 mt-1" size={16} />
                <div className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300">
                  7070472634
                </div>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-refund-policy"
                  className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
                >
                  Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#f57d56] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Stack Skills. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed for aspiring technical entrepreneurs. Building the future,
            one founder at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
