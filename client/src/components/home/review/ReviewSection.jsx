import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../../../utils/review";

export default function ReviewSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (2 seconds)
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:px-[120px] lg:py-20 px-10 py-5 bg-gradient-to-bl from-[#52394b]  to-[#1A1A1AE5] source-font tracking-wider">
      <div className="flex flex-col gap-5 items-center">
        <h4 className="review-header text-center md:text-5xl text-3xl font-bold comic-font">
          What industry experts say!
        </h4>
        <p className="text-[#FFFFFF99] md:text-base text-sm text-center max-w-[550px] source-font">
          Listen to what our industry experts have to say about their
          experiences at Tron Academy.
        </p>
      </div>
      <Slider {...settings} className="my-10">
        {reviews.map((x, index) => (
          <div key={x.id} className="px-2">
            <ReviewCard
              name={x.name}
              review={x.review}
              img={x.img}
              star={x.star}
              position={x.position}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
