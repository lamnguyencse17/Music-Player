import React, { Component, Fragment } from "react";
import PlayButton from "./Control/PlayButton";
import NextButton from "./Control/NextButton";
import PrevButton from "./Control/PrevButton";
import RepeatButton from "./Control/RepeatButton";
import ShuffleButton from "./Control/ShuffleButton";

export class Control extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-2">
              <ShuffleButton />
            </div>
            <div className="col-2">
              <PrevButton />
            </div>
            <div className="col-4">
              <PlayButton />
            </div>

            <div className="col-2">
              <NextButton />
            </div>

            <div className="col-2">
              <RepeatButton />
            </div>
          </div>
        </div>
        <div className="w-100" />
        <div className="col">
          <center>progress bar</center>
        </div>
      </div>
    );
  }
}

export default Control;
