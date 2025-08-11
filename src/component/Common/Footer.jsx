import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaMapLocationDot, FaTwitter } from "react-icons/fa6";
import logo from '../../assets/logo.png'
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="footer sm:footer-horizontal justify-center xl:max-w-10/12 max-lg:container mx-auto text-base-content p-10 gap-10 md:gap-20">
        <aside className="flex mx-auto flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <img src={logo} alt="logo" className="rotate-90 w-14" />
          <div>
            <h3 className="text-center text-lg font-bold">Study-Hive</h3>
            <br />
            Providing reliable dev since 1992
          </div>
          
        </aside>
        <nav className="">
          <h6 className="footer-title text-2xl text-heading font-bold">Contact us</h6>
          <a className="link link-hover flex items-center gap-3 text-lg"><FaMapLocationDot className="text-2xl text-main"/> 420 Love Sreet 133/2 Street NewYork</a>
          <a className="link link-hover flex items-center gap-3 text-lg"><IoMdMail className="text-2xl text-main"/> info.contact@gmail.com</a>
          <a className="link link-hover flex items-center gap-3 text-lg"><MdOutlinePhoneInTalk className="text-2xl text-main"/> 012 345 678 9101</a>
          <div className="flex justify-center mt-4">
            <FaFacebookF className="text-blue-600 text-2xl mr-3" />
            <FaInstagram className="text-pink-600 text-2xl mr-3" />
            <FaLinkedinIn className="text-blue-700 text-2xl mr-3" />
            <FaGithub className="text-gray-800 text-2xl" />
          </div>
        </nav>
        
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Study Hive dev</p>
  </aside>
</footer>
    </footer>
  );
};

export default Footer;
