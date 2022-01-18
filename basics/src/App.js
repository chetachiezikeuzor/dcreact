import logo from "./logo.svg";
import DiceRoller from "./components/DiceRoller";
import State from "./components/State";
import Props from "./components/Props";
import Test from "./components/Test";
import Data from "./components/hooks/Data";
import Hook2 from "./components/hooks/Hook2";
import Hook3 from "./components/hooks/Hook3";
import ReactForm from "./components/ReactForm";
import Test2 from "./components/Test2";
import "./App.css";
import * as React from "react";

const App = () => {
  return (
    <div style={{ padding: "20px 36px" }}>
      <DiceRoller />
      <Data />
    </div>
  );
};

export default App;
