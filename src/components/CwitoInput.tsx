import React, { useState } from "react";
import pwdVisible from "../assets/pwdVisble.svg"

interface CwitoInputProps {
  label: string;
  type: string;
  value: any;
  placeholder: string;
  width: string;
  error?: string | null;
  onChange: (value: any) => void;
}

const CwitoInput: React.FC<CwitoInputProps> = ({
  label,
  type,
  value,
  placeholder,
  width,
  onChange,
  error,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <label
      className={`flex ${width} text-sm flex-col  justify-center items-start gap-1`}
    >
      <p className=" font-medium">{label}</p>
      <div className="relative w-full">
        <input
          autoComplete="true"
          className={`w-full border border-[#CCCCCC] rounded-lg p-3 outline-[#CCCCCC]`}
          type={isPasswordVisible ? "text" : type} // Toggle between text and password type
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {type === "password" && (
          <button
            className="absolute inset-y-0 right-0 px-3 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? "Hide" : <img src={pwdVisible}/>} {/* Toggle button text */}
          </button>
        )}
      </div>
      <p className="text-red-500 text-[10px] leading-tight text-start">
        {error}
      </p>
    </label>
  );
};

export default CwitoInput;
