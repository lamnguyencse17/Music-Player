import React, { Component, Fragment } from "react";
import Music from "./Body/Music";
import { connect } from "react-redux";


export class Body extends Component {
  render() {
    return (
      <Fragment>
        <Music />
      </Fragment>
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
    progress: state.control.progress,
    upload: state.musics.upload
  };
}
export default connect(mapStateToProps)(Body);
