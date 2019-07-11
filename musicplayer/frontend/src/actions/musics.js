import axios from 'axios';

import {GET_MUSICS, PLAY_MUSICS} from './types';

export const getMusics = () => dispatch => {
    axios.get('/api/musics/').then(res => {
        dispatch({type: GET_MUSICS, payload: res.data});
    }).catch(err=> console.log(err));
}

export const playMusics = (song) => dispatch => {
    console.log(song)
    dispatch({type: PLAY_MUSICS, payload: song})
}