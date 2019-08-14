import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteSong, processDelete } from "../../../../actions/musics";
export class DeleteModal extends Component {
    constructor(props){
        super(props)
        var index = this.props.musics.findIndex(music => music.song === this.props.song)
        this.state = this.props.musics[index].id
    }
    handleClose() {
        this.props.deleteSong()
    }
    proceedDelete(){
        this.props.processDelete(this.state)
    }
    render() {
        return (
            <Modal show={this.props.delete} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Are you sure that you want to delete this?</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose.bind(this)}>Cancel</Button>
                    <Button variant="danger" onClick={this.proceedDelete.bind(this)}> Yes. Delete It</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    return {
        delete: state.musics.delete,
        musics: state.musics.musics
    };
} function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteSong, processDelete }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteModal);