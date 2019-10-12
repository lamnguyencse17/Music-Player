import {
    PLAY_MUSICS,
    CHANGE_REPEAT,
    NEXT_SONG,
    PREV_SONG,
    SHUFFLE_SONG,
    VOLUME_CHANGE,
    UPDATE_PROGRESS,
} from "./types";
import store from "../store";
export const playMusics = song => (dispatch) => {
    let load = {};
    load.song = song;
    load.musics = store.getState().musics.musics;
    dispatch({ type: PLAY_MUSICS, payload: load });
};

export const changeRepeat = () => dispatch => {
    dispatch({ type: CHANGE_REPEAT });
};

export const nextSong = () => dispatch => {
    dispatch({ type: NEXT_SONG, payload: store.getState().musics.musics });
};

export const prevSong = () => dispatch => {
    dispatch({ type: PREV_SONG, payload: store.getState().musics.musics });
};

export const shuffleSong = () => dispatch => {
    dispatch({ type: SHUFFLE_SONG });
};
export const changeVolume = volume => dispatch => {
    dispatch({ type: VOLUME_CHANGE, payload: volume });
};
export const updateProgress = position => dispatch => {
    dispatch({ type: UPDATE_PROGRESS, payload: position })
}

