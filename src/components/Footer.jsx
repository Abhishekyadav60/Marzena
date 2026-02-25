import React from "react";
import { footerData } from "../data/products";

const Footer = () => {
  const { decorations, brand, links, newsletter, payments } = footerData;

  return (
    <footer className="relative bg-[#e9dfd6] overflow-hidden">
      <img
        src={decorations.left}
        alt="decor"
        className="absolute left-0 bottom-0 w-20 md:w-xs opacity-30 pointer-events-none"
      />

      <img
        src={decorations.top}
        alt="decor"
        className="absolute left-10 top-0 w-52 md:w-screen opacity-20 pointer-events-none"
      />

      <img
        src={decorations.right}
        alt="decor"
        className="absolute right-0 bottom-0 md:w-screen opacity-20 pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">

        {/* Brand Section */}
        <div>
          <img src={brand.logo} alt="brand" className="w-35 mb-4" />
          <p className="mt-4 text-sm text-[#5a5a5a]">
            {brand.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {brand.socials.map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow"
              >
                <img src={Icon} alt="social" />
              </div>
            ))}
          </div>
        </div>
        
        {links.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold pl-5 text-[#2f2f2f] mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2 pl-5 text-sm text-[#5a5a5a]">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#2f2f2f] mb-4">
            {newsletter.title}
          </h3>

          <p className="text-sm text-[#5a5a5a] mb-4">
            {newsletter.description}
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
            © {new Date().getFullYear()}, All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 items-center">
            {payments.map((card, i) => (
              <img key={i} src={card} alt="payment" className="h-8" />
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;


