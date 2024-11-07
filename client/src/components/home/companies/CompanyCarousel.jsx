import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = [
  "/company/dahab.png",
  "/company/global.png",
  "/company/handcar.png",
  "/company/hypsway.png",
  "/company/lebaneese.webp",
  "/company/osma.png",
  "/company/pizza-club.png",
  "/company/tikka.png",
];

export default function CompanyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
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
        <div
          key={index}
          className="flex justify-center items-center mx-auto place-items-center"
        >
          <img src={x} className="w-[150px] object-cover" />
        </div>
      ))}
    </Slider>
  );
}
