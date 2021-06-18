import React from "react";
import './App.global.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Routes from "./routes";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Logo width={150} alt="Liva Logo" />
        <main id="main">
          <Routes />
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
