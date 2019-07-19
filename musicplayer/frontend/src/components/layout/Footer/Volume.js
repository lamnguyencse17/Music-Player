import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

export class Volume extends Component {
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.string.isRequired
  };
  render() {
    return (
      <div style={{"width": 200}}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    );
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
export default connect(mapStateToProps)(Volume);
