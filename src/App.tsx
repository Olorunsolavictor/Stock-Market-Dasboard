import { useEffect } from "react";
import Routers from "./Routers";
// import LandingPage from "screens/LandingPage";

import "./App.css";

function App() {
  useEffect(() => {
    const ac = new AbortController();
    document.title = "stock market dasboard";
    return function cleanup() {
      ac.abort();
    };
  }, []);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
