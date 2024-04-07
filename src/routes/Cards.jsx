import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Cards = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Handle next button click
    navigate('/emailvarification');
    // You can navigate to the next page or perform any other action here
  };

  const options = [
    {
      id: 1,
      title: "I'm a designer looking to share my work",
      icon: "./card_img/a.svg",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      id: 2,
      title: "I'm looking to hire a designer",
      icon: "./card_img/b.svg",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      id: 3,
      title: "I'm looking for design inspiration",
      icon: "./card_img/c.svg",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
  ];

  const handleOptionSelect = (option) => {
    if (selectedOptions.some((o) => o.id === option.id)) {
      setSelectedOptions(selectedOptions.filter((o) => o.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isFinishDisabled = selectedOptions.length === 0;

  return (
    <>
      <nav className="h-[15vh] relative flex gap-10 items-center">
        <div className="logo absolute top-5 left-5 m:left-[10rem]">
        <img className=" m:left-[6.5rem]" width={'60px'} height={'60px'} src="./logo.png" alt="" />
        </div>
        <div className="absolute top-8 left-[7rem] m:top-8 m:left-5">
          <Link to='/profilecreation'><button className="bg-gray-100 h-[2.5rem] w-[2.5rem] rounded-md text-gray-500 hover:text-gray-800 font-extrabold">&lt;</button>
          </Link>
        </div>
      </nav>
      <div className="text text-center mb-14">
        <h2 className="text-4xl font-semibold mb-2 text-pink-600">What brings you to HHH?</h2>
        <p className="text-gray-600">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="card-conatiner flex justify-around items-center m:flex-wrap m:p-5">
        {options.map((option) => (
          <div
            key={option.id}
            className={`relative border h-[20rem] w-[25rem] max-w-[25rem] border-gray-300 rounded p-4 mb-4 flex flex-col justify-center items-center ${
              selectedOptions.includes(option) ? "" : ""
            }`}
          >
            <div className="product-image transform transition-transform translate-y-[-2.5rem] duration-500 ease-in-out flex flex-col justify-center items-center">
              <img
                className="w-[150px] h-[150px] fill-pink-600"
                src={option.icon}
                alt="img"
              />
              <div className="flex flex-col items-center text-center">
              <h3 className="font-extrabold text-2xl">
                {option.title}
              </h3>
              {selectedOptions.some((o) => o.id === option.id) &&
                option.description && (
                  <p className="text-sm text-gray-600">
                    {option.description}
                  </p>
                )}
            </div>
            </div>
            
            <input
                type="checkbox"
                checked={selectedOptions.some((o) => o.id === option.id)}
                onChange={() => handleOptionSelect(option)}
                className="mt-4 w-[25px] h-[25px] focus:ring-transparent border-gray-300 rounded-full text-pink-600"
              />
          </div>
        ))}
      </div>
      <div className="flex justify-center m:mb-6">
        <button
          className={`bg-pink-600 text-white font-bold w-[8rem] h-10  text-center rounded ${
            isFinishDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isFinishDisabled}
          onClick={handleNextClick}
        >
          Finish
        </button>
      </div>
    </>
  );
};

export default Cards;
