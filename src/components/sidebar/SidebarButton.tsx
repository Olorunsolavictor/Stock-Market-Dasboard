import { NavLink } from "react-router-dom";
// import { IconContext } from "react-icons";
import "./Sidebar.css";

interface SidebarButtonProps{
  to: string;
  icon: any;
  title: string;
  // onClick?:any
};

const SidebarButton:React.FC<SidebarButtonProps> = ({to, icon, title}) => {
  return (
    <NavLink to={to} className="w-full flex md:block justify-center">
      {({ isActive }) => (
        <button
        // onClick={()=>onClick()}
          className={
            isActive
              ? " rounded w-20 md:mb-5 shadow-lg  bg-[#002255]/30 md:w-[168px] py-3 px-5 font-medium text-sm text-black justify-center md:justify-start flex items-center  "
              : "md:w-[168px] w-20 md:justify-start md:mb-5 font-medium rounded   text-sm text-black flex justify-center items-center  py-3 px-5 hover:scale-[1.1] transform duration-200 "
          }
        >
          <span className="md:mr-[8px] ">{icon}</span>
          <span className="hidden md:block">{title}</span>
        </button>
      )}
    </NavLink>
  );
};

export default SidebarButton;
