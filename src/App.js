import React, { useState } from "react";
import "./App.css";
import AddPost from "./Components/AddPost";
import PostList from "./Components/PostList";
import Filter from "./Components/Filter";

function App() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="App">
      <h1 style={{ color: "#ff347f" }}>
        <img
          width="50"
          height="50"
          src="https://image.flaticon.com/icons/png/512/4470/4470931.png"
          alt="add posts"
        />
        TODO APP
      </h1>
      <AddPost />
      <Filter setFilter={setFilter} filter={filter} />
      <PostList filter={filter} />
    </div>
  );
}

export default App;
