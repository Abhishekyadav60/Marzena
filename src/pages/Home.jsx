import React from "react";
import main from "../assets/images/main.png";
import flower1 from "../assets/flower1.png";
import image1 from "../assets/images/image1.jpg";
import cart1 from "../assets/images/cart1.png";
import cart2 from "../assets/images/cart2.png";
import cart3 from "../assets/images/cart3.png";
import cart4 from "../assets/images/cart4.png";
import { FaStar } from "react-icons/fa";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import flower from "../assets/images/flower.png";
// import flowerTop from "../assets/flower-top.png";
import flowerLeft from "../assets/flower-left.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.jpg";
import review3 from "../assets/images/review3.jpg";
import frame from "../assets/images/frame.png";
import layer from "../assets/images/layer.png";
import vector from "../assets/images/vector.png";
import insta1 from "../assets/images/insta1.jpg";
import insta2 from "../assets/images/insta2.jpg";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.jpg";
import insta5 from "../assets/images/insta5.jpg";


const Home = () => {
  return (
    <>
      <section className="w-full relative">
        <img
          src={main}
          alt="banner"
          className="w-full h-[650px] object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-end px-16">
          <div className="max-w-lg text-right">
            <h1 className="text-2xl md:text-5xl font-serif text-black mb-6">
              ETERNAL ELEGANCE
            </h1>

            <p className="text-gray-700 flex justify-center text-center text-lg mb-8">
              Embrace Timeless Elegance — Where Tradition Meets Modern Grace
            </p>

            <button className="bg-[#d4a44f] text-black px-8 py-3 rounded-md font-bold hover:bg-[#b98d3f] transition duration-300">
              SHOP NOW
            </button>

          </div>
        </div>


      </section>

      
     <section className="relative bg-orange-50 py-16 px-6 md:px-12">
  <img
    src={flower1}
    alt="decor"
    className="absolute top-0 right-0 w-[400px] opacity-40 pointer-events-none rotate-180"
  />
  {/* Header */}
  <div className="flex justify-between items-center mb-12">
    <h2 className="text-4xl font-serif text-[#2f2f2f]">
      Collections
    </h2>
    <button className="text-sm underline text-[#2f2f2f]">
      View All
    </button>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Category 1 */}
    <div>
      <img
        src={cart1}
        alt="Category 1"
        className="rounded-xl w-[430.67px] h-[710px] object-cover"
      />
      <h3 className="mt-5 text-xl font-medium text-[#2f2f2f]">
        Category 1
      </h3>
    </div>

    {/* Category 2 */}
    <div>
      <img
        src={cart2}
        alt="Category 2"
        className="rounded-xl w-[430.67px] h-[710px] object-cover"
      />
      <h3 className="mt-5 text-xl font-medium text-[#2f2f2f]">
        Category 2
      </h3>
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-8">

      <div>
        <img
          src={cart3}
          alt="Category 3"
          className="rounded-xl w-[430.67px] h-[316px] object-cover"
        />
        <h3 className="mt-5 text-xl font-medium text-[#2f2f2f]">
          Category 3
        </h3>
      </div>

      <div>
        <img
          src={cart4}
          alt="Category 4"
          className="rounded-xl w-[430.67px] h-[312px] object-cover"
        />
        <h3 className="mt-5 text-xl font-medium text-[#2f2f2f]">
          Category 4
        </h3>
      </div>

    </div>
  </div>

</section>


 <section className="bg-white overflow-hidden py-6">
  <div className="whitespace-nowrap animate-marquee text-black text-4xl font-semibold">
    Lorem ipsum dolor sit amet consectetur adipisicing elit •

    Lorem ipsum dolor sit amet consectetur adipisicing elit •

    Lorem ipsum dolor sit amet consectetur adipisicing elit •
  </div>
</section>

{/* Best Sellers */}
<section className="relative bg-[rgba(250,238,227,1)] py-16 px-6 md:px-12 overflow-hidden">
      {/* Decorative Flower */}
      <img
        src={flower}
        alt="decor"
        className="absolute left-0 top-0 w-70 opacity-40 pointer-events-none"
      />
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-serif text-[#2f2f2f]">
          Best Sellers
        </h2>
        <button className="text-md underline text-[#2f2f2f]">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div>
          <div className="relative">
            <img
              src={p1}
              alt="product"
              className="rounded-xl w-full h-[470px] object-cover"
            />
            <span className="absolute top-0 left-0 rounded-tl-md bg-black text-white text-xs px-3 py-1">
              Bundle
            </span>
          </div>

          <p className="mt-4 text-sm text-[#4a4a4a]">
            Lorem ipsum vestibulum adipiscing
          </p>

          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-gray-600 ml-2">4.7</span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="font-semibold text-lg">₹ 18,000</span>
            <span className="line-through text-gray-500 text-sm">
              ₹ 22,500
            </span>
            <span className="text-sm text-gray-600">10% off</span>
          </div>

          <div className="flex gap-2 mt-3">
            <span className="w-4 h-4 bg-pink-400 rounded-full"></span>
            <span className="w-4 h-4 bg-red-400 rounded-full"></span>
            <span className="w-4 h-4 bg-black rounded-full"></span>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="relative">
            <img
              src={p2}
              alt="product"
              className="rounded-xl w-full h-[470px] object-cover"
            />
            <span className="absolute top-0 left-0 rounded-tl-md bg-black text-white text-xs px-3 py-1">
              Bundle
            </span>
          </div>

          <p className="mt-4 text-sm text-[#4a4a4a]">
            Lorem ipsum vestibulum adipiscing
          </p>

          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-gray-600 ml-2">4.7</span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="font-semibold text-lg">₹ 32,500</span>
            <span className="line-through text-gray-500 text-sm">
              ₹ 47,500
            </span>
            <span className="text-sm text-gray-600">10% off</span>
          </div>

          <div className="flex gap-2 mt-3">
            <span className="w-4 h-4 bg-pink-400 rounded-full"></span>
            <span className="w-4 h-4 bg-red-400 rounded-full"></span>
            <span className="w-4 h-4 bg-black rounded-full"></span>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div className="relative">
            <img
              src={p3}
              alt="product"
              className="rounded-xl w-[431px] h-[470px] object-cover"
            />
            <span className="absolute top-0 left-0 rounded-tl-md bg-black text-white text-xs px-3 py-1">
              Bundle
            </span>
          </div>

          <p className="mt-4 text-sm text-[#4a4a4a]">
            Lorem ipsum vestibulum adipiscing
          </p>

          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="text-gray-600 ml-2">4.7</span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span className="font-semibold text-lg">₹ 54,800</span>
            <span className="line-through text-gray-500 text-sm">
              ₹ 68,500
            </span>
            <span className="text-sm text-gray-600">10% off</span>
          </div>

          <div className="flex gap-2 mt-3">
            <span className="w-4 h-4 bg-pink-400 rounded-full"></span>
            <span className="w-4 h-4 bg-red-400 rounded-full"></span>
            <span className="w-4 h-4 bg-black rounded-full"></span>
          </div>
        </div>

      </div>
    </section>

    <section className="w-full bg-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-12">
        Why we do it better ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Card 1 */}
        <div className="bg-[#e8e0d6] rounded-xl p-10 text-center">
          <div className="flex justify-center mb-4">
            <FaStar className="text-yellow-400 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-gray-900">
            Lorem ipsum nulla
          </h3>
          <p className="text-md text-gray-600 leading-relaxed">
            Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#e8e0d6] rounded-xl p-10 text-center">
          <div className="flex justify-center mb-4">
            <FaStar className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-gray-800">
            Lorem ipsum nulla
          </h3>
          <p className="text-md text-gray-600 leading-relaxed">
            Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#e8e0d6] rounded-xl p-10 text-center">
          <div className="flex justify-center mb-4">
            <FaStar className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-gray-800">
            Lorem ipsum nulla
          </h3>
          <p className="text-md text-gray-600 leading-relaxed">
            Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#e8e0d6] rounded-xl p-10 text-center">
          <div className="flex justify-center mb-4">
            <FaStar className="text-yellow-400 text-4xl" />
          </div>
          <h3 className="font-semibold text-xl mb-3 text-gray-800">
            Lorem ipsum nulla
          </h3>
          <p className="text-md text-gray-600 leading-relaxed">
            Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.
          </p>
        </div>

      </div>
    </section>

    <section className="w-full relative overflow-hidden">
  <div className="w-full h-[300px] md:h-[600px] overflow-hidden">
    <img
      src={image1}
      alt="banner"
      className="w-full h-full object-cover object-[center_20%]"
    />
  </div>

  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 flex items-end justify-center text-center px-6 pb-10 md:pb-20">
    <div className="max-w-lg">
      <h1 className="text-2xl md:text-5xl text-white mb-6 font-javanese">
        Own the Moment
      </h1>
      <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold hover:bg-[#ddd7cd] transition duration-300">
        SHOP NOW
      </button>
    </div>
  </div>
</section>

{/* Category Section */}
    <section className="bg-[#f5f5f3] py-15 relative ">
  <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="w-full">
        <img
          src={image2}
          alt="fashion"
          className="w-full h-[420px] sm:h-[500px] md:h-[550px] object-cover rounded-lg"
        />
      </div>
       <img
        src={flowerLeft}  
         alt="flower"
         className="absolute pointer-events-none opacity-20 w-100 left-[1200px] right-0 top-0 rotate-[270deg]"
         />
      <div className="flex justify-center items-center text-center">
        <div className="max-w-md w-full">
          <h3 className="uppercase tracking-[4px] font-javanese font-serif text-2xl mb-6 text-gray-800">
            CATEGORY
          </h3>

          <p className="text-gray-800 leading-7 mb-8">
            Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non.
            Luctus sit libero urna viverra sed non dui elementum.
            Dolor et volutpat in non. Luctus sit libero urna viverra.
          </p>

          <div className="flex justify-center">
            <button className="bg-black text-white px-8 py-3 text-sm tracking-wider rounded-md hover:bg-gray-800 transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="md:order-2 w-full">
        <img
          src={image3}
          alt="fashion"
          className="w-full h-[420px] sm:h-[500px] md:h-[550px] object-cover rounded-lg"
        />
      </div>     
      {/* Content */}
      <div className="flex justify-center items-center text-center md:order-1">
        <div className="max-w-md w-full">
          <h3 className="uppercase tracking-[4px] font-javanese font-serif text-2xl mb-6 text-gray-800">
            CATEGORY
          </h3>
          <p className="text-gray-800 leading-7 mb-8">
            Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non.
            Luctus sit libero urna viverra sed non dui elementum.
            Dolor et volutpat in non. Luctus sit libero urna viverra.
          </p>

          <div className="flex justify-center">
            <button className="bg-black text-white px-8 py-3 text-sm tracking-wider rounded-md hover:bg-gray-800 transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

{/* Review Section */}
<section className="bg-[rgba(250,238,227,1)] py-15 px-6 relative">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 items-start">
    <div className="space-y-6 mt-35 md:col-span-1">
      <h2 className="text-2xl font-serif text-gray-800">
        Customer Reviews
      </h2>

      <p className="text-gray-600 text-md leading-6">
        Pellentesque ante neque, faucibus et delito an pretium vestibulum del varius quam.
      </p>

      <a href="#" className="underline text-gray-800 text-xl font-medium">
        View All
      </a>
      <img src={flower1} 
      alt="decoration" 
      className="pointer-events-none opacity-20 w-100  top-[5318.77px] rotate-[300deg]" />
    </div>

    {/* Review Cards */}
    <div className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div className="space-y-4">
        <img
          src={review1}
          alt="review"
          className="w-full h-[290px] object-cover rounded-xl"
        />

        {/* Stars */}
        <div className="flex gap-6 text-yellow-400 text-2xl">
          ★ ★ ★ ★ ★
        </div>

        <p className="font-inter font-normal text-base leading-6 tracking-normal text-gray-800">
          Pellentesque ante neque faucibus et delito pretium del varius quam.
          Temporibus autem quibusdam et officiis debitis aut rerum necessitatibus saepe del eveniet ut deluxa
        </p>

        <p className="text-gray-800 text-base font-normal font-inter ">
          voluptates repudiandae
        </p>
      </div>

      {/* Card 2 */}
      <div className="space-y-4">
        <img
          src={review2}
          alt="review"
          className="w-full h-[290px] object-cover rounded-xl"
        />

        <div className="flex gap-6 text-yellow-400 text-2xl">
          ★ ★ ★ ★ ★
        </div>

        <p className="font-inter font-normal text-base leading-6 tracking-normal text-gray-800">
          Pellentesque ante neque faucibus et delito pretium del varius quam.
          Temporibus autem quibusdam et officiis debitis aut rerum necessitatibus saepe del eveniet ut deluxa
        </p>

        <p className="text-gray-800 text-base font-normal font-inter">
          voluptates repudiandae
        </p>
      </div>

      {/* Card 3 */}
      <div className="space-y-4">
        <img
          src={review3}
          alt="review"
          className="w-full h-[290px] object-cover rounded-xl"
        />

        <div className="flex gap-6 text-yellow-400 text-2xl">
          ★ ★ ★ ★ ★
        </div>

        <p className="font-inter font-normal text-base leading-6 tracking-normal text-gray-800">
          Pellentesque ante neque faucibus et delito pretium del varius quam.
          Temporibus autem quibusdam et officiis debitis aut rerum necessitatibus saepe del eveniet ut deluxa
        </p>

        <p className="text-gray-800 text-base font-normal font-inter">
          voluptates repudiandae
        </p>
      </div>

    </div>
  </div>

  {/* Decorative Flower (optional image bottom left) */}
  {/* <img
    src={flower}
    alt="decoration"
    className="absolute bottom-0 left-0 w-52 opacity-40"
  /> */}
</section>


    <section className="py-17 px-6 md:px-12">
  
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Column 1 */}
    <div className="space-y-3">
      <img
        src={frame}
        alt="image"
        className="w-16 h-16 mx-auto"
      />
      <h1 className="text-2xl font-bold">
        Free Shipping
      </h1>
      <p className="text-gray-600">
        Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.
      </p>
    </div>

    {/* Column 2 */}
    <div className="space-y-3">
     <img src={layer}
        alt="image"
        className="w-16 h-16 mx-auto"
      />
      <h1 className="text-2xl font-bold">
        Easy Free Returns
      </h1>
      <p className="text-gray-600">
        Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.
      </p>
    </div>

    {/* Column 3 */}
    <div className="space-y-3">
      <img src={vector}
        alt="image"
        className="w-16 h-16 mx-auto"
      />
      <h1 className="text-2xl font-bold">
        Genuine Products
      </h1>
      <p className="text-gray-600">
        Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.
      </p>
    </div>

  </div>

</section>

{/* Instagram Section */}
<section className="bg-[rgba(250,238,227,1)] py-24">

  <div className="text-center">
    <div className="flex items-center justify-center gap-6 mb-6 px-4">
      <div className="h-[1px] bg-[#9c8f82] w-150"></div>
      <h2 className="font-serif text-xl md:text-xl text-[#2f2f2f]">
        Follow Us On Instagram
      </h2>

      <div className="h-[1px] bg-[#9c8f82] w-150"></div>
    </div>
    <p className="text-[#5e5e5e] mb-12 px-4">
      Lorem ipsum fames nunc curabitur massa vitae.
    </p>

    {/* Images */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      <img src={insta1} className="w-full rounded-xl aspect-[3/4] object-cover" />
      <img src={insta2} className="w-full rounded-xl aspect-[3/4] object-cover" />
      <img src={insta3} className="w-full rounded-xl aspect-[3/4] object-cover" />
      <img src={insta4} className="w-full  rounded-xl aspect-[3/4] object-cover" />
      <img src={insta5} className="w-full rounded-xl aspect-[3/4] object-cover" />
    </div>

    {/* Button */}
    <div className="mt-14">
      <button className="bg-[#b79c7f] rounded-md text-white px-10 py-3 text-md cursor-pointer tracking-[3px] hover:bg-[#a98c6d] transition">
        FOLLOW US
      </button>
    </div>

  </div>

</section>
  
    </>
  );
};

export default Home;