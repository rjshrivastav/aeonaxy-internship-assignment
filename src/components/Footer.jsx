import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-20 m:p-10">
      <div className="container mx-auto grid grid-cols-5 m:grid-cols-1 gap-8">
        <div>
            <img width={'100px'} height={'100px'} src="./logo.png" alt="logo" />
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et esse accusamus laboriosam iure minima nam, ipsum repellat placeat error!</p>
            <div className="social-links flex gap-5 mt-4 ">
                        <a href=""><svg className='fill-gray-500 hover:fill-gray-600' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                <path
                                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                            </svg></a>
                        <a href=""><svg className='fill-gray-500 hover:fill-gray-600' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg></a>
                        <a href=""><svg className='fill-gray-500 hover:fill-gray-600' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg></a>
                        <a href=""><svg className='fill-gray-500 hover:fill-gray-600' xmlns="http://www.w3.org/2000/svg" height="20" width="20"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg></a>
                    </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">For designers</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/go-pro" className="text-gray-600 hover:text-gray-800">
                Go Pro!
              </Link>
            </li>
            <li>
              <Link to="/explore-design-work" className="text-gray-600 hover:text-gray-800">
                Explore design work
              </Link>
            </li>
            <li>
              <Link to="/design-blog" className="text-gray-600 hover:text-gray-800">
                Design blog
              </Link>
            </li>
            <li>
              <Link to="/overtime-podcast" className="text-gray-600 hover:text-gray-800">
                Overtime podcast
              </Link>
            </li>
            <li>
              <Link to="/playoffs" className="text-gray-600 hover:text-gray-800">
                Playoffs
              </Link>
            </li>
            <li>
              <Link to="/weekly-warm-up" className="text-gray-600 hover:text-gray-800">
                Weekly Warm-Up
              </Link>
            </li>
            <li>
              <Link to="/refer-a-friend" className="text-gray-600 hover:text-gray-800">
                Refer a Friend
              </Link>
            </li>
            <li>
              <Link to="/code-of-conduct" className="text-gray-600 hover:text-gray-800">
                Code of conduct
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Hire designers</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/post-a-job" className="text-gray-600 hover:text-gray-800">
                Post a job opening
              </Link>
            </li>
            <li>
              <Link to="/post-a-freelance-project" className="text-gray-600 hover:text-gray-800">
                Post a freelance project
              </Link>
            </li>
            <li>
              <Link to="/search-for-designers" className="text-gray-600 hover:text-gray-800">
                Search for designers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-gray-600 hover:text-gray-800">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/support" className="text-gray-600 hover:text-gray-800">
                Support
              </Link>
            </li>
            <li>
              <Link to="/media-kit" className="text-gray-600 hover:text-gray-800">
                Media kit
              </Link>
            </li>
            <li>
              <Link to="/brands" className="text-gray-600 hover:text-gray-800">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/advertise-with-us" className="text-gray-600 hover:text-gray-800">
                Advertise with us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Directories</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/design-jobs" className="text-gray-600 hover:text-gray-800">
                Design jobs
              </Link>
            </li>
            <li>
              <Link to="/designers-for-hire" className="text-gray-600 hover:text-gray-800">
                Designers for hire
              </Link>
            </li>
            <li>
              <Link to="/freelance-designers-for-hire" className="text-gray-600 hover:text-gray-800">
                Freelance designers for hire
              </Link>
            </li>
            <li>
              <Link to="/tags" className="text-gray-600 hover:text-gray-800">
                Tags
              </Link>
            </li>
            <li>
              <Link to="/places" className="text-gray-600 hover:text-gray-800">
                Places
              </Link>
            </li>
            <li>
              <Link to="/design-assets" className="text-gray-600 hover:text-gray-800">
                Design assets
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">
          &copy; 2024 HHH. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-pinterest"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;