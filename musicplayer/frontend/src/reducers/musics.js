import { GET_MUSICS, PLAY_MUSICS } from "../actions/types.js";

const initialState = {
  musics: [],
  playing: false,
  playMode: "sequential",
};

export default function(state = initialState, action) {
    let newpayload;
  switch (action.type) {
    case GET_MUSICS:

      newpayload = action.payload;
      newpayload.forEach(item => {
        item.playing = false;
      });
      
      return {
        ...state,
        musics: newpayload
      };
    case PLAY_MUSICS:
        newpayload = state.musics;
        newpayload.forEach(item => {
          if (item.song === action.payload){
              item.playing = !item.playing
          }
        });
        console.log(newpayload)
        return {
          ...state,
          musics: newpayload,
          playing: !playing
        };
    default:
      return state;
  }
}
