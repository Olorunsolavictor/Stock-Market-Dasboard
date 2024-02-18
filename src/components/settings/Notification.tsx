import React from "react";
import verified from "../../assets/verified.svg";
import CwitoButton from "components/CwitoButton";
interface BankAddedProps {
  //   handleAddBank: () => void;
  closeNotification: () => void;
  //   handleView: (view: number) => void;
  title: string;
}
const BankAdded: React.FC<BankAddedProps> = ({
  //   handleView,
  //   handleAddBank,
  closeNotification,

  title,
}) => {
  return (
    <div className="fixed bg-black/25 z-50 flex justify-center items-center top-0 left-0 right-0 bottom-0 ">
      <div className="flex w-[335px] gap-4 justify-center items-center flex-col px-5 py-4  rounded-2xl bg-white ">
        <div className="flex-col flex gap-4 justify-center items-center">
          <img src={verified} alt="verified icon" />
          <p className="text-lg font-bold">{`${title} changed`}</p>
          <p className="text-xs">{`your ${title} has been changed successfully`}</p>
        </div>
        <CwitoButton
          onClick={() => closeNotification()}
          title="Go back"
          color="bg-[#023436]"
          width="[30%]"
        />
      </div>
    </div>
  );
};

export default BankAdded;
