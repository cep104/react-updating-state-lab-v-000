// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClock extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  handleOnClick = () => {
    this.setState((previousState) => {
      return {
        timesClicked: previousState.timesClicked + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
