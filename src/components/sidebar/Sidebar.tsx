import React from "react";
import "./Sidebar.css";
import SidebarButton from "components/sidebar/SidebarButton";
import logoutIcon from "../../assets/logoutIcon.svg";
import { sideBarItems } from "components/sidebar/SidebarItems";
import { useAuth } from "configuration/AuthContext";

const Sidebar = () => {
  const {logout}=useAuth()
  return (
    <div>
      <aside className="w-full shadow-lg bg-[#002255]/5 rounded-md hidden  border-gray-300 h-[100vh] max-h-[100vh] overflow-y-auto md:flex flex-col pr-10 justify-start items-end ">
        <div className="flex flex-col mt-[24px] ">
          {sideBarItems.map((item, index) => (
            <SidebarButton
              key={index}
              to={item.to}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
        <div className="mt-20">
          <SidebarButton
          // onClick={logout}
            to="/"
            icon={<img src={logoutIcon} height={28} width={28} alt="Logout Icon" />}
            title="Log Out"
          />
        </div>
      </aside>
      <aside className=" md:hidden  fixed bottom-0 left-0 right-0 px-4 py-2 bg-white flex items-center  justify-between ">
        <div className="flex justify-between w-full items-center">
          {sideBarItems.map((item, index) => (
            <SidebarButton
              key={index}
              to={item.to}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
        {/* <div className="mt-20">
          <SidebarButton
            to="/login"
            icon={<img src={logoutIcon} alt="Logout Icon" />}
            title="Log Out"
          />
        </div> */}
      </aside>
    </div>
  );
};

export default React.memo(Sidebar);
