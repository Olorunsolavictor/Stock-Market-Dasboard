import React, { useState } from "react";
import arrowBack from "../../assets/arrowBack.svg";
import arrow from "../../assets/arrowDropDown.svg";
interface FaqProps {
  handleView: (view: number) => void;
}
const Accordion: React.FC<FaqProps> = ({ handleView }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How fast can the market change be?",
      answer: "Our sources say less than 3 seconds",
    },
  
    {
      question: "Why do I contact support?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Why do I contact Swift?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },

  ];

  return (
    <div className="flex flex-col p-4 md:p-0 md:w-[90%] fixed md:relative top-0 left-0 right-0 bottom-0 bg-white h-screen md:h-auto ">
      <header className=" flex justify-start py-2 mb-3 gap-4 items-center w-full ">
        <button onClick={() => handleView(1)}>
          <img src={arrowBack} alt="" />
        </button>
        <p className="font-bold">FAQs</p>
      </header>
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-[#F3F3F3] text-xs ">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-white"
            onClick={() => toggleAccordion(index)}
          >
            <div className="font-medium text-start">{faq.question}</div>
            <img
              src={arrow}
              alt=""
              className={
                activeIndex === index
                  ? "rotate-180 transition-all duration-300 ease-in-out"
                  : "transition-all duration-300 ease-in-out"
              }
            />
          </div>
          {activeIndex === index && (
            <div className="px-4 pb-3 bg-white">
              <p className=" text-start">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
