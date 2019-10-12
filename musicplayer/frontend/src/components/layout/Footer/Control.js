import React, { Component } from "react";
import PlayButton from "./Control/PlayButton";
import NextButton from "./Control/NextButton";
import PrevButton from "./Control/PrevButton";
import RepeatButton from "./Control/RepeatButton";
import ShuffleButton from "./Control/ShuffleButton";
import SlideBar from "./Control/SlideBar";
import Player from "./Control/Player"
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Control extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.object.isRequired,
  };
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
          <Player />
          <SlideBar/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    musics: state.musics.musics,
    playing: state.control.playing,
    playMode: state.control.playMode,
    shuffle: state.control.shuffle,
    lastplayed: state.control.lastplayed,
    progress: state.control.progress
  };
}
export default connect(mapStateToProps)(Control);
