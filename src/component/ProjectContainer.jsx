import React, { Component } from "react";

class ProjectContainer extends Component {
  render() {
    return (
      <div
        className="project"
        >
        <div className="project-img">
          <a href={this.props.link} target="_blank">
            <img src={this.props.image} />
          </a>
        </div>
        <div className="project-desc">
          <h4><a href={this.props.link} target="_blank">{this.props.title}</a></h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
