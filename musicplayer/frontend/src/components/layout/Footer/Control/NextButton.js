import React, { Component } from "react";
import { connect } from "react-redux";
import { MdSkipNext } from "react-icons/md";
import { bindActionCreators } from "redux";
import { nextSong } from "../../../../actions/musics";
import PropTypes from "prop-types";

export class NextButton extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.string.isRequired,
    nextSong: PropTypes.func.isRequired
  };
  nextClicked() {
    this.props.nextSong();
    this.forceUpdate();
  }
  render() {
    return <MdSkipNext size={28} onClick={this.nextClicked.bind(this)} />;
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextSong }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextButton);
