import logo from "./logo.svg";
import DiceRoller from "./components/DiceRoller";
import State from "./components/State";
import Props from "./components/Props";
import Test from "./components/Test";
import ReactForm from "./components/ReactForm";
import Test2 from "./components/Test2";
import "./App.css";
import * as React from "react";

const App = () => {
  return (
    <div style={{ padding: "20px 36px" }}>
      <h1>Welcome to the World</h1>
      <Test />
      <Props name="React" />
      <DiceRoller />
      <br />
      <ReactForm />
    </div>
  );
};

export default App;
