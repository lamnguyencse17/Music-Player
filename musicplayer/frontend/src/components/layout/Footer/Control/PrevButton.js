import React, { Component } from "react";
import { connect } from "react-redux";
import { MdSkipPrevious } from "react-icons/md";
import { bindActionCreators } from "redux";
import { prevSong } from "../../../../actions/control";
import PropTypes from "prop-types";

export class PrevButton extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.object,
    prevSong: PropTypes.func.isRequired
  };
  prevClicked() {
    this.props.prevSong();
    this.forceUpdate();
  }
  render() {
    return <MdSkipPrevious size={28} onClick={this.prevClicked.bind(this)} />;
  }
}

function mapStateToProps(state) {
  return {
    musics: state.musics.musics,
    playing: state.control.playing,
    playMode: state.control.playMode,
    shuffle: state.control.shuffle,
    lastplayed: state.control.lastplayed
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ prevSong }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevButton);
