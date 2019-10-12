import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Detail extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.object
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          {/* {this.props.lastplayed.song} */}
        </div>
        <div className="w-100" />
        <div className="col">
        Artist
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
    lastplayed: state.control.lastplayed
  };
}
export default connect(mapStateToProps)(Detail);
