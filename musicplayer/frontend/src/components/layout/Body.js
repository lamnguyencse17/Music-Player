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
    playing: state.musics.playing,
    playMode: state.musics.playMode,
    shuffle: state.musics.shuffle,
    lastplayed: state.musics.lastplayed,
    progress: state.musics.progress,
    upload: state.musics.upload
  };
}
export default connect(mapStateToProps)(Body);
