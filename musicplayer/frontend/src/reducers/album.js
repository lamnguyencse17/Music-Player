import {
    GET_ALBUM,
} from "../actions/types.js";
const initialState = {
    album: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALBUM:
            return {
                ...state,
                album: action.payload,
            };
        default:
            return state;

    }
}