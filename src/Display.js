import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let element = this.props.info;
    return (
      <ul>
        <li>ID: {element.id}</li>
        <li>Name: {element.name}</li>
        <li>AGE: {element.age}</li>
        <li>ADDRESS: {element.address}</li>
        <li>CLASS: {element.className}</li>
      </ul>
    );
  }
}
