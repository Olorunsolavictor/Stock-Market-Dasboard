import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

import Support from "./support/Support";

type Props = {
  children: ReactNode;
};

const GrandLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const shouldRenderSidebar =
    location.pathname !== "/"&&
    location.pathname !== "*";

  const shouldRenderSupport =
    location.pathname !== "/" &&
    location.pathname !== "*";
    
  const sectionClassName =
    location.pathname === "/" ? "md:h-[100vh]" : "  md:h-[100vh] ";

  return (
    <main className="w-full flex flex-col md:flex md:flex-row md:h-screen bg-[#002255]/5 justify-start md:justify-between overflow-hidden">
      {shouldRenderSidebar && (
        <div className="w-1/5">
          <aside>
            <Sidebar />
          </aside>
        </div>
      )}
      <div className="w-full  md:w-3/5 ">
        <section className={sectionClassName}>{children}</section>
      </div>

      {shouldRenderSupport && (
        <div className="md:w-1/5">
          <Support />
        </div>
      )}
    </main>
  );
};

export default GrandLayout;
