import React, { Component } from "react";
import Header from "./header";
import HomeContent from "./contents/homeContent";
import AboutContent from "./contents/aboutContent";
import ProjectsContent from "./contents/projectsContent";
import FourOFourContent from "./contents/fourOFourContent";
import SocialContent from "./contents/socialContent";
import Footer from "./footer";
class Root extends Component {
  state = { page: "index" };
  render() {
    return (
      <div className="inset-0 w-full h-full">
        <Header onAction={this.changeUrl} />
        {this.getContent()}
        <Footer />
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
      case "index":
        jsxReturn = <HomeContent />;
        break;
      case "about":
        jsxReturn = <AboutContent />;
        break;
      case "projects":
        jsxReturn = <ProjectsContent />;
        break;
      case "social":
        jsxReturn = <SocialContent />;
        break;
      default:
        jsxReturn = <FourOFourContent />;
    }
    return jsxReturn;
  };
}
export default Root;
