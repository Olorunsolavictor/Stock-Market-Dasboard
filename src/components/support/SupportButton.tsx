import { NavLink } from "react-router-dom";
import "./Support.css";
// import { IconContext } from "react-icons";

type Props = {
  to: string;
  icon: any;
  title: string;
  subtitle: string;
};

const SidebarButton = (props: Props) => {
  return (
    <NavLink
      to={props.to}
      className="flex justify-between  items-center md:block"
    >
      {({ isActive }) => (
        <button
          className={
            isActive
              ? " rounded-[4px] gap-4 md:h-[68px]  p-2 shadow-lg  md:mr-0 hover:bg-[#002255]/30 bg-yellow-300 md:w-[240px]  font-medium text-[10px] md:text-xs text-black mt-[5%] flex  items-center md:pl-[32px] "
              : " md:w-[168px] h-md:[48px]  font-medium   text-xs text-black flex items-center mt-[5%] md:pl-[32px] hover:scale-[1.1] transform duration-200   md:mr-0  "
          }
        >
          {props.icon}
          <div className="flex  flex-col justify-center items-start gap-1">
            <p className="font-bold ">{props.title}</p>
            <p>{props.subtitle}</p>
          </div>
        </button>
      )}
    </NavLink>
  );
};

export default SidebarButton;
