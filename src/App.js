import React from "react";
import "./App.css";
import SignupForm from "./components/SignUp/SignupForm";
import StockList from "./components/hoc/StockList";

function App() {
  return (
    <div className="App">
      {/* <SignupForm /> */}
      <StockList />
    </div>
  );
}

export default App;
