import React from "react";

const Catogry = ({ allCategories, filterItems }) => {
  return (
    <div className="category">
      {allCategories.map((category, index) => {
        return (
          <button key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Catogry;
