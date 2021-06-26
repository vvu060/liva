import React, { Fragment } from "react";
import "./App.global.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Routes from "./routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { motion } from "framer-motion";
import { selectSidebar } from "./redux/features/sidebar/sidebarSlice";
import { useSelector } from "react-redux";

function App() {
  const sidebar = useSelector(selectSidebar);

  return (
    <Fragment>
      <Router>
        <motion.div
          animate={{
            scale: 1,
            opacity: sidebar ? 0.7 : 1,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          <a className="skipnav" href="#main">
            Skip to main content
          </a>
          <Header />
          <main id="main">
            <Routes />
          </main>
          <Footer />
        </motion.div>
      </Router>
      <Sidebar sidebar={sidebar} />
    </Fragment>
  );
}

export default App;
