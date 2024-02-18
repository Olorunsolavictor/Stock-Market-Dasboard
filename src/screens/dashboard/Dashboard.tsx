
import Header from "components/home/Header";
import React from "react";
import Chart from "components/home/Chart";
import { useAuth } from "configuration/AuthContext";
import Indices from "components/home/Indices";

interface DashboardProps {
  handleSetView: (view: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleSetView }) => {
  const {dummyData}=useAuth()
  return (
    <div className="rounded bg-white flex flex-col gap-6 md:py-10  md:px-6 border-[#002255] w-full h-auto md:h-screen">
      <Header />
      <Indices/>
      <Chart  data={dummyData}/>
   
    </div>
  );
};

export default Dashboard;
