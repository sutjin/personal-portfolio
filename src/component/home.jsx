import React, { Component } from "react";
import ReactDOM from "react-dom";

import ParallaxContainer from "./ParallaxContainer.jsx"
import TitleContainer from "./TitleContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";

import bg_image_1 from "../media/background.jpg";



class HomeContainer extends Component {
  render() {
    return (
      <div id="main_wrapper">
        <ParallaxContainer
          bgLink={bg_image_1}
        >
          <TitleContainer />
          <ContentContainer />
        </ParallaxContainer>
        <ParallaxContainer
          bgLink="http://images5.fanpop.com/image/photos/30900000/-Random-random-30915836-1280-800.jpg"
        >
          <ContentContainer />
        </ParallaxContainer>
      </div>
    );
  }
}

export default HomeContainer;

const wrapper = document.getElementById("profile_container");
wrapper ? ReactDOM.render(<HomeContainer />, wrapper) : false;
