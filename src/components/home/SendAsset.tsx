import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import copyIcon from "../../assets/copyIcon.svg";
import barcode from "../../assets/barcode.svg";
import Warning from "./Warning";

interface SendAssetProps {
  handleSetView: (view: number) => void;
}
const SendAsset: React.FC<SendAssetProps> = ({ handleSetView }) => {
  return (
    <div className=" md:h-screen flex flex-col gap-2 w-full md:py-10">
      <header className="p-4 flex justify-start gap-4 items-center w-full ">
        <button onClick={() => handleSetView(3)}>
          <img src={arrowBack} alt="arrow back" />
        </button>
        <p className="font-bold">Send asset</p>
      </header>
      <p className="md:text-sm text-xs text-start">
        Select any crypto assets to deposit and instantly convert to cash.
      </p>
      <Warning />
      <p className="md:text-sm text-xs">
        Send only <span className="font-bold text-sm">USDT TRC20</span> to this
        wallet address
      </p>

      <div className="flex justify-center flex-col p-4 gap-4 md:text-sm text-xs text-[#8C8CA1] items-center">
        <p>Scan the QR code</p>
        <img src={barcode} alt="bar code" />
        <p>or copy wallet address</p>
      </div>
      <div className="p-4 w-full bg-[#F8F8F8] rounded-xl flex justify-between items-center">
        <div className="w-[65%] md:text-sm text-xs text-[#1E194E] flex flex-col justify-center items-start gap-2">
          <p>Wallet Address:</p>
          <p className="hidden md:block font-medium">
            0xy83929ruhdi23uhbd92bf9g2bjbfgsttyehdndnjk...
          </p>
          <p className="md:hidden font-medium">
            0xy83929ruhdi23uhutjtuhhdhfjk...
          </p>
        </div>
        <button className="py-2 px-3 flex gap-1 text-xs   bg-[#9CDCD9] rounded-lg">
          <img src={copyIcon} alt="copy icon" />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

export default SendAsset;
