import React, { Component } from "react";
import { connect } from "react-redux";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
import { bindActionCreators } from "redux";
import { playMusics } from "../../../actions/musics";
import PropTypes from "prop-types";

export class Control extends Component {
    buttonClicked(song) {
        this.props.playMusics(song);
        this.forceUpdate();
      }
  render() {
    return (
      <div className="row">
        <div className="col">
            <div className="row">
                <div className="col-2"><center>Random</center></div>
                <div className="col-2"><center>Prev</center></div>
                <div className="col-4"><h2>Fix This</h2></div>
                <div className="col-2"><center>Next</center></div>
                <div className="col-2"><center>Loop</center></div>
            </div>
        </div>
        <div className="w-100" />
        <div className="col"><center>progress bar</center></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    musics: state.musics.musics,
    playing: state.musics.playing
  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ playMusics }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(Control);
