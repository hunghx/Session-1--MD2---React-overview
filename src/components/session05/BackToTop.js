import React, { Component } from "react";

export default class BackToTop extends Component {
  render() {
    return (
      <a
        href="#"
        className="btn btn-lg btn-outline-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </a>
    );
  }
}
