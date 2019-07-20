import React, { Component } from "react";
import PlayButton from "./Control/PlayButton";
import NextButton from "./Control/NextButton";
import PrevButton from "./Control/PrevButton";
import RepeatButton from "./Control/RepeatButton";
import ShuffleButton from "./Control/ShuffleButton";
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
  playClick
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
          {this.props.playing ? <Player/> : <div></div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    musics: state.musics.musics,
    playing: state.musics.playing,
    playMode: state.musics.playMode,
    shuffle: state.musics.shuffle,
    lastplayed: state.musics.lastplayed
  };
}
export default connect(mapStateToProps)(Control);
