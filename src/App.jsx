import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Works from "./components/works/Works";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <header id="home">
          <div className="container header_container">
            <div className="head">
              <div className="top_nav">
                <a href="" className="navs_logo">
                  Kingori.
                </a>

                <div className="switch-checkbox">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider round"> </span>
                  </label>
                </div>
              </div>
            </div>

            <Header />
          </div>
        </header>
        <Nav />
        <Works />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
