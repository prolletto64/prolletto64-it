import React, { Component } from "react";

class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <>
        <a href={this.props.href} className="block text-gray-200 hover:text-white focus:text-white">{this.props.display}</a>
      </>
    );
  }
}

export default SocialMedia;
