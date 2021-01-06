// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }
  //look at previous lesson for how to do this
  handleOnClickBit = () => {
    console.log(this.state.settings.bitrate);
    this.setState(
      {
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      },
      () => console.log(this.state.settings.bitrate)
    );
  };
  //to ues console.log to see the changed state you need to make it a second argument, with an anonymous function.
  handleOnClickRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: "720p",
        },
      },
    });
  };
  //first you need to go into settings, then you need to go into the video to change the resolution.
  render() {
    return (
      <div>
        {/* make sure to add the onClick */}
        <button className="bitrate" onClick={this.handleOnClickBit}>
          bitrate
        </button>
        {/* make sure to add the onClick */}
        <button className="resolution" onClick={this.handleOnClickRes}>
          resolution
        </button>
      </div>
    );
  }
}
