import React, { Component } from "react";

export default class Button extends Component {
  handleclick = () => {
    window.alert("bạn vừa bấm vào thẻ button");
  };
  render() {
    return <button onClick={this.handleclick}>add</button>;
  }
}
