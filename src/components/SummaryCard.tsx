import React from "react";

interface SummaryCardProps {
  title: string;
  value: number;
  
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex whitespace-nowrap flex-row gap-1">
      <p className="text-green-600 text-2xl font-bold">NGN</p>
      <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
