import Add from "./Add";
import Display from "./Display";
// import Box from "./Box";
// import Button from "./Button";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liststudents: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          age: 20,
          address: "Hà Nội 1",
          className: "JV01",
        },
        {
          id: 2,
          name: "Nguyễn Văn B",
          age: 19,
          address: "Hà Nội 2",
          className: "JV02",
        },
        {
          id: 3,
          name: "Nguyễn Văn C",
          age: 21,
          address: "Hà Nội 3",
          className: "JV03",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {/* {this.state.liststudents.map((stu) => (
          <Display key={stu.id} info={stu} />
        ))} */}
        <Add />
      </>
    );
  }
}
