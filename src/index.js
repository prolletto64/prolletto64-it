import React from "react";
import ReactDOM from "react-dom/client";
import AboutContent from "./components/aboutContent";
import FourOFourContent from "./components/fourOFourContent";
import Header from "./components/header";
import HomeContent from "./components/homeContent";
import ProjectsContent from "./components/projectsContent";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const homeUrl = "/";
const aboutUrl = "/about";
const projectsUrl = "/projects";
const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = "titolo";
root.render(
  <div className="inset-0 w-full h-full bg-slate-400">
    <Header />
    {getContent()}
  </div>
);

function getContent() {
  const url = window.location.pathname.toString();
  let jsxReturn = <></>;
  switch (url) {
    case homeUrl:
      jsxReturn=<HomeContent />;
      break;
    case aboutUrl:
      jsxReturn=<AboutContent />;
      break;
    case projectsUrl:
      jsxReturn=<ProjectsContent />;
      break;
    default:
      jsxReturn=<FourOFourContent />;
      break;
  }
  return jsxReturn;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
