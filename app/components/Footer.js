import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SkyGrowthWhite from "../../public/SkyGrowthWhite.png";


const Footer = () => (
  <footer className="bg-gray-950 text-white py-8 pt-[50px] pb-[50px] flex flex-col justify-around items-center gap-16">
    <div className="container">
      {/* Logo & Description */}
      <div className="flex justify-between">
      <div>
        <Image
          src={SkyGrowthWhite}
          width={300} // Adjust size as needed
          height={300}
          alt="SkyGrowth Logo"
          className="select-none"
        />
        <p className="text-gray-400 mt-2 font-extralight">Building the future, one step at a time.</p>
      </div>

      {/* Navigation Links */}
      <div>
        <h3 className="text-lg font-bold">Quick Links</h3>
        <ul className="mt-2 space-y-2 font-extralight">
          <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
          <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
          <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-lg font-bold">Follow Us</h3>
        <div className="mt-3 flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
        </div>
      </div>
    </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-gray-700 w-full mt-8 pt-4 text-center text-gray-400 text-sm font-extralight">
      &copy; {new Date().getFullYear()} SkyGrowth. All rights reserved.
    </div>
  </footer>
);

export default Footer;
