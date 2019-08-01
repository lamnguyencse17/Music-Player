import {
  GET_MUSICS,
  PLAY_MUSICS,
  CHANGE_REPEAT,
  NEXT_SONG,
  PREV_SONG,
  SHUFFLE_SONG,
  VOLUME_CHANGE,
  UPDATE_PROGRESS
} from "../actions/types.js";
import playMusics from "./cases/playMusics"
import nextSong from "./cases/nextSong"
import Queue from "../structures/Queue"
import prevSong from "./cases/prevSong.js";
//Queue structure to make the playlist history 
//for previous button song as well as all the function
const initialState = {
  lastplayed: {},
  musics: [],
  playing: false,
  playMode: 0, // 0 is no repeat, 1 is repeat all, 2 is repeat one
  shuffle: false,
  queue: new Queue(),
  volume: 100,
  progress: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MUSICS:
      return {
        ...state,
        musics: action.payload
    };
    case PLAY_MUSICS:
      return playMusics(state, action.payload)
    case CHANGE_REPEAT:
      if (state.playMode + 1 <= 2){
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
      return nextSong(state)
    case PREV_SONG: // #TODO: Implement the real PREV_SONG after doing the music queue.
      return prevSong(state)
    case VOLUME_CHANGE:
      return {
        ...state,
        volume: action.payload
      }
    case UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload
      }
    default:
      return state;
  }
}
