import React from "react";
function MenuItems({ menuItems }) {
  return (
    <div className="projects">
      {menuItems.map((item) => {
        return (
          <div className="project" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1} target="_blank" rel="noreferrer">
                    {item.icon1}
                  </a>
                  {item.icon2 ? (
                    <a href={item.link2} target="_blank" rel="noreferrer">
                      {item.icon2}
                    </a>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
