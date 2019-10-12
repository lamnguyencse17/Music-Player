import {
    PLAY_MUSICS,
    CHANGE_REPEAT,
    NEXT_SONG,
    PREV_SONG,
    SHUFFLE_SONG,
    VOLUME_CHANGE,
    UPDATE_PROGRESS,
} from "../actions/types.js";
import playMusics from "./cases/playMusics"
import nextSong from "./cases/nextSong"
import Queue from "../structures/Queue"
import prevSong from "./cases/prevSong.js";
import {updateMusics} from "../actions/musics"
const initialState = {
    lastplayed: {},
    playing: false,
    playMode: 0, // 0 is no repeat, 1 is repeat all, 2 is repeat one
    shuffle: false,
    queue: new Queue(),
    volume: 100,
    progress: 0,
};
let wholestate;
export default function (state = initialState, action) {
    switch (action.type) {
        case PLAY_MUSICS:
            wholestate = playMusics(state, action.payload.song, action.payload.musics);
            updateMusics(wholestate.musics);
            delete wholestate.musics;
            return wholestate;
        case CHANGE_REPEAT:
            if (state.playMode + 1 <= 2) {
                return {
                    ...state,
                    playMode: state.playMode + 1
                }
            }
            return {
                ...state,
                playMode: 0
            };
        case SHUFFLE_SONG:
            return {
                ...state,
                shuffle: !state.shuffle // just toggle the state.shuffle
            };
        case NEXT_SONG:
            wholestate = nextSong(state, action.payload);
            updateMusics(wholestate.musics);
            delete wholestate.musics;
            return wholestate;

        case PREV_SONG: //
            wholestate = prevSong(state, action.payload);
            updateMusics(wholestate.musics);
            delete wholestate.musics;
            return wholestate;
        case VOLUME_CHANGE:
            return {
                ...state,
                volume: action.payload
            };
        case UPDATE_PROGRESS:
            return {
                ...state,
                progress: action.payload
            };
        default:
            return state;
    }
}