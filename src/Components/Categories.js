import React from "react";
import { NavLink } from "react-router-dom";

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
