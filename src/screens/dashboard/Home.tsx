import React, { useState } from "react";
import Dashboard from "./Dashboard";


const Home: React.FC = () => {
  const [view, setView] = useState<number>(1);

  
  const handleSetView = (view: number) => {
    setView(view);
  };
  console.log(view);
  return (
    <div className="rounded flex flex-col gap-6 px-4 py-4 md:py-0 md:px-6 border-black w-full bg-white md:h-screen">
      {view === 1 && <Dashboard handleSetView={handleSetView} />}
  
    </div>
  );
};

export default Home;
