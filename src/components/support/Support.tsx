import React, { useState } from "react";
import { supportItems } from "../support/SupportItems";
import SupportButton from "../support/SupportButton";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import infoIcon from "../../assets/infoSquare.svg";
import arrowRight from "../../assets/arrowRight.svg";
import Faq from "./Faq";

function Support() {
  const [view, setView] = useState<number>(1);
  const handleView = (view: number) => {
    setView(view);
  };
  return (
    <aside className="md:h-[100vh]  bg-white px-4   md:max-h-[100vh] border-gray-300 overflow-x-hidden pt-5 pb-20 md:py-5 overflow-y-auto md:pl-10 ">
      {view === 1 && (
        <div>
          <header className="flex justify-start w-full">
            <h1 className="font-bold text-[#1E194E] text-lg">Support</h1>
          </header>
          <div className="flex justify-between md:justify-start  md:flex md:flex-col mt-2 ">
            {supportItems.map((item, index) => (
              <SupportButton
                key={index}
                to={item.to}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
          <button
            onClick={() => handleView(2)}
            className="flex justify-between shadow-lg bg-green-200 mt-6 hover:bg-[#d0cfcf]/50 items-center w-full md:w-[240px] rounded-lg p-4 "
          >
            <div className="flex justify-start gap-2 items-center">
              <img src={infoIcon} alt="asset icon" />
              <p className="md:text-sm text-xs font-medium">
                FAQ
              </p>
            </div>
            <img src={arrowRight} alt="asset icon" />
          </button>
          <section className="flex flex-col gap-4  justify-start w-full mt-4">
            <h1 className="font-bold text-[#1E194E] text-sm md:text-lg text-start">
              Socials
            </h1>
            <div className="flex flex-col text-xs md:flex gap-2 md:flex-row w-full md:w-auto md:justify-start md:items-center">
              <button className="md:bg-white shadow-lg gap-2 items-center flex md:block bg-[#F8F8F8] p-4 rounded-lg">
                <img src={instagramIcon} alt="instagram Icon" />
                <p className="md:hidden">Instagram</p>
              </button>
              <button className="md:bg-white shadow-lg  gap-3 items-center flex md:block bg-[#F8F8F8] p-4 rounded-lg">
                <img src={twitterIcon} alt="twitter Icon" />
                <p className="md:hidden">X</p>
              </button>
            </div>
          </section>
        </div>
      )}
      {view === 2 && <Faq handleView={handleView} />}
    </aside>
  );
}
export default Support;
