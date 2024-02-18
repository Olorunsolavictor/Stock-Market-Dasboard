import React from "react";
import bitcoin from "../../assets/bitcoin.svg";
import tether from "../../assets/tether.svg";
import arrowRight from "../../assets/arrowRight.svg";
interface AssetProps {
  handleSetView: (view: number) => void;
}
const Assets: React.FC<AssetProps> = ({ handleSetView }) => {
  const assets = [
    { icon: bitcoin, name: "Send USDT (TRC)" },
    { icon: tether, name: "Send USDT (BEP 20)" },
    { icon: bitcoin, name: "Send BTC" },
  ];

  return (
    <div className="w-full flex flex-col  py-4 gap-4 justify-center items-center text-black ">
      {assets.map((asset, index) => (
        <button
          onClick={() => handleSetView(4)}
          key={index}
          className="flex justify-between  items-center w-full rounded-lg  bg-[#F8F8F8] p-4 "
        >
          <div className="flex justify-start gap-2 items-center">
            <img src={asset.icon} alt="asset icon" />
            <p className="text-sm font-medium">{asset.name}</p>
          </div>
          <img src={arrowRight} alt="asset icon" />
        </button>
      ))}
    </div>
  );
};

export default Assets;
