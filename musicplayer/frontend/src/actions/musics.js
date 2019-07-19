import axios from "axios";

import {
  GET_MUSICS,
  PLAY_MUSICS,
  CHANGE_REPEAT,
  NEXT_SONG,
  PREV_SONG,
  SHUFFLE_SONG
} from "./types";

export const getMusics = () => dispatch => {
  axios
    .get("/api/musics/")
    .then(res => {
      dispatch({ type: GET_MUSICS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const playMusics = song => dispatch => {
  dispatch({ type: PLAY_MUSICS, payload: song });
};

export const changeRepeat = () => dispatch => {
  dispatch({ type: CHANGE_REPEAT });
};

export const nextSong = () => dispatch => {
  dispatch({ type: NEXT_SONG });
};

export const prevSong = () => dispatch => {
  dispatch({ type: PREV_SONG });
};

export const shuffleSong = () => dispatch => {
  dispatch({ type: SHUFFLE_SONG });
};
