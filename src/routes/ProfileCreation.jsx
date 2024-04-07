// ProfileCreation.jsx
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

const ProfileCreation = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
      checkIfNextEnabled(location);
      localStorage.setItem("avatar", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
    checkIfNextEnabled(value);
  };

  const checkIfNextEnabled = (currentLocation) => {
    setIsNextDisabled(!avatar || !currentLocation);
  };

  const handleNextClick = () => {
    // Handle next button click
    navigate('/selectcards');
    // You can navigate to the next page or perform any other action here
  };

  return (
    <>
      <nav className="h-[15vh]">
        <div className="logo absolute top-5 left-10 flex gap-10 items-center m:ml-[6.5rem]">
          <img width={'80px'} height={'80px'} src="./logo.png" alt="logo" />
        </div>
      </nav>
      <div className="flex justify-center items-center">
        <div className="mx-auto p-6 rounded-md">
          <h1 className="text-2xl font-bold text-pink-600 mb-4 m:text-center">
            Welcome! Let's create your profile
          </h1>
          <p className="mb-4 m:text-center m:text-sm">
            Let others get to know you better! You can do these later
          </p>
          <div>
            <h1 className="font-bold mb-2 text-lg m:text-center">Add an avatar</h1>
            <div className="flex gap-10 m:flex-col items-center mb-4">
              {avatar ? (
                <div className="rounded-full border-slate-400 border-2 border-dotted w-[200px] h-[200px] flex justify-center items-center m:mb-2">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-[200px] h-[200px] rounded-full object-cover"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-full border-slate-400 border-2 border-dotted w-[200px] h-[200px] flex justify-center items-center m:mb-2">
                  <img
                    className="w-[25px] h-[25px]"
                    src="./cam.svg"
                    alt="image"
                  />
                </div>
              )}
              <div className="p-12 m:p-2">
                <input
                  type="file"
                  id="file"
                  className="block file:bg-gray-100 file:border-gray-300 file:font-bold file:rounded-md file:cursor-pointer m:file:ml-12"
                  name='file'
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
                <a href="/" className="text-gray-400 font-semibold m:text-center m:block m:mt-2">
                  &gt; Or choose one of our defaults
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-2 font-bold text-lg m:text-center">Add your location</p>
            <input
              type="text"
              placeholder="Enter a location"
              value={location}
              onChange={handleLocationChange}
              className="w-full px-3 py-2  border-gray-300 rounded-md focus:border-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <button
            className={`p-14 mt-8 bg-pink-600 text-white py-2 font-bold rounded-md hover:bg-pink-700 transition-colors duration-300 m:w-full ${
              isNextDisabled && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCreation;
