import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import MonitorContext from "./components/contexts/MonitorContext";

import GlobalStyle from "./components/styles/global";
import Header from "./components/molecules/Header";
import Routes from "./routes";

function App() {
  const [hashtag, setHashtag] = useState("");
  const [monitoring, setMonitoring] = useState(false);
  const [received, setReceived] = useState([]);
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);

  return (
    <MonitorContext.Provider
      value={{
        hashtag,
        setHashtag,
        monitoring,
        setMonitoring,
        received,
        setReceived,
        approved,
        setApproved,
        rejected,
        setRejected,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </MonitorContext.Provider>
  );
}

export default App;
