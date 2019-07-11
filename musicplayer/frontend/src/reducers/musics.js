import {GET_MUSICS, PLAY_MUSICS} from '../actions/types.js';
const initialState = {
    musics: [],
    playing: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MUSICS:
            return {
                ... state,
                musics: action.payload
            };
        case PLAY_MUSICS:
            return {
                ... state,
                item: action.payload
            }
        default:
            return state;
    }
}