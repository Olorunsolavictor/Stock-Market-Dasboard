import React from "react";


const OnboardingLeftSide: React.FC = () => {
  return (
    <div className="bg-[#002255] px-[16%] flex flex-col justify-between items-center py-[120px] w-full h-screen">
      <div className="w-full flex justify-start items-center">
        {/* <img src={logo} height={110} width={110} alt="Cwito Logo" /> */}
        <h1 className="text-white text-5xl font-bold">Swift</h1>
      </div>
      <div className=" w-full flex justify-start items-center">
        <h1 className="text-[56px]  leading-[68px] text-gray-200 text-start font-bold">
        Your Finance Manager
        </h1>
      </div>
    </div>
  );
};

export default OnboardingLeftSide;
