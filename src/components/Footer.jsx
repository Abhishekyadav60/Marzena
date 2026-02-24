import React from "react";

import flowerLeft from "../assets/flower-left.png";
import flowerTop from "../assets/flower-top.png";
import flowerRight from "../assets/flower-right.png";

import amex from "../assets/icons/amex.png";
import visa from "../assets/icons/visa.png";
import mastercard from "../assets/icons/mastercard.png";
import apple from "../assets/icons/apple.png";
import paypal from "../assets/icons/paypal.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import youtube from "../assets/icons/youtube.png";
import visa1 from "../assets/icons/visa1.png";
import google from "../assets/icons/google.png";
import x from "../assets/icons/x.png";
import elementLogo from "../assets/elements/elementlogo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#e9dfd6] overflow-hidden">
      <img
        src={flowerLeft}
        alt="decor"
        className="absolute left-0 bottom-0 w-20 md:w-xs opacity-30 pointer-events-none"
      />

      <img
        src={flowerTop}
        alt="decor"
        className="absolute left-10 top-0 w-52 md:w-screen opacity-20 pointer-events-none"
      />

      <img
        src={flowerRight}
        alt="decor"
        className="absolute right-0 bottom-0 md:w-screen opacity-20 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">

        {/* Brand */}
        <div>
          <img src={elementLogo} alt="Element" className="w-35 mb-4" />
          <p className="mt-4 text-sm text-[#5a5a5a]">
            The Dreamed One
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[facebook, instagram, linkedin, youtube, x].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow"
                >
                  <img src={Icon} alt="social" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="text-lg font-semibold pl-5 text-[#2f2f2f] mb-4">
            Home
          </h3>
          <ul className="space-y-2 pl-5 text-sm text-[#5a5a5a]">
            <li>Nav 1</li>
            <li>Nav 2</li>
            <li>Nav 3</li>
            <li>Nav 4</li>
            <li>Nav 5</li>
            <li>Nav 6</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold pl-5 text-[#2f2f2f] mb-4">
            Other links
          </h3>
          <ul className="space-y-2 text-sm pl-5 text-[#5a5a5a]">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>Link 6</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#2f2f2f] mb-4">
            Newsletter
          </h3>
          <p className="text-sm text-[#5a5a5a] mb-4">
            Get new products promotion in your inbox.
          </p>

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-3 rounded-md bg-[#C1A58B] text-white placeholder-white outline-none"
          />

          <button className="w-full mt-3 py-3 rounded-md cursor-pointer bg-white text-[#2f2f2f] font-medium hover:bg-[#2f2f2f] hover:text-white transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-[#d6ccc3] z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5a5a5a]">

          <p className="text-center md:text-left">
            © 2025, All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 items-center">
            {[amex, apple,google, visa1, mastercard, paypal, visa].map(
              (card, i) => (
                <img key={i} src={card} alt="payment" className="h-8" />
              )
            )}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;