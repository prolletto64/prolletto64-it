import React, { Component } from "react";
import HeaderItem from "./headerItem";

class Header extends Component {
  state = {
    elements: [
      { id: 0, name: "hompage", pageName: "index" },
      { id: 1, name: "about", pageName: "about" },
      { id: 2, name: "projects", pageName: "projects" },
    ],
  };
  render() {
    return (
      <div className="flex flex-row space-x-2 pl-2 pb-1 pt-1 bg-slate-500">
        {this.state.elements.map((el) => (
          <HeaderItem
            key={el.id}
            name={el.name}
            page={el.pageName}
            id={el.id}
          />
        ))}
      </div>
    );
  }
}

export default Header;
