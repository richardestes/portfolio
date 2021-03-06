import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import projects from "../data/allprojects";

const allCategories = ["All", ...new Set(projects.map((item) => item.category))];
function ProjectsPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projects);

  useEffect(() => {
    setCategories(allCategories);
  }, []);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(projects);
      return;
    }
    const filteredData = projects.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="ProjectsPage">
      <div className="title">
        <Title title={"Projects"} span={"Projects"} />
      </div>
      <div className="projects-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  );
}

export default ProjectsPage;
