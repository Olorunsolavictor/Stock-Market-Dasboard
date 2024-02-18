import React from "react";
import loadingSpinner from "../assets/LodaingWhite.svg";
interface CwitoButtonProps {
  title: string;
  color: string;
  onClick: any;
  width: string;
  disabled?: boolean;
  isLoading?: boolean;
}
const CwitoButton: React.FC<CwitoButtonProps> = ({
  title,
  color,
  onClick,
  width,
  disabled,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // className={`bg-[#023436] text-white px-4 py-2 rounded ${
      //   disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#03464E]"
      // }`}
      className={` ${color}  ${width} ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#002255]/90"
      }  px-2 py-3 flex justify-center shadow-xl items-center rounded-md text-white text-sm font-semibold text-center  gap-1`}
    >
      {isLoading ? (
        <img
          className="suspense-loading-icon"
          src={loadingSpinner}
          alt="loading spinner"
        />
      ) : (
        title
      )}
    </button>
  );
};

export default CwitoButton;
