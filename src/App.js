import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/components/theme/theme";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";
import AuthApi from "./utils/AuthApi";
import { hasLoggedin } from "../src/components/api/auth-api";

function App() {
  const [auth, setAuth] = useState(false);

  const readSession = async () => {
    const res = await hasLoggedin();
    if (res.data.auth) {
      setAuth(true);
    }
    // console.log(res);
  };
  useEffect(() => {
    readSession();
  }, []);

  return (
    <div className="App">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
