import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uploadSong, processUpload} from "../../../../actions/musics";
export class UploadModal extends Component {
    state = {
        title: "",
        artist: "",
        genre: 1,
        source: null,
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleClose() {
        this.props.uploadSong()
        this.setState({
            title: "",
            artist: "",
            genre: 1,
            source: null,
        })
    }
    handleUpload = e => {
        e.preventDefault();
        uploaddata = this.state;
        uploaddata.album = this.props.album.name;
        this.props.processUpload(uploaddata)
    }
    render() {
        const { title, artist, genre} = this.state
        return (
            <Modal show={this.props.upload} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload A New Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="upload-form" onSubmit={this.handleUpload}>
                        <div className="form-group">
                            <label>
                                Title:
                            </label>
                            <input type="text" name="title" value={title} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>
                                Artist:
                            </label>
                            <input type="text" name="artist" value={artist} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label for="GenreSelect">Genre</label>
                                </div>
                                <select onChange={(e) => this.setState({ genre: e.target.value })} className="custom-select" id="GenreSelect">
                                    <option selected>Choose a genre</option>
                                    <option value={1}>Unknow Genre</option>
                                    <option value={2}>Rock</option>
                                    <option value={3}>Pop</option>
                                    <option value={4}>Ballad</option>
                                    <option value={5}>EDM</option>
                                    <option value={6}>Jazz</option>
                                    <option value={7}>Hiphop</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input type="file" onChange={(e) => this.setState({source: e.target.files})} class="custom-file-input" id="FileSource" />
                                    <label className="custom-file-label" for="FileSource">Choose file</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose.bind(this)}>Close</Button>
                    <Button variant="primary" form="upload-form" type="submit">Upload</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    return {
        upload: state.musics.upload,
        musics: state.musics.musics,
        album: state.musics.album
    };
} function mapDispatchToProps(dispatch) {
    return bindActionCreators({ uploadSong, processUpload }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadModal);