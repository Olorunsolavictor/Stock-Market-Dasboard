import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loadingIcon.svg";
import GrandLayout from "./components/GrandLayout";
import PrivateRoute from "components/router/PrivateRoute";

const CreateAccount = React.lazy(
  () => import("./screens/onboarding/CreateAccount")
);

const Wallet = React.lazy(() => import("./components/home/Wallet"));

const Transactions = React.lazy(
  () => import("./screens/dashboard/Transactions")
);

const Home = React.lazy(() => import("./screens/dashboard/Home"));
const Settings = React.lazy(() => import("screens/dashboard/Settings"));

const Routers = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      <GrandLayout>
        <Suspense
          fallback={
            <div className="flex justify-center mt-[350px] z-50">
              <LoadingIcon className="suspense-loading-icon" />
            </div>
          }
        >
          <Routes>
            <Route index element={<CreateAccount />} />
            <Route path="/dashboard" element={<Home />} />
            <Route
              path="/wallet"
              element={
                
                  <Wallet />
                
              }
            />
            <Route
              path="/news"
              element={
                
                  <Settings />
              
              }
            />
            <Route
              path="/stocks"
              element={
              
                  <Transactions />
               
              }
            />
          </Routes>
        </Suspense>
      </GrandLayout>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Routers;
