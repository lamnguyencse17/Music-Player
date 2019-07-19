import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { MdRepeat, MdRepeatOne } from "react-icons/md";
import { bindActionCreators } from "redux";
import { changeRepeat } from "../../../../actions/musics";
import PropTypes from "prop-types";

export class RepeatButton extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.string.isRequired,
    changeRepeat: PropTypes.func.isRequired
  };
  repeatClicked() {
    this.props.changeRepeat();
    this.forceUpdate();
  }
  render() {
    switch (this.props.playMode) {
      case 0: //no repeat
        return (
          <div>
            <MdRepeat onClick={this.repeatClicked.bind(this)} size={28} />
          </div>
        );
      case 1: //repeat all
        return (
          <div style={{ color: "green" }}>
            <MdRepeat onClick={this.repeatClicked.bind(this)} size={28} />
          </div>
        );
      case 2: //repeat one
        return (
          <div style={{ color: "green" }}>
            <MdRepeatOne onClick={this.repeatClicked.bind(this)} size={28} />
          </div>
        );
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
  return bindActionCreators({ changeRepeat }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepeatButton);
