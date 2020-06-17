import React from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
