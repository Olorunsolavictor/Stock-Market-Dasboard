import React from "react";
import arrowRight from "../../assets/arrowRight.svg";

function Deposit() {
  const details = [
    {
      type: "NGN",
      status: "Success",
      time: "12-05-23 14:23",
      to: "FIRST BANK PLC | 3092764731 ",
    },
  ];

  return (
    <div className="0 w-full rounded text-[#4A4A68] gap-4 flex flex-col">
      <header className="text-start w-full text-xl md:text-2xl font-semibold">
        Payout
      </header>
      {details.map((detail, index) => (
        <div key={index} className="  flex  gap-2  flex-col">
          <div className="p-4 flex justify-between ">
            <p className="text-sm flex gap-1 font-medium">{detail.type}</p>
            <p className="text-sm font-medium text-green-500">
              {detail.status}
            </p>
          </div>
          <div className="p-4 flex justify-between ">
            <p className="text-sm font-medium">Time:</p>
            <p className="text-sm  ">{detail.time}</p>
          </div>
          <div className="p-4 flex justify-between ">
            <p className="text-sm ">To:</p>
            <p className="text-sm flex justify-between gap-1 items-center ">
              {detail.to}
            </p>
          </div>

          <button className="w-full rounded-lg p-4 text-sm bg-[#F8F8F8] flex justify-between items-center">
            <p>View on Blockchain Explorer</p>
            <img src={arrowRight} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Deposit;
