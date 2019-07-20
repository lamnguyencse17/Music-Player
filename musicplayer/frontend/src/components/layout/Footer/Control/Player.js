import React, { Component } from "react";
import { connect } from "react-redux";
import Sound from "react-sound";
import PropTypes from "prop-types";
import { nextSong } from "../../../../actions/musics";
import { bindActionCreators } from "redux";

export class Player extends Component {
  static propTypes = {
    playing: PropTypes.bool.isRequired,
    lastplayed: PropTypes.object,
    volume: PropTypes.number.isRequired
  };
  ErrorHandling(code) {

  }
  handleFinished(){
    this.props.nextSong();
  }
  getDuration(song){
    console.log(song.duration)
  }
  getPlaying(song){
    console.log(song)
  }
  render() {
    return (
      <div>
        <Sound url={this.props.lastplayed.source} onPlaying={this.getPlaying.bind(this)} onLoad={this.getDuration.bind(this)} autoLoad="true" onFinishedPlaying={this.handleFinished.bind(this)} volume={this.props.volume} playStatus={this.props.playing ? Sound.status.PLAYING : Sound.status.PAUSED} onError={this.ErrorHandling} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.musics.playing,
    lastplayed: state.musics.lastplayed,
    volume: state.musics.volume
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextSong }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);