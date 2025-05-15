import React from "react";
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Search from "./Components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./Components/Nav";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <div className="container">
            <Logo></Logo>
            <Category />
          </div>
        </div>
        <Search />
        <Pages />
      </div>
    </Router>
  );
}

export default App;
