import React, { useState, useRef, useEffect } from "react";
import arrow from "../assets/arrowCircledDown.svg";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative  flex text-left">
      <label htmlFor="select" className=" w-full">
        Bank
        <button
          type="button"
          name="select"
          className="flex justify-between items-center w-full px-4 py-3 text-sm font-medium  bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          onClick={toggleDropdown}
        >
          {selectedOption || "Select bank"}
          <img
            src={arrow}
            className={
              isOpen
                ? "rotate-180 transition-all ease-in-out duration-200"
                : "transition-all ease-in-out duration-200"
            }
            alt="arrow"
          />
        </button>
      </label>

      {isOpen && (
        <div className="origin-top-right z-[10000] absolute right-0 mt-2 w-[100%] top-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 z-[10000] h-[300px] bg-white overflow-scroll"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option}
                className="block px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
