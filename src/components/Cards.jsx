import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Cards = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Handle next button click
    navigate('/varifyemail');
    // You can navigate to the next page or perform any other action here
  };

  const options = [
    {
      id: 1,
      title: "I'm a designer looking to share my work",
      icon: "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      id: 2,
      title: "I'm looking to hire a designer",
      icon: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
    {
      id: 3,
      title: "I'm looking for design inspiration",
      icon: "https://images.unsplash.com/photo-1549545931-59bf067af9ab?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <div className="card-conatiner flex justify-around items-center m:flex-wrap m:p-5 m:gap-10">
        {options.map((option) => (
          <div
            key={option.id}
            className={`relative border-[3px] h-[25rem] w-[20rem] max-w-[25rem] rounded-3xl p-4 mb-4 flex flex-col justify-center items-center ${
              selectedOptions.some((o) => o.id === option.id) ? "border-pink-600" : " border-gray-300"
            }`}
          >
            <div className="product-image transform transition-transform translate-y-[-2.5rem] duration-500 ease-in-out flex flex-col justify-center items-center">
              <img
                className={`w-[200px] rounded-full h-[200px] border-[3px] fill-pink-600 ${selectedOptions.some((o) => o.id === option.id) ? "border-pink-600" : " border-gray-300"}`}
                src={option.icon}
                alt="img"
              />
              <div className="flex flex-col items-center text-center">
              <h3 className="font-extrabold text-2xl text-pink-600">
                {option.title}
              </h3>
              {selectedOptions.some((o) => o.id === option.id) &&
                option.description && (
                  <p className="text-sm font-semibold text-gray-400  mb-[5rem]">
                    {option.description}
                  </p>
                )}
            </div>
            </div>
            
            <input
                type="checkbox"
                checked={selectedOptions.some((o) => o.id === option.id)}
                onChange={() => handleOptionSelect(option)}
                className="mt-4 w-[25px] h-[25px] focus:ring-transparent border-gray-300 rounded-full text-pink-600 absolute bottom-[4rem]"
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
