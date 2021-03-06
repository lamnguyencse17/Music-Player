import React, { Component } from "react";
import { connect } from "react-redux";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
import { bindActionCreators } from "redux";
import { playMusics } from "../../../../actions/control";
import PropTypes from "prop-types";

export class PlayButton extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.object,
    playMusics: PropTypes.func.isRequired
  };
  playClicked() {
    this.props.playMusics(null);
    this.forceUpdate();
  }
  render() {
    switch (this.props.playing) {
      case true:
        return (
          // playing
          <MdPauseCircleFilled
            size={28}
            onClick={this.playClicked.bind(this)}
          />
        );
      case false:
        return (
          // not playing
          <MdPlayCircleFilled size={28} onClick={this.playClicked.bind(this)} />
        );
      default:
        return (
          // initial: not clicked
          <MdPlayCircleFilled size={28} onClick={this.playClicked.bind(this)} />
        );
    }
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playMusics }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
