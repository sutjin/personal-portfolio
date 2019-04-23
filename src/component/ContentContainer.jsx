import React, { Component } from "react";

import profile_image from "../media/profile_image.jpg";

class ContentContainer extends Component {
  render() {
    return (
      <div className="parallax_content">
        <div className="content hidden">
          <img src={profile_image} />
        </div>
      </div>
    );
  }
}

export default ContentContainer;
