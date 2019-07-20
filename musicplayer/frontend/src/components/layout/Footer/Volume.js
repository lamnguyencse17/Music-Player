import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { changeVolume} from "../../../actions/musics";
import { bindActionCreators } from "redux";

export class Volume extends Component {
  static propTypes = {
    volume: PropTypes.number.isRequired
  };
  handleChange(action, value) {
    this.props.changeVolume(value)
  }
  render() {
    return (
      <div style={{ "width": "5vw" }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Slider value="100" onChange={this.handleChange.bind(this)} aria-labelledby="continuous-slider" />
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
    lastplayed: state.musics.lastplayed,
    volume: state.musics.volume
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeVolume}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Volume);
