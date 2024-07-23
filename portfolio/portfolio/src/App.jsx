import { useState } from "react";
import "./App.css";
// import { Footer, NavBar } from "./container/ExportContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layouts/MainLayout";
import SecondHeroSection from "./components/SecondHeroSection";
import PortFolio from "./layouts/PortFolio";
import Authentication from "./container/auth/Authentication";

function App() {
  const change = true;

  // const renderElements = () => {
  //   if (change) {
  //     return <HeroSection />;
  //   } else {
  //     return <SecondHeroSection />;
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {/* Conditionally render either HeroSection or SecondHeroSection based on the value of change */}
            <Route path="/" element={<Authentication />} />
            <Route
              path="/home"
              element={
                change ? (
                  <>
                    <HeroSection />
                    <PortFolio />
                  </>
                ) : (
                  <SecondHeroSection />
                )
              }
            />
            <Route path="/portfolio" element={change && <PortFolio />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
