import React from "react";
import "./App.global.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Routes from "./routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Router>
        <a className="skipnav" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">
          <Routes />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
