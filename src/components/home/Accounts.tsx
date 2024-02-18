
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import add from "../../assets/add.svg";
import action from "../../assets/actionIcon.svg";
import { useAuth } from "configuration/AuthContext";
import Notification from "components/Notification";

interface Bank {
  accountName: string;
  accountNumber: string;
  bankName: string;
  userId: string;
}

interface AccountsProps {
  // handleView: (view: number) => void;
  // setIsWalletConfirmed:any;
  // isWalletConfirmed:boolean
}

const Accounts: React.FC<AccountsProps>= ({}) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [successNotification, setSuccessNotification] =
    useState<boolean>(false);
  const [errorNotification, setErrorNotification] = useState<boolean>(false);
  const { user, setWallet, storedToken , isWalletConfirmed} = useAuth();
  const [bank, setBank] = useState<Bank | null>(null);



  return (
    <div className="h-screen flex flex-col w-full gap-4">
      {successNotification && (
        <Notification
          message={message}
          color={"bg-green-400"}
          textColor={"text-white"}
        />
      )}
      {errorNotification && (
        <Notification
          message={message}
          color={"bg-red-400"}
          textColor={"text-white"}
        />
      )}
      {/* <header className="p-4 flex justify-start gap-4 items-center w-full">
        <button>
          <img src={arrowBack} alt="" />
        </button>
        <p className="font-bold">Bank details</p>
      </header> */}
      {/* <p className="text-sm text-start">Add or remove your bank details</p> */}

      {bank && (
        <div className="w-full border-[#F8F8F8] bg-[#F8F8F8] gap-2 p-4 justify-start items-center rounded-xl border flex h-20">
          <div className="flex flex-col justify-center w-[90%] gap-2 items-start">
            <div className="flex justify-between  gap-4">
              <h1 className="text-sm text-start font-bold">
                {bank.accountName}
              </h1>
              <div className="border border-[#CCCCCC] text-sm rounded-2xl max-h-[22px] px-2 bg-white">
                default
              </div>
            </div>

            <div className="flex text-xs justify-between gap-4">
              <p>{bank.accountNumber}</p>
              <p>|</p>
              <p>{bank.bankName}</p>
            </div>
          </div>
          <button>
            <img src={action} alt="action button" />
          </button>
        </div>
      )}

   {  isWalletConfirmed===false? <button
        onClick={() => navigate("/add-new-bank")}
        className="flex mt-1 w-[40%] p-2 gap-2 min-w-[200px] whitespace-nowrap justify-center items-start"
      >
        <img src={add} alt="add icon" />
        <p className="text-[#037971] font-medium text-sm">
          Add new bank details
        </p>
      </button>: null}
    </div>
  );
};
export default Accounts;
