import React, { Component } from "react";

class ParallaxContainer extends Component {
  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.props.bgLink + ')',
    };

    return (
      <div
        className="parallax"
        style={divStyle}
        >
        {this.props.children}
      </div>
    );
  }
}

export default ParallaxContainer;
