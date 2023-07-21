"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import fixedDeposit from "../../assets/fixed-deposit.png";

function Slider() {
  const slides = [
    {
      css: "#F38800",
      label: [
        "Fixed Deposit",
        "Get high returns of up to 8.60% p.a",
        "on your investment",
      ],
      button: "Open FD",
      img: fixedDeposit,
    },
    {
      css: "#1D525B",
      label: ["Motor Insurance", "Save up to 85% on car insurance", "premiums"],
      button: "Apply Now",
      img: fixedDeposit,
    },
    {
      css: "##583c3d",
      label: [
        "Bajaj Finserv Securities Limited",
        "Open your Demat & Trading account",
        "or free",
      ],
      button: "Free Account",
      img: fixedDeposit,
    },
    {
      css: "#0178B7",
      label: [
        "Doctor Loan",
        "Avail funds of up to Rs. 55 lakh with",
        "quick processing",
      ],
      button: "Free Account",
      img: fixedDeposit,
    },

    {
      css: "#a397d8",
      label: [
        "Mutual Funds",
        "Open your free account & start",
        "in investing with just Rs. 100",
      ],
      button: "Free Account",
      img: fixedDeposit,
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
    <div className="max-w-[600px] h-[200px] w-full m-auto py-2 px-4 relative group">
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        style={{ backgroundColor: `${slides[currentIndex].css}` }}
        className="flex items-center justify-around w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="mx-2.5">
          {slides[currentIndex].label.map((item, id) => (
            <div key={id} className="p-0.5 text-md font-semibold text-white">
              {item}
            </div>
          ))}

          <button className="bg-white my-1.5 py-1 rounded-lg px-3 text-xs font-semibold ">
            {slides[currentIndex].button}
          </button>
        </div>

        <img src={slides[currentIndex].img} alt="" className="h-28" />
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
            className="text-md cursor-pointer "
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
