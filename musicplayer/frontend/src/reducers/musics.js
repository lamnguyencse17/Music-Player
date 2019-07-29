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
import Queue from "../structures/Queue"
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
  let newpayload;
  let newlastplayed;
  let index;
  let newplaying;
  let newprogress;
  let newqueue;
  switch (action.type) {
    case GET_MUSICS:
      newpayload = action.payload;
      return {
        ...state,
        musics: action.payload
      };
    case PLAY_MUSICS:
      newpayload = state.musics;
      if (Object.keys(state.lastplayed).length === 0 && state.lastplayed.constructor === Object && action.payload === null) { // play first
        newqueue = state.queue;
        newqueue.push(newpayload[0].song)
        newpayload[0].playing = true;
        newplaying = true;
        newlastplayed = newpayload[0];
      }
      else {
        newpayload.forEach(item => {
          if (Object.keys(state.lastplayed).length !== 0) {//toggle 1 song
            if (item.song === state.lastplayed.song) {
              console.log(item.playing + "\n" + state.playing)
              newplaying = !item.playing;
              newpayload[newpayload.indexOf(item)].playing = !state.playing
              newlastplayed = item;
              if (action.payload !== null && action.payload !== state.lastplayed.song) {
                if (item.song === state.lastplayed.song) {
                  newpayload.forEach(payload => {
                    if (payload.song === action.payload) {
                      newplaying = true;
                      newpayload[newpayload.findIndex(payload => payload.song === action.payload)].playing = true;
                      newpayload[newpayload.indexOf(item)].playing = false;
                      newlastplayed = newpayload[newpayload.findIndex(payload => payload.song === action.payload)]
                    }
                  })
                }
              }
            }
          }
          else {
            newpayload.forEach(payload => {
              if (payload.song === action.payload) {
                newpayload[newpayload.findIndex(payload => payload.song === action.payload)].playing = true;
                newlastplayed = newpayload[newpayload.findIndex(payload => payload.song === action.payload)]
              }
            })
            newplaying = true;
          }
        })
      }
        newqueue = state.queue;
        if (newqueue.rear() !== newlastplayed.song){
          newqueue.push(newlastplayed.song)
        }
      return {
        ...state,
        lastplayed: newlastplayed,
        musics: newpayload,
        playing: newplaying
      };
    case CHANGE_REPEAT:
      let newplaymode;
      if (state.playMode + 1 <= 2) newplaymode = state.playMode + 1;
      // check the state of the mode
      else newplaymode = 0;
      return {
        ...state,
        playMode: newplaymode
      };
    case SHUFFLE_SONG:
      return {
        ...state,
        shuffle: !state.shuffle // just toggle the state.shuffle
      };
    case NEXT_SONG:
      newpayload = state.musics;
      newpayload.forEach(item => { //REWRITE IS NEEDED FUNCTIONAL ATM ONLY
        if (state.playMode === 0) // NO REPEAT
        {
          if (item.song === state.lastplayed.song && state.lastplayed !== {}) {
            // make sure that something is playing and check for lastplayed
            index = newpayload.indexOf(item);
            if (state.shuffle === false) {
              // shuffle is off
              if (index + 1 < newpayload.length) {
                // check if it's last song
                newpayload[index].playing = false;
                newpayload[index + 1].playing = true;
                newlastplayed = newpayload[index + 1];
              } else {
                // it's the last song so return to the first
                newpayload[index].playing = false;
                newpayload[0].playing = true;
                newplaying = true
                newlastplayed = newpayload[0];
              }
            } else {
              // shuffle is on
              let newindex = Math.floor(Math.random() * newpayload.length); // generate next random song index
              newpayload[index].playing = false;
              newpayload[newindex].playing = true;
              newlastplayed = newpayload[newindex];
            }
          }
        }
        else if (state.playMode === 1) { //REPEAT ALL
          if (item.song === state.lastplayed.song && state.lastplayed !== {}) {
            // make sure that something is playing and check for lastplayed
            index = newpayload.indexOf(item);
            if (state.shuffle === false) {
              // shuffle is off
              if (index + 1 < newpayload.length) {
                // check if it's last song
                newpayload[index].playing = false;
                newpayload[index + 1].playing = true;
                newlastplayed = newpayload[index + 1];
              } else {
                // it's last song so return to the first
                newpayload[index].playing = false;
                newpayload[0].playing = true;
                newlastplayed = newpayload[0];
              }

            } else {
              // shuffle is on
              let newindex = Math.floor(Math.random() * newpayload.length); // generate next random song index
              newpayload[index].playing = false;
              newpayload[newindex].playing = true;
              newlastplayed = newpayload[newindex];
            }
          }
        }
        else {
          if (item.song === state.lastplayed.song && state.lastplayed !== {}) {
            newlastplayed = state.lastplayed;
            newprogress = 0
          }
        }
        newplaying = true
      });
      if (state.playMode !== 2){
        newqueue = state.queue;
        if (newqueue.rear() !== newlastplayed.song){
          newqueue.push(newlastplayed.song)
        }
      }
      return {
        ...state,
        musics: newpayload,  
        playing: newplaying,
        lastplayed: newlastplayed,
        progress: newprogress
      };
    case PREV_SONG: // #TODO: Implement the real PREV_SONG after doing the music queue.
      newpayload = state.musics;
      newqueue = state.queue;
      newpayload[newpayload.findIndex(music => music.song === newqueue.rear())].playing = false;
      if (newqueue.getSize() > 1){
        newqueue.pop();
      index = newpayload.findIndex(music => music.song === newqueue.rear())
      newpayload[index].playing = true;
      newlastplayed = newpayload[index];
      }
      else {
        newpayload[newpayload.findIndex(music => music.song === newqueue.front())].playing = true;
        newlastplayed = state.lastplayed
      }
      newprogress = 0;
      return {
        ...state,
        musics: newpayload,
        playing: true,
        lastplayed: newlastplayed,
        progress: newprogress
      };
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
