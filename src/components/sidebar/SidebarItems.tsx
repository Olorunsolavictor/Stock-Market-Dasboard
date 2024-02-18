import home from "../../assets/dashboard.svg";
import stockIcon from "../../assets/stock.svg";
import newsIcon from "../../assets/news.svg";

export const sideBarItems = [
  {
    to: "/dashboard",
    icon: <img src={home} height={28} width={28} alt="dashboard Icon" />,
    title: "Dashboard",
  },
  {
    to: "/stocks",
    icon: <img src={stockIcon} height={28} width={28} alt="stocks Icon" />,
    title: "Stocks",
  },
  {
    to: "/News",
    icon: <img src={newsIcon}  height={28} width={28} alt="Feeds Icon" />,

    title: "News",
  },
];
