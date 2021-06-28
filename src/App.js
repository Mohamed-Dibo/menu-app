import React, { useState } from "react";
import Header from "./components/header";
import Category from "./components/category";
import Menu from "./components/menu";
import data from "./data";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
function App() {
  const [items, setItems] = useState(data);
  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => {
      return item.category === category;
    });
    setItems(newItems);
  };
  return (
    <div className="container">
      <Header />
      <Category allCategories={allCategories} filterItems={filterItems} />
      <Menu items={items} />
    </div>
  );
}

export default App;
