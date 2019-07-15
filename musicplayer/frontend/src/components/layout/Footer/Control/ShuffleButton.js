import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { MdShuffle } from "react-icons/md";
import { bindActionCreators } from "redux";
import { shuffleSong } from "../../../../actions/musics";
import PropTypes from "prop-types";

export class ShuffleButton extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.string.isRequired,
    shuffleSong: PropTypes.func.isRequired
  };
  shuffleClicked() {
    this.props.shuffleSong();
    this.forceUpdate();
  }

  render() {
    switch (this.props.shuffle) {
      case false: // shuffle off
        return <MdShuffle size={28} onClick={this.shuffleClicked.bind(this)} />;
      case true: // shuffle on
        return (
          <div style={{ color: "green" }}>
            <MdShuffle size={28} onClick={this.shuffleClicked.bind(this)} />
          </div>
        );
      default:
        // default: shuffle off
        return <MdShuffle size={28} onClick={this.shuffleClicked.bind(this)} />;
    }
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
  return bindActionCreators({ shuffleSong }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShuffleButton);
