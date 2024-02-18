import React from "react";
import arrowRight from "../../assets/arrowRight.svg";
import copyIcon from "../../assets/copyIcon.svg";
import tetherIcon from "../../assets/tether.svg";

function Deposit() {
  const details = [
    {
      type: "USDT",
      status: "Processing",
      time: "12-05-23 14:23",
      from: "0xye6637783yHGFt...",
      to: "0xye6637783yHGFt...",
      TXID: "0xye6637783yHGFt...",
      Height: "27438u47",
    },
  ];

  return (
    <div className="w-full rounded text-[#4A4A68] gap-4 flex flex-col">
      <header className="text-start w-full text-xl md:text-2xl font-semibold">
        Deposit
      </header>
      {details.map((detail, index) => (
        <div key={index} className="  flex  gap-2  flex-col">
          <div className="p-4 flex justify-between ">
            <p className="text-sm flex gap-1 font-medium">
              {detail.type}
              <span>
                <img src={tetherIcon} alt="" />
              </span>
            </p>
            <p className="text-sm font-medium text-[#CE9F09]">
              {detail.status}{" "}
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
              <button>
                <img src={copyIcon} alt="copy icon" />
              </button>
            </p>
          </div>
          <div className="p-4 flex justify-between ">
            <p className="text-sm ">From</p>
            <p className="text-sm flex justify-between gap-1 items-center">
              {detail.from}
              <button>
                <img src={copyIcon} alt="copy icon" />
              </button>
            </p>
          </div>
          <div className="p-4 flex justify-between ">
            <p className="text-sm ">TXID</p>
            <p className="text-sm flex justify-between gap-1 items-center">
              {detail.TXID}
              <button>
                <img src={copyIcon} alt="copy icon" />
              </button>
            </p>
          </div>
          <div className="p-4 flex justify-between ">
            <p className="text-sm ">Height</p>
            <p className="text-sm ">{detail.Height}</p>
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
