import React, { Component } from "react";
import Main from "../components/Main";
import projects from "../projects.json";
import "./style.css";

class Project extends Component {
  state = {
    projects
  };

  render() {
    return (
      <main id="work" className="row">
        <h3 className="col-2 mx-2 pl-4 mt-4 justify-content-center">work</h3>
        <div className="row col-md-10 col-sm-12 justify-items-around">
          <div className="card col-12" style={{ width: "18rem" }}>
              {this.state.projects.map((project) => (
                <Main
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  desc={project.description}
                  deployed={project.deployed}
                  repo={project.repo}
                  screenshot={project.screenshot}
                />
              ))}
          </div>
        </div>
      </main>
    );
  }
}

export default Project;
