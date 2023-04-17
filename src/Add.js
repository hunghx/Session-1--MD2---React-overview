import React, { Component } from "react";

export default class Add extends Component {
  handleAdd = (a, b) => a + b;
  render() {
    let a = 100;
    let b = 200;
    let date = new Date().toLocaleTimeString();
    let sum = this.handleAdd(a, b);
    return (
      <div>
        Tổng của {a} và {b} là {date}
      </div>
    );
  }
}
