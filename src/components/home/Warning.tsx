import React from "react";
import alertIcon from "../../assets/alertIcon.svg";
interface WarningProps {
  message?: string;
  onClick?: any
}
const Warning: React.FC<WarningProps> = ({message, onClick}) => {

  return (
    <button onClick={()=>onClick()} className="w-full rounded-lg flex p-4 gap-3 md:text-sm text-[10px] text-start justify-center items-center text-black bg-[#FFECCC]">
      <img src={alertIcon} alt="alert icon" />
      <p>
       {message}.
      </p>
    </button>
  );
};

export default Warning;
