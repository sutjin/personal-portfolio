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
              My name is Nabil Sutjipto, and I am a Software Engineer based in Seattle, WA. I’m passionate in travel and exploration, which is the reason I am currently with Expedia, helping travelers like myself stay at ease by building solutions to help answer the uncertainty of travel. My areas of exploration goes beyond physical location as I also translate it to my engineering experience; to date I have built solutions for product personalization based on preference, connecting communities through the web, build on technologies to help talented people be found and working on open source projects.  I am currently developing in React.js, Node.js and Phyton.
              </p>

              <p>
              I truly believe that my passion has led me to where I am today; connecting with different individuals as I travel has helped me learn new ways to solve problems and even given me ideas on what to build next. As I document my journey through video and photography, the learnings and challenges i set forth to myself ensure that I will never stop learning.
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
