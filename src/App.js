import React from "react";
import "./App.css";
import SignupForm from "./components/SignUp/SignupForm";
import StockList from "./components/hoc/StockList";
import UserList from "./components/hoc/UserList";
import ListHoc from "./components/hoc/ListHoc";

const StocksData = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Infosys",
  },
  {
    id: 3,
    name: "Reliance",
  },
];
const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];

const Stocks = ListHoc(StockList, StocksData);

const Users = ListHoc(UserList, UsersData);

function App() {
  return (
    <div className="App">
      {/* <SignupForm /> */}
      <Users />
      <Stocks />
    </div>
  );
}

export default App;
