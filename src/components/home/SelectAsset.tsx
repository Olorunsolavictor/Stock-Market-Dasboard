import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import Warning from "./Warning";
import Assets from "./Assets";
interface SelectAssetProps {
  handleSetView: (view: number) => void;
}
const SelectAsset: React.FC<SelectAssetProps> = ({ handleSetView }) => {
  return (
    <div className=" md:h-screen flex flex-col gap-2 w-full md:py-10">
      <header className="p-4 flex justify-start gap-4 items-center w-full ">
        <button onClick={() => handleSetView(2)}>
          <img src={arrowBack} alt="" />
        </button>
        <p className="font-bold">Select asset</p>
      </header>
      <p className="md:text-sm text-xs text-start">
        Select any crypto assets to deposit and instantly convert to cash.
      </p>
      <Warning message="" />
      <Assets handleSetView={handleSetView} />
    </div>
  );
};

export default SelectAsset;
