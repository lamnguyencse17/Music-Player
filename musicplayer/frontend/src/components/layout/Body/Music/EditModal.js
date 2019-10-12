import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editSong, processEditSong } from "../../../../actions/musics";
export class EditModal extends Component {
    constructor(props){
        super(props)
        var index = this.props.musics.findIndex(music => music.song === this.props.song)
        this.state = this.props.musics[index]
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleClose() {
        this.props.editSong()
    }
    handleEdit = e => {
        e.preventDefault();
        let { song, artist, genre} = this.state
        var editForm = { song, artist, genre}
        var index = this.props.musics.findIndex(music => music.song === this.props.song)
        console.log(index)
        this.props.processEditSong(index, editForm, this.props.musics[index]) //index + newlyEdited + Original
    }
    render() {
        const { song, artist, genre} = this.state
        return (
            <Modal show={this.props.edit} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit A New Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form id="edit-form" onSubmit={this.handleEdit}>
                        <div className="form-group">
                            <label>
                                Title:
                            </label>
                            <input type="text" name="song" placeholder={song} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>
                                Artist:
                            </label>
                            <input type="text" name="artist" placeholder={artist} onChange={this.handleChange} />
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose.bind(this)}>Close</Button>
                    <Button variant="primary" form="edit-form" type="submit">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    return {
        edit: state.musics.edit,
        musics: state.musics.musics
    };
} function mapDispatchToProps(dispatch) {
    return bindActionCreators({ editSong, processEditSong }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditModal);