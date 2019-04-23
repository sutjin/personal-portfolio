import React, { Component } from "react";

class ContentContainer extends Component {
  render() {
    return (
      <div className="parallax_content">
        <div className="content hidden">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ContentContainer;
