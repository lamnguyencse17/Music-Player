import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMusics, playMusics} from "../../../actions/musics";
import { bindActionCreators } from "redux";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";

export class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: []
    };
  }
  static propTypes = {
    musics: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    playMode: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    lastplayed: PropTypes.object.isRequired,
    getMusics: PropTypes.func.isRequired,
    playMusics: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getMusics();
  }
  buttonClicked(song) {
    this.props.playMusics(song);
    this.forceUpdate();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h2>Album Cover</h2>
          </div>
          <div className="col-sm-7" style={{ paddingRight: "0" }}>
            <table className="table table-hover table-borderless">
              <tbody>
                {this.props.musics.map((
                  music // iterate throught musics array to display
                ) => (
                  <tr key={music.song}>
                    <td>
                      {music.playing ? ( // playing
                        <MdPauseCircleFilled
                          size={28}
                          onClick={this.buttonClicked.bind(this, music.song)}
                        />
                      ) : (
                        // not playing
                        <MdPlayCircleFilled
                          size={28}
                          onClick={this.buttonClicked.bind(this, music.song)}
                        />
                      )}
                    </td>
                    <td>{music.song}</td>
                    <td>{music.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMusics, playMusics }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music);
