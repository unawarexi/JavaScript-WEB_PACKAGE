import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import UserProfile from "./components/UserProfileProps";
// import ReactState from "./React-hooks/ReactState";
import UserState from "./components/stateComponents/UserState";

function App() {
  return (
    <div>
      <UserState />
    </div>

    // <div className="App justify-center items-center w-screen min-h-screen flex">
    //   <Routes>
    //     <Route path="/" element={<UserProfile />} />

    //     {/* <Route path="/cake" element={<CakeContainer />} />
    //     <Route path="/cakesec" element={<HooksCake />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/forms" element={<React_forms />} /> */}
    //   </Routes>
    // </div>
  );
}

export default App;
