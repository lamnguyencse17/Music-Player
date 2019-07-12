import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMusics, playMusics } from "../../../actions/musics";
import { bindActionCreators } from "redux";
import { MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";

export class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: {}
    };
  }
  static propTypes = {
    musics: PropTypes.array.isRequired,
    getMusics: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getMusics();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ clicked: this.updateState(nextProps) });
  }
  buttonClicked(song) {
    this.props.playMusics(song);
  }
  updateState(prop) {
    var dict = {};
    prop.musics.map(song => {
      if (song.song === prop.playing) {
        dict[song.song] = true;
      } else {
        dict[song.song] = false;
      }
    });
    return dict;
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
                {this.props.musics.map(music => (
                  <tr key={music.song}>
                    <td>
                      {this.state.clicked[music.song] ? (
                        <MdPauseCircleFilled
                          size={28}
                          onClick={this.buttonClicked.bind(this, music.song)}
                        />
                      ) : (
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
    playing: state.musics.playing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMusics, playMusics }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music);
