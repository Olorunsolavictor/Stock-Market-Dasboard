import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import notificationIcon from "../../assets/notificationIcon.svg";
import { useAuth } from "configuration/AuthContext";
import Warning from "./Warning";

const Header: React.FC = () => {

  return (
    <header className=" py-3 gap-6 w-full flex flex-col justify-between items-center  ">
      <div className="w-full   flex justify-between items-center">
      <div className="flex gap-2 justify-start items-center">
        <div className="rounded-[50%] "><img src={avatar} className="rounded-full h-10 w-10" alt="avatar placeholder" /></div>
        
        <p className=" text-lg  text-[#1E194E]">
          Welcome, <span className="font-bold">User</span>
        </p>
      </div>
      <img src={notificationIcon} alt="notification icon" />
      </div>
      
    </header>
  );
};

export default Header;
