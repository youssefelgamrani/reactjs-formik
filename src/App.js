import React from "react";
import "./App.css";
import SignupForm from "./components/SignUp/SignupForm";
import StockList from "./components/hoc/StockList";
import UserList from "./components/hoc/UserList";

function App() {
  return (
    <div className="App">
      {/* <SignupForm /> */}
      <StockList />
      <UserList />
    </div>
  );
}

export default App;
