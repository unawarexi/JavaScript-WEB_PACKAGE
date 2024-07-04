import "./App.css";
// import CakeContainer from "./components/CakeContainer";
import { Routes, Route } from "react-router-dom";
// import { Home, Login } from "./container/ExpMain";
// import HooksCake from "./components/HooksCake";
// import React_forms from "./react-hook-forms/React_forms";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App justify-center items-center w-screen min-h-screen flex">
      <Routes>
        <Route path="/" element={<UserProfile />} />

        {/* <Route path="/cake" element={<CakeContainer />} />
        <Route path="/cakesec" element={<HooksCake />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forms" element={<React_forms />} /> */}
      </Routes>
    </div>
  );
}

export default App;
