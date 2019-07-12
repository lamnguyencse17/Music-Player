import { GET_MUSICS, PLAY_MUSICS } from "../actions/types.js";
import { object } from "prop-types";
const initialState = {
  musics: [],
  playing: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MUSICS:
      return {
        ...state,
        musics: action.payload
      };
    case PLAY_MUSICS:
      if (action.payload === state.playing) {
        return {
          ...state,
          playing: null
        };
      } else {
        return {
          ...state,
          playing: action.payload
        };
      }
    default:
      return state;
  }
}
