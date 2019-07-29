import React, { Component } from "react";
import { connect } from "react-redux";
import Sound from "react-sound";
import PropTypes from "prop-types";
import { nextSong, updateProgress } from "../../../../actions/musics";
import { bindActionCreators } from "redux";

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
      lastprogress: 0,
      pause: ""
    }
  }
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
  getPlaying(song){
    if (isNaN(this.props.progress) === false && this.props.progress % 1 !== 0){ // play from click
      this.setState({position: this.props.progress/100*song.duration})
      this.setState({position: null})
      this.props.updateProgress(Math.floor(this.state.position*100 / song.duration))
      this.setState({lastprogress: this.props.progress})
      return;
    }
    if (Math.floor(song.position*100 / song.duration) !== this.props.progress){ // update if position increment 1%
      if (this.state.lastprogress !== this.props.progress && this.props.progress === 0){ // restart song
        this.setState({position: 0})
        this.setState({position: null})
      }
      this.props.updateProgress(Math.floor(song.position*100 / song.duration))
      this.setState({lastprogress: this.props.progress})
    }
  }
  render() {
    return (<div>
      <Sound url={this.props.lastplayed.source} playFromPosition={this.state.position} onPlaying={this.getPlaying.bind(this)} onFinishedPlaying={this.handleFinished.bind(this)} volume={this.props.volume} playStatus={this.props.playing ? Sound.status.PLAYING : Sound.status.PAUSED} onError={this.ErrorHandling} />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playing: state.musics.playing,
    lastplayed: state.musics.lastplayed,
    volume: state.musics.volume,
    progress: state.musics.progress,
    playMode: state.musics.playMode
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ nextSong, updateProgress }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);