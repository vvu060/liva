import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { motion } from "framer-motion";

import { selectSidebar } from "./redux/features/sidebar/sidebarSlice";

import Routes from "./routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Fallback from "./components/errors/fallback/Fallback";

import "./App.global.scss";

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
          <ErrorBoundary FallbackComponent={Fallback}>
            <main id="main">
              <Routes />
            </main>
          </ErrorBoundary>
          <Footer />
        </motion.div>
      </Router>
      <Sidebar sidebar={sidebar} />
    </Fragment>
  );
}

export default App;
