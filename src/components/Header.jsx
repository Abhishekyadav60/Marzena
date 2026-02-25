
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";
import { menuItems } from "../data/products";

import brandlogo from "../assets/brand-logo.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import hart from "../assets/hart.png";
import flowertop from "../assets/flower-top.png";
import flowerright from "../assets/flower-right.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full relative overflow-hidden ">
      <img src={flowertop} alt="flower" className="absolute top-0 left-0 w-[464px] h-[453px] opacity-30 pointer-events-none" />
      <img src={flowerright} alt="flower" className="absolute top-0 right-0 w-[464px] h-[453px] opacity-30 pointer-events-none" />

      {/* Brand Logo */}
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-4 relative z-10">
        <Link to="/">
          <img src={brandlogo} alt="Logo" className="w-40" />
        </Link>
      </div>
      
      <div className="w-full mb-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-3">

          {/* --- Desktop Layout --- */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex gap-9 text-zinc-800 font-sans">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path || "/"}
                  className={({ isActive }) => `hover:text-gray-500 transition ${isActive ? "font-bold border-b-2 border-zinc-800" : ""}`}
                >
                  {item.name || item} 
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Link to="/profile"><img src={user} className="w-6 cursor-pointer" alt="user" /></Link>
              <Link to="/wishlist"><img src={hart} className="w-6 cursor-pointer" alt="wishlist" /></Link>
              <Link to="/cart"><img src={cart} className="w-6 cursor-pointer" alt="cart" /></Link>
            </div>
          </div>
          
          {/* --- Mobile Layout Bar --- */}
          <div className="flex md:hidden items-center justify-between w-full relative z-30">
            <div className="flex items-center gap-6">
              <Link to="/profile"><img src={user} className="w-6 cursor-pointer" alt="user" /></Link>
              <Link to="/wishlist"><img src={hart} className="w-6 cursor-pointer" alt="wishlist" /></Link>
              <Link to="/cart"><img src={cart} className="w-6 cursor-pointer" alt="cart" /></Link>
            </div>
            <button className="text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
       
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 text-center bg-white shadow-md">
            <div className="flex flex-col ">
              {menuItems.map((item, index) => (
                <NavLink 
                  key={index} 
                  to={item.path || "/"}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-4 text-zinc-800 text-base font-medium border-b border-gray-50"
                >
                  {item.name || item}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;