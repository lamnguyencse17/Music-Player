import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMusics, uploadSong, editSong, processUpload, processEditSong, deleteSong } from "../../../actions/musics";
import {playMusics} from "../../../actions/control";
import { bindActionCreators } from "redux";
import { MdPlayCircleFilled, MdPauseCircleFilled} from "react-icons/md";
import UploadModal from "./Music/UploadModal"
import EditModal from "./Music/EditModal";
import DeleteModal from "./Music/DeleteModal";
import Album from "./Music/Album";
export class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: ""
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
  uploadBtn() {
    this.props.uploadSong()
  }
  handleEdit(song) {
    this.props.editSong()
  }
  handleDelete(song) {
    this.props.deleteSong()
  }
  render() {
    return (
      <div className="container">
        <UploadModal />
        <div className="row">
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-7" style={{ paddingRight: "0", marginRight: "0" }}><Album/></div>
              <div className="col-sm-5 align-self-center" style={{ paddingLeft: "0" }}>
                <input type="file" id="file" style={{ display: "none" }} />
                <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.uploadBtn.bind(this)}>Add Songs</button>
              </div>
            </div>
          </div>
          <div className="col-sm-7" style={{ paddingRight: "0" }}>
            <table className="table table-hover table-borderless">
              <tbody>
                {this.props.musics.map((music) => {
                  if (music.song !== this.state.hover) {
                    return (<tr key={music.song} onMouseEnter={() => { this.setState({ hover: music.song }) }} onMouseLeave={() => this.setState({ hover: "" })}>
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
                      <td style={{ visibility: "hidden" }}>...</td>
                      <td>{music.duration}</td>
                    </tr>)
                  }
                  else {
                    return (<tr key={music.song} onMouseEnter={() => { this.setState({ hover: music.song }) }} onMouseLeave={() => this.setState({ hover: "" })}>
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
                      <td style={{ paddingBottom: "0" }} >
                      <EditModal song={this.state.hover}/>
                      <DeleteModal song={this.state.hover}/>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
                          <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={this.handleEdit.bind(this, music.song)}>Edit</div>
                            <div className="dropdown-item" onClick={this.handleDelete.bind(this, music.song)}>Delete</div>
                          </div>
                        </div>
                      </td>
                      <td>{music.duration}</td>
                    </tr>)
                  }
                })}
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
    playing: state.control.playing,
    playMode: state.control.playMode,
    shuffle: state.control.shuffle,
    lastplayed: state.control.lastplayed,
    upload: state.musics.upload,
    edit: state.musics.edit,
    delete: state.musics.delete
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMusics, playMusics, uploadSong, processUpload, editSong, processEditSong, deleteSong }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music);
