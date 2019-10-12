import axios from "axios";

import {
    GET_ALBUM
} from "./types";

export const getAlbum = () => (dispatch) => {
    axios
        .get("/api/album/")
        .then(res => {
            dispatch({ type: GET_ALBUM, payload: res.data[0] });
        })

}
