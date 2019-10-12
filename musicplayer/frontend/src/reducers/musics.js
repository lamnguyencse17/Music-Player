import {
  GET_MUSICS,
  UPLOAD_SONG,
  SONG_PROCESS_UPLOAD,
  EDIT_SONG,
  PROCESS_EDIT,
  DELETE_SONG,
  SONG_PROCESS_DELETE,
  UPDATE_MUSICS,
} from "../actions/types.js";

//Queue structure to make the playlist history 
//for previous button song as well as all the function
const initialState = {
  musics: [],
  upload: false,
  edit: false,
  delete: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MUSICS:
      return {
        ...state,
        musics: action.payload,
      };
    case UPDATE_MUSICS:
      return {
        ...state,
        musics: action.payload,
      }
    case UPLOAD_SONG:
      return {
        ...state,
        upload: !state.upload
      };
    case SONG_PROCESS_UPLOAD:
      let newmusic = state.musics;
      newmusic.push(action.payload)
      return {
        ...state,
        musics: newmusic,
        upload: !state.upload
      };
    case EDIT_SONG:
      return {
        ...state,
        edit: !state.edit
      };
    case PROCESS_EDIT:
      let newstate = state.musics
      newstate[newstate.findIndex(music => music.id === action.payload.id)] = action.payload
      return {
        ...state,
        musics: newstate,
        edit: !state.edit
      };
    case DELETE_SONG:
      return {
        ...state,
        delete: !state.delete
      };
    case SONG_PROCESS_DELETE:
      console.log(state.musics.filter(music => music.id !== action.payload))
      return {
        ...state,
        musics: state.musics.filter(music => music.id !== action.payload),
        delete: !state.delete
      };
    default:
      return state;
  }
}
