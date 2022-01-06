import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "./pages";
import { Navbar } from "./components";

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}
export default AppRoutes;
