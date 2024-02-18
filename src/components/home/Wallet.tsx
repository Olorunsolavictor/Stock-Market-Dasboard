import React from "react";
import arrowBack from "../../assets/arrowBack.svg";
import Accounts from "./Accounts";
import { useAuth } from "configuration/AuthContext";
import CwitoButton from "components/CwitoButton";
interface WalletProps {
  handleSetView?: (view: number) => void | undefined
}

const Wallet: React.FC<WalletProps> = ({ handleSetView }) => {
  const {isWalletConfirmed}=useAuth()
 
  return (
    <div className=" md:h-screen flex flex-col w-full px-10 md:py-10">
      <header className="p-4 flex justify-start gap-4 items-center w-full ">
        <button onClick={() =>{if(handleSetView){handleSetView(1)}} }>
          <img src={arrowBack} alt="arrow back" />
        </button>
        <p className="font-bold">Select bank account</p>
      </header>
  { isWalletConfirmed===false? <p className="md:text-sm text-xs text-start">
      Add your preferred bank for your instant payout
      </p> : <p className="md:text-sm text-xs text-start"></p>}
      <Accounts />
   <CwitoButton
        disabled ={isWalletConfirmed ===false}
        title="Continue"
        color="bg-[#023436]"
        onClick={() =>{ if(handleSetView) handleSetView(3)}}
        width="full"
      />
    </div>
  );
};

export default Wallet;
