import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState(false);

  // Predefined list of usernames
  const predefinedUsernames = ["user1", "user2", "user3"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Check if the entered username is available
    if (name === "username") {
      setUsernameError(predefinedUsernames.includes(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password && !usernameError) {
      // Navigate to the profile creation page
      navigate('/createprofile');
    } else {
      // Display error message or take other action
      console.error('All fields are required or username is not available');
    }
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className=" flex m:flex-col m:h-screen h-[100vh] justify-between">
      <div className="img relative">
        <img
          className="h-[100vh] w-[35vw] m:hidden"
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="logo absolute top-5 left-5 m:left-[8.5rem]">
          <img width={'100px'} height={'100px'} src="./logo.png" alt="" />
        </div>
      </div>
      <div className=" w-[55vw] p-20 items-center m:w-full m:px-10 m:py-[10rem] m:flex m:flex-col">
        <h1 className="m:text-center m:mb-4">Already a Member? <a href="" className="text-blue-600">Sign In</a></h1>
        <h1 className="font-bold text-3xl mb-4 text-pink-600 m:text-center">Sign up to HHH</h1>
        <form onSubmit={handleSubmit} className="m:w-full m:max-w-md">
          <div className=" flex gap-16 mb-8 m:mb-4 m:gap-4">
            <div>
              <h3 className=" font-bold mb-2 text-pink-600">Name</h3>
              <input
                className="bg-gray-200 border-none rounded-md p-2 m:w-full"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-pink-600">Username</h3>
              <input
                className={`bg-gray-200 border-none rounded-md p-2 m:w-full ${usernameError ? 'border-red-500' : ''}`}
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {usernameError && (
                <p className="text-pink-600 text-xs mt-1 flex gap-1 items-center"><svg className="w-3 h-3 fill-pink-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>Username taken</p>
              )}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold mb-2 text-pink-600">Email</h3>
            <input
              className="bg-gray-200 border-none rounded-md p-2 w-[32vw] m:w-full"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <h3 className="font-bold mb-2 text-pink-600">Password</h3>
            <input
              className="bg-gray-200 border-none rounded-md p-2 w-[32vw] m:w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-2 mb-8 items-center justify-center m:mb-4">
            <input className="w-[25px] h-[25px] m:w-4 m:h-4 m:mr-2" type="checkbox" name="check" id="" required />
            <p>Creating an account means you're okay with our <a className="text-blue-600" href="">Terms of Service</a>, <a className="text-blue-600" href="">Privacy Policy</a>, and our default <a className="text-blue-600" href="">Notification settings</a>.</p>
          </div>
          <button className="bg-pink-400 p-3 rounded-xl text-white hover:bg-pink-600 m:w-full" type="submit">Create Account</button>
          <div className="text-sm mt-8 text-gray-400 m:mt-4 m:text-center">
            <p>This site is protected by reCAPTCHA and the Google <a href="" className="text-blue-600">Privacy Policy</a> and <a href="" className="text-blue-600">Terms of Servive</a> apply.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
