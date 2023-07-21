import React, { useState } from 'react';
import './Dropdown.css';
import cover from "../../assets/products/cover.png";
import iphone from "../../assets/products/iphone.png";
import charger from "../../assets/products/charger.png";
import airpods from "../../assets/products/airpods.png";
const best_bundles = [
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
];

const books = [
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
];

const music = [
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
];

const DVD = [
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
];

const video = [
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
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // console.log(`Selected item: ${item}`);
    if($(item)==='All categories')
    {
      <div className="flex gap-4 py-4 px-2">
        {best_bundles.map((product, id) => (
          <div
            key={id}
            className="bg-[#E2EBFC] flex flex-col items-center gap-2 justify-center h-28 w-28 rounded-lg"
          >
            <img src={product.img} alt="hello" className="h-16" />
            <p className="text-xs font-semibold">{product.label}</p>
          </div>
        ))}
      </div>
    }
    if($(item)==='Books')
    {
      <div className="flex gap-4 py-4 px-2">
        {books.map((product, id) => (
          <div
            key={id}
            className="bg-[#E2EBFC] flex flex-col items-center gap-2 justify-center h-28 w-28 rounded-lg"
          >
            <img src={product.img} alt="hello" className="h-16" />
            <p className="text-xs font-semibold">{product.label}</p>
          </div>
        ))}
      </div>
    }
    if($(item)==='Music')
    {
      <div className="flex gap-4 py-4 px-2">
        {music.map((product, id) => (
          <div
            key={id}
            className="bg-[#E2EBFC] flex flex-col items-center gap-2 justify-center h-28 w-28 rounded-lg"
          >
            <img src={product.img} alt="hello" className="h-16" />
            <p className="text-xs font-semibold">{product.label}</p>
          </div>
        ))}
      </div>
    }
    if($(item)==='DVD')
    {
      <div className="flex gap-4 py-4 px-2">
        {DVD.map((product, id) => (
          <div
            key={id}
            className="bg-[#E2EBFC] flex flex-col items-center gap-2 justify-center h-28 w-28 rounded-lg"
          >
            <img src={product.img} alt="hello" className="h-16" />
            <p className="text-xs font-semibold">{product.label}</p>
          </div>
        ))}
      </div>
    }
    if($(item)==='Video')
    {
      <div className="flex gap-4 py-4 px-2">
        {best_bundles.map((product, id) => (
          <div
            key={id}
            className="bg-[#E2EBFC] flex flex-col items-center gap-2 justify-center h-28 w-28 rounded-lg"
          >
            <img src={product.img} alt="hello" className="h-16" />
            <p className="text-xs font-semibold">{product.label}</p>
          </div>
        ))}
      </div>
    }
    // You can perform any action here based on the selected item
  };

  const menuItems = ['All categories','Books', 'Videos', 'Music','DVD'];

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isOpen ? 'Close Dropdown' : 'Open Dropdown'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
