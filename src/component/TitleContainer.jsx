import React, { Component } from "react";
import ReactSVG from 'react-svg'

import github_icon from '../media/iconfinder_Github.svg';
import instagram_icon from '../media/iconfinder_Instagram.svg';
import linkedin_icon from '../media/iconfinder_LinkedIn.svg';
import youtube_icon from '../media/iconfinder_Youtube.svg';
import medium_icon from '../media/medium.svg';

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
            <li>
              <a href="https://github.com/sutjin" target="_blank">
                <ReactSVG
                  src={github_icon}
                  svgStyle={{ width: 25, height: 25 }} />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@NbilzDy" target="_blank">
                <ReactSVG
                  src={medium_icon}
                  svgStyle={{ width: 25, height: 25 }} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nbilzdy/" target="_blank">
                <ReactSVG
                  src={instagram_icon}
                  svgStyle={{ width: 25, height: 25 }} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC1p7qlwFF-dI2vmE2UHrHXw" target="_blank">
                <ReactSVG
                  src={youtube_icon}
                  svgStyle={{ width: 25, height: 25 }} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nabilsutjipto" target="_blank">
                <ReactSVG
                  src={linkedin_icon}
                  svgStyle={{ width: 25, height: 25 }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TitleContainer;
