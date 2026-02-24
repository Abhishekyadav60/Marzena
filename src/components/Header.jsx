import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { menuItems } from "../data/products";

import BrandLogo from "../assets/Brand-logo.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import hart from "../assets/hart.png";
import flowerTop from "../assets/flower-top.png";
import flowerRight from "../assets/flower-right.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full relative overflow-hidden">
      <img
        src={flowerTop}
        alt="flower"
        className="absolute top-0 left-0 w-[464px] h-[453px] opacity-30 pointer-events-none"
      />
      <img
        src={flowerRight}
        alt="flower"
        className="absolute top-0 right-0 w-[464px] h-[453px] opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-4 relative z-10">
        <img src={BrandLogo} alt="Logo" className="w-40" />
      </div>
     
      <div className="w-full mb-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex gap-9 text-zinc-800 font-sans">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-gray-500 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <img src={user} className="w-6 cursor-pointer" />
              <img src={hart} className="w-6 cursor-pointer" />
              <img src={cart} className="w-6 cursor-pointer" />
            </div>
          </div>
         
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex items-center gap-6">
              <img src={user} className="w-6 cursor-pointer" />
              <img src={hart} className="w-6 cursor-pointer" />
              <img src={cart} className="w-6 cursor-pointer" />
            </div>
            <button
              className="text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 text-center bg-white shadow-md">
            {menuItems.map((item, index) => (
              <div key={index} className="text-sm font-medium border-b pb-2">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

    </header>
  );
};

export default Header;