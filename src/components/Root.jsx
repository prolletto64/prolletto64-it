import React, { Component } from "react";
import Header from "./header";
import HomeContent from "./dynamicDivs/homeContent";
import AboutContent from "./dynamicDivs/aboutContent";
import ProjectsContent from "./dynamicDivs/projectsContent";
import FourOFourContent from "./dynamicDivs/fourOFourContent";

const homeUrl = "index";
const aboutUrl = "about";
const projectsUrl = "projects";

class Root extends Component {
  state = { page: "index" };
  render() {
    return (
      <div className="inset-0 w-full h-full bg-slate-400">
        <Header onAction={this.changeUrl} />
        {this.getContent()}
      </div>
    );
  }
  changeUrl = (page) => {
    if (page === "index") {
      window.location.hash = "";
    } else {
      window.location.hash = page;
    }
    this.setState({ page });
  };
  getContent = () => {
    const page = this.state.page;
    let jsxReturn = <></>;
    switch (page) {
      case homeUrl:
        jsxReturn = <HomeContent />;
        break;
      case aboutUrl:
        jsxReturn = <AboutContent />;
        break;
      case projectsUrl:
        jsxReturn = <ProjectsContent />;
        break;
      default:
        jsxReturn = <FourOFourContent />;
    }
    return jsxReturn;
  };
}
export default Root;
