import React from "react";
import './App.global.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Routes from "./routes";
function App() {
  return (
    <>
      <Router>
        <Logo width={150} alt="Liva Logo" />
        <main id="main">
          <Routes />
        </main>
      </Router>
    </>
  );
}

export default App;
