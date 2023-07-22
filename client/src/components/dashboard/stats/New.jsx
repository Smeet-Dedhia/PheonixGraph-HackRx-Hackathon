"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import cover from "../../../assets/products/cover.png";
import iphone from "../../../assets/products/iphone.png";
import charger from "../../../assets/products/charger.png";
import airpods from "../../../assets/products/airpods.png";

function New() {
  const slides = [
    {
      id: 1,
      label: "Electronics",
      list: [
        {
          label: "Phone Case",
          img: cover,
        },
        {
          label: "iPhone 11",
          img: iphone,
        },
        {
          label: "Charger",
          img: charger,
        },
        {
          label: "Airpods Pro",
          img: airpods,
        },
      ],
    },
    {
      id: 2,
      label: "Lifestyle",
      list: [
        {
          label: "iPhone 11",
          img: iphone,
        },
        {
          label: "Phone Case",
          img: cover,
        },
        {
          label: "Airpods Pro",
          img: airpods,
        },

        {
          label: "Charger",
          img: charger,
        },
      ],
    },
    {
      id: 3,
      label: "Sports",
      list: [
        {
          label: "Phone Case",
          img: cover,
        },
        {
          label: "iPhone 11",
          img: iphone,
        },
        {
          label: "Charger",
          img: charger,
        },
        {
          label: "Airpods Pro",
          img: airpods,
        },
      ],
    },
    {
      id: 3,
      label: "Books",
      list: [
        {
          label: "Phone Case",
          img: cover,
        },
        {
          label: "iPhone 11",
          img: iphone,
        },
        {
          label: "Charger",
          img: charger,
        },
        {
          label: "Airpods Pro",
          img: airpods,
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1800px] h-[230px] w-full m-auto px-4 relative group bg-white rounded-lg">
      <div className="flex items-center justify-between pt-2">
        <h2 className="font-semibold pt-1">Popular Bundles</h2>
        <p>{slides[currentIndex].label}</p>
      </div>

      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        // style={{ backgroundColor: `${slides[currentIndex].css}` }}
        className="flex items-center justify-around w-[550px] h-full  rounded-2xl bg-center bg-cover duration-500"
      >
        {slides[currentIndex].list.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center h-38 w-40 mx-2 rounded-xl p-2 bg-[#E2EBFC]"
          >
            <img src={item.img} alt="" />
            <h2 className="text-sm">{item.label}</h2>
            {console.log(item.label)}
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="hidden cursor-pointer "
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default New;
