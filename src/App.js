import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BlogsPage from "./Pages/BlogsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import { useState } from "react";

import { Switch, Route } from "react-router-dom";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      {/* TODO: Change from div of lines to material ui hamburger icon */}
      <div className="nav-button" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage></HomePage>
            </Route>
            <Route path="/about" exact>
              <AboutPage></AboutPage>
            </Route>
            <Route path="/projects" exact>
              <ProjectsPage></ProjectsPage>
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage></BlogsPage>
            </Route>
            <Route path="/contact" exact>
              <ContactPage></ContactPage>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
