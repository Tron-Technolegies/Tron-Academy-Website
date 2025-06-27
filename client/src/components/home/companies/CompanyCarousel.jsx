import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = [
  { src: "/company/dahab.png", href: "https://dahabminers.com" },
  {
    src: "/company/global.png",
    href: "https://globalfuturesc.com/",
  },
  { src: "/company/handcar.png", href: "#" },
  {
    src: "/company/hypsway.png",
    href: "https://www.hypsway.com/",
  },
  {
    src: "/company/lebaneese.webp",
    href: "https://lebanesemill.ae/",
  },
  {
    src: "/company/osma.png",
    href: "https://osmacosmetics.com/",
  },
  {
    src: "/company/pizza-club.png",
    href: "https://pizzakebabclub.com/",
  },
  {
    src: "/company/tikka.png",
    href: "https://tikkatonight.com/",
  },
  {
    src: "/company/indus.png",

  },
  {
    src: "/comapny/precious.png",
    href :"https://preciousstores.com/",
  },
  {
    src: "/company/signature.png",
    href: "https://signature-d-world.netlify.app/",
  },
  
  {
    src : "/comapny/earthcraft.png",
    href: "https://earthcraftrealty.com/"
  }
];

export default function CompanyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (2 seconds)

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="my-10">
      {url.map((x, index) => (
        <a
          href={x.href}
          target="_blank"
          key={index}
          className="flex justify-center px-12 items-center mx-auto place-items-center"
        >
          <img src={x.src} className="w-[150px] object-cover" />
        </a>
      ))}
    </Slider>
  );
}
