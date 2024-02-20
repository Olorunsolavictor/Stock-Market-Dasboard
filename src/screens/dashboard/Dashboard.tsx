// Dashboard.tsx
import BarChart from "components/BarChart";
import Expense from "components/Expense";
import Savings from "components/Savings";
import SummaryCard from "components/SummaryCard";
import Header from "components/home/Header";
import React from "react";

interface DashboardProps {
  handleSetView: (view: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleSetView }) => {
  // Dummy data (replace with actual data)
  const totalAssets = 25000;
  const totalLiabilities = 15000;
  const netWorth = totalAssets - totalLiabilities;
  const barChartData = [
    { label: 'January', value: 1000 },
    { label: 'February', value: 2000 },
    { label: 'March', value: 1500 },
    // Add more data points as needed
];

  return (
    <div className="rounded  bg-white flex flex-col gap-6 md:py-10 md:px-6 border-[#002255] w-full h-auto md:h-screen">
      <Header />
      <div className="flex w-full flex-col justify-start items-center md:flex-row gap-6">
      {/* <BarChart data={barChartData} /> */}
        <SummaryCard title="Total Assets" value={totalAssets} />
        <SummaryCard title="Total Liabilities" value={totalLiabilities} />
        <SummaryCard title="Net Worth" value={netWorth} />
        </div>
        <section className="w-full flex justify-start items-center">
    
          <Expense amount={2000} />
          <Savings amount={2000} />
        </section>
    
    </div>
  );
};

export default Dashboard;
