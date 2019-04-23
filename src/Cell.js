import React, { Component } from "react";
// import Matrix from "./Matrix.js";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  changeColour(event) {
    this.setState({
      color: "#333"
    });
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={this.changeColour.bind(this)}
      />
    );
  }
}
