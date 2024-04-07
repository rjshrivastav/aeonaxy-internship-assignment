import React from 'react'
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const EmailVarification = () => {
  return (
    <>
    <Header />
    <div className="bg-white-100 min-h-screen py-8 items-center">
        <div className="max-w-xl mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold mb-2 text-center">
            Please verify your email...
          </h2>
          <div className="flex justify-center items-center ml-[9.5rem] w-[200px] h-[200px] fill-slate-300 m:ml-[4rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
          </div>
          <p className="text-gray-700 mb-4 text-center">
            Please verify your email address. We've sent a confirmation email
            to:
          </p>
          <p className="text-gray-800 font-bold text-center mb-4">
            account@refero.design
          </p>
          <div className="text-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Resend the confirmation email
            </button>
            <p className="text-gray-600 mt-4">
              Didn't receive the email?{' '}
              <span className="text-pink-500">Check your Spam folder</span>, it
              may have been caught by a filter. If you still don't see it, you
              can{' '}
              <span className="text-pink-500 font-bold cursor-pointer">
                resend the confirmation email
              </span>
              .
            </p>
            <p className="text-gray-600 mt-4">
              Wrong email address?{' '}
              <span className="text-pink-500 font-bold cursor-pointer">
                Change it
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default EmailVarification