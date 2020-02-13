import React, { Component } from "react";
import ReactDOM from "react-dom";

import ParallaxContainer from "./ParallaxContainer.jsx"
import TitleContainer from "./TitleContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";
import ProjectContainer from "./ProjectContainer.jsx";

import profile_image from "../media/profile_image.jpg";
import bg_image_1 from "../media/background.jpg";
import bg_image_2 from "../media/background_1.jpg";
import bg_image_3 from "../media/background_3.jpg";

import npm_img from "../media/npm-logo.png"

class HomeContainer extends Component {
  render() {
    return (
      <div id="main_wrapper">
        <ParallaxContainer
          bgLink={bg_image_1}
        >
          <TitleContainer />
          <ContentContainer>
            <img src={profile_image} />
          </ContentContainer>
        </ParallaxContainer>
        <ParallaxContainer
          bgLink={bg_image_2}
        >
          <div className="mobile-padding" />
          <ContentContainer>
            <div className="container">
              <h2>Hello</h2>

              <p>
              My name is Nabil, a software engineer currently developing machine learning capabilities with Expedia in India.
              </p>

              <p>
              On weekdays I develop software with React.js, Node.js annd Python.
              </p>

              <p>
              On weekends I love to explore my creative side through videography and music.
              </p>

              <p>
              To me, having a creative space has helped me built solutions such as a subscription box content optimizer,
              resuable chat box using React.js and even an open source project!
              </p>

              <p>
              check out my work through the links under my name.
              </p>
            </div>
          </ContentContainer>
        </ParallaxContainer>
        <ParallaxContainer
          bgLink={bg_image_3}
        >
          <div className="mobile-padding" />
          <ContentContainer>
            <div className="container">
              <h2>My On Going</h2>
              <p>Tid bit about my ongoing project</p>
              <hr />
              <ProjectContainer
                image={npm_img}
                link="https://www.npmjs.com/package/google-recaptcha-react-component"
                title="Google ReCaptcha React Component"
                description="Easy to use React Component to protect your form using Google's ReCaptcha."
              />
            </div>
          </ContentContainer>
        </ParallaxContainer>
      </div>
    );
  }
}

export default HomeContainer;

const wrapper = document.getElementById("profile_container");
wrapper ? ReactDOM.render(<HomeContainer />, wrapper) : false;
