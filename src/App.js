import React from "react";
import CardsList from "./CardsList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

function App() {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardsList robots={robots} />
    </div>
  );
}

export default App;
