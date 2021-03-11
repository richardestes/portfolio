import React from "react";

function Categories({ filter, categories }) {
  return (
    <div className="Categories">
      {categories.map((category, index) => {
        return (
          <button
            className="button-projects"
            type="button"
            onClick={() => filter(category)}
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
