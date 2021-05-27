import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
    </div>
    </BrowserRouter>
  );
}

export default App;
