import React, { Component } from "react";
import SocialIconComponent from "./SocialIconComponent.jsx";

import github_icon from '../media/iconfinder_Github.svg';
import linkedin_icon from '../media/iconfinder_LinkedIn.svg';
import youtube_icon from '../media/iconfinder_Youtube.svg';
import medium_icon from '../media/medium.svg';
import mixcloud_icon from '../media/iconfinder_mixcloud.svg';

const SOCIAL_LINK = [
  {
    "link": "https://github.com/sutjin",
    "icon": github_icon
  },
  {
    "link": "https://www.linkedin.com/in/nabilsutjipto",
    "icon": linkedin_icon
  },
  {
    "link": "https://medium.com/@NbilzDy",
    "icon": medium_icon
  },
  {
    "link": "https://www.youtube.com/channel/UC1p7qlwFF-dI2vmE2UHrHXw",
    "icon": youtube_icon
  },
  {
    "link": "https://www.mixcloud.com/Nbilzdy/",
    "icon": mixcloud_icon
  }
]

class TitleContainer extends Component {
  render() {
    return (
      <div className="parallax_title">
        <div className="caption">
          <h1 className="fade-in">
            NABIL<br />
            <strong>SUTJIPTO</strong>
          </h1>
          <br />
          <ul className="vertical-list fade-in">
            {SOCIAL_LINK.map((value, index) => {
              return <SocialIconComponent key={index} link={value.link} icon={value.icon}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TitleContainer;
