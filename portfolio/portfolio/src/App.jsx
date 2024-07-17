import { useState } from "react";
import "./App.css";
import { Footer, NavBar } from "./container/ExportContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
