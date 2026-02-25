import flowerleft from "../assets/flower-left.png";
import flowertop from "../assets/flower-top.png";
import flowerright from "../assets/flower-right.png";

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
import elementlogo from "../assets/elements/elementlogo.png";
// Menu items for header
// export const menuItems = [
//   "Home",
//   "Category 1",
//   "Best Sellers",
//   "Contact Us",
//   "About",
// ];

export const menuItems = [
  { name: "Home", path: "/" },
  { name: "Category 1", path: "/category-1" },
  { name: "Best Sellers", path: "/best-sellers" },
  { name: "Contact Us", path: "/contact" },
  { name: "About", path: "/about" },
];

// Footer data
export const footerData = {
  decorations: {
    left: flowerleft,
    top: flowertop,
    right: flowerright,
  },

  brand: {
    logo: elementlogo,
    tagline: "The Dreamed One",
    socials: [facebook, instagram, linkedin, youtube, x],
  },

  links: [
    {
      title: "Home",
      items: ["Nav 1", "Nav 2", "Nav 3", "Nav 4", "Nav 5", "Nav 6"],
    },
    {
      title: "Other links",
      items: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"],
    },
  ],

  newsletter: {
    title: "Newsletter",
    description: "Get new products promotion in your inbox.",
  },

  payments: [amex, apple, google, visa1, mastercard, paypal, visa],
};


import main from "../assets/images/main.png";
import cart1 from "../assets/images/cart1.png";
import cart2 from "../assets/images/cart2.png";
import cart3 from "../assets/images/cart3.png";
import cart4 from "../assets/images/cart4.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.png";
// import image3 from "../assets/images/image3.png";
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

// ================= DATA OBJECT =================

export const homeData = {
  hero: {
    image: main,
    title: "ETERNAL ELEGANCE",
    subtitle:
      "Embrace Timeless Elegance — Where Tradition Meets Modern Grace",
    button: "SHOP NOW",
  },

  collections: {
    heading: "Collections",
    button: "View All",
    items: [
      { id: 1, title: "Category 1", image: cart1, height: "h-[710px]" },
      { id: 2, title: "Category 2", image: cart2, height: "h-[710px]" },
      { id: 3, title: "Category 3", image: cart3, height: "h-[316px]" },
      { id: 4, title: "Category 4", image: cart4, height: "h-[312px]" },
    ],
  },

  marquee: {
    text: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    ],
  },

  bestSellers: {
    heading: "Best Sellers",
    button: "View All",
    items: [
      {
        id: 1,
        image: p1,
        title: "Lorem ipsum vestibulum adipiscing",
        price: "₹ 18,000",
        oldPrice: "₹ 22,500",
        discount: "10% off",
        rating: "4.7",
        tag: "Bundle",
      },
      {
        id: 2,
        image: p2,
        title: "Lorem ipsum vestibulum adipiscing",
        price: "₹ 32,500",
        oldPrice: "₹ 47,500",
        discount: "10% off",
        rating: "4.7",
        tag: "Bundle",
      },
      {
        id: 3,
        image: p3,
        title: "Lorem ipsum vestibulum adipiscing",
        price: "₹ 54,800",
        oldPrice: "₹ 68,500",
        discount: "10% off",
        rating: "4.7",
        tag: "Bundle",
      },
    ],
  },

   whySection: {
    heading: "Why we do it better ?",
    items: [
      {
        id: 1,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
      {
        id: 2,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
      {
        id: 3,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
      {
        id: 4,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
    ],
  },

  banner: {
    image: image1,
    title: "Own the Moment",
    button: "SHOP NOW",
  },

  // categorySection: [
  //   {
  //     id: 1,
  //     image: image2,
  //     title: "CATEGORY",
  //     desc:
  //       "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum.",
  //     button: "SHOP NOW",
  //   },
  //   {
  //     id: 2,
  //     image: image3,
  //     title: "CATEGORY",
  //     desc:
  //       "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum.",
  //     button: "SHOP NOW",
  //   },
  // ],

   categories: [
    {
      id: 1,
      title: "CATEGORY",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra .",
      image: image1,
      reverse: false,
    },
    {
      id: 2,
      title: "CATEGORY",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra .",
      image: image2,
      reverse: true,
    }
  ],

  reviews: {
    heading: "Customer Reviews",
    subtext:
      "Pellentesque ante neque, faucibus et delito an pretium vestibulum del varius quam.",
    button: "View All",
    items: [
      {
        id: 1,
        image: review1,
        text:
          "Pellentesque ante neque faucibus et delito pretium del varius quam Temporibus autem quibusdam et officiis debitis aut rerum necessitatibus saepe del eveniet ut deluxa .",
        name: "voluptates repudiandae",
      },
      {
        id: 2,
        image: review2,
        text:
          "Pellentesque ante neque faucibus et delito pretium del varius quam Temporibus autem quibusdam et officiis debitis aut rerum necessitatibus saepe del eveniet ut deluxa.",
        name: "voluptates repudiandae",
      },
      {
        id: 3,
        image: review3,
        text:
          "Pellentesque ante neque faucibus et delito pretium del varius quam Temporibus autem quibusdam et officiis debitis aut rerum necessitatibus saepe del eveniet ut deluxa.",
        name: "voluptates repudiandae",
      },
    ],
  },

  features: [
    {
      id: 1,
      image: frame,
      title: "Free Shipping",
      desc:
        "Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.",
    },
    {
      id: 2,
      image: layer,
      title: "Easy Free Returns",
      desc:
        "Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.",
    },
    {
      id: 3,
      image: vector,
      title: "Genuine Products",
      desc:
        "Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.",
    },
  ],

  instagram: {
    heading: "Follow Us On Instagram",
    subtext: "Lorem ipsum fames nunc curabitur massa vitae.",
    button: "FOLLOW US",
    images: [insta1, insta2, insta3, insta4, insta5],
  },
};