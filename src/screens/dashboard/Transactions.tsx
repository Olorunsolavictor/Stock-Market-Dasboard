import React, { useState } from "react";

const Transactions: React.FC = () => {
  const [view, setView] = useState<number>(1);
  const handleSetView = (view: number) => {
    setView(view);
  };
  //   console.log(view);
  return (
    <div className="rounded bg-white flex flex-col gap-6 px-6 border-black w-full h-screen">
    
    </div>
  );
};

export default Transactions;
