import Chart from "components/home/Chart";
import Header from "components/home/Header";
import Indices from "components/home/Indices";
import { useAuth } from "configuration/AuthContext";
import React, { useState } from "react";

const Transactions: React.FC = () => {
  const { dummyData } = useAuth();
  const [view, setView] = useState<number>(1);
  const handleSetView = (view: number) => {
    setView(view);
  };
  //   console.log(view);
  return (
    <div className="rounded bg-white flex flex-col gap-6 px-6 border-black w-full h-screen">
      <Header />
      <Indices />
      <Chart data={dummyData} />
    </div>
  );
};

export default Transactions;
