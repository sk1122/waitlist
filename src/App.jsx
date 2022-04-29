import React from "react";

const App = () => {
  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto flex items-center justify-center lg:justify-between py-3 px-4 xl:px-0">
          <div className=" text-white font-bold text-2xl lg:text-xl font-inter">
            WagPay
          </div>
          <button className="bg-[#3C43EE] py-3 px-6 font-semibold text-white hidden lg:flex space-y-1 items-center ">
            <span>Join waitlist</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="iconify iconify--ic"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen lg:-mt-32">
        <h2 className="text-[#FFFEFE] text-center font-cerebri text-2xl font-bold opacity-50 mb-8">
          One Wonderful System, Many Solutions
        </h2>
        <h1 className="text-white font-inter text-6xl font-bold text-center mb-12 md:max-w-3xl lg:max-w-5xl">
          Making cross chain seamless
          <br /> and taking over the world
        </h1>
        <button className="bg-[#3C43EE] py-3 px-6 font-medium text-white flex items-center justify-center">
          Join waitlist
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ic"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default App;
