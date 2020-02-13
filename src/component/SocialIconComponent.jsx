import React, { Component } from "react";
import ReactSVG from 'react-svg'

class SocialIconComponent extends Component {
  onClick() {
    ReactGA.event({
      category: "Social Link",
      action: "User click {}",
    });
  }

  render() {
    return (
      <li>
        <a href={this.props.link} target="_blank">
          <ReactSVG
            src={this.props.icon}
            svgStyle={{ width: 25, height: 25 }} />
        </a>
      </li>
    );
  }
}

export default SocialIconComponent;
