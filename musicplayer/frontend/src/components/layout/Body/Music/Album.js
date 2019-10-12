import React, {Component} from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { getAlbum } from "../../../../actions/album";

class Album extends Component {
    componentDidMount() {
        this.props.getAlbum();
    }

    render() {
        return (
            <div>
                <h3> {this.props.album.name}</h3>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        album: state.album.album
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAlbum}, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(Album);