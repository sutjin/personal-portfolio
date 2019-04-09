import React, { Component } from "react";

import TitleContainer from "./TitleContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";

class ParallaxContainer extends Component {
  render() {
    return (
      <div className="parallax">
        <TitleContainer />
        <ContentContainer />
      </div>
    );
  }
}

export default ParallaxContainer;
