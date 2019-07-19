import {
  GET_MUSICS,
  PLAY_MUSICS,
  CHANGE_REPEAT,
  NEXT_SONG,
  PREV_SONG,
  SHUFFLE_SONG
} from "../actions/types.js";
class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    this.data.push(item);
    return true;
  }

  dequeue(item) {
    if (this.isEmpty()) return undefined;

    return this.data.shift();
  }

  front() {
    if (this.isEmpty()) return undefined;

    return this.data[0];
  }

  rear() {
    if (this.isEmpty()) return undefined;

    return this.data[this.size - 1];
  }

  clear() {
    this.data.length = 0;
    this.size = 0;
  }
}
const initialState = {
  lastplayed: "",
  musics: [],
  playing: false,
  playMode: 0, // 0 is no repeat, 1 is repeat all, 2 is repeat one
  shuffle: false,
  queue: new Queue()
};

export default function(state = initialState, action) {
  let newpayload;
  let newlastplayed;
  let index;
  switch (action.type) {
    case GET_MUSICS:
      var newqueue = new Queue();
      newpayload = action.payload;
      newpayload.forEach(item => {
        newqueue.enqueue(item.song);
        item.playing = false;
      });

      return {
        ...state,
        queue: newqueue,
        musics: newpayload
      };
    case PLAY_MUSICS:
      let newplaying;
      newpayload = state.musics;
      newpayload.forEach(item => {
        if (action.payload === null) {
          // universal play button
          if (item.song === state.lastplayed && state.playing === true) {
            // pause playing music
            newplaying = false;
            item.playing = !item.playing;
            newlastplayed = item.song;
          } else if (
            item.song === state.lastplayed &&
            state.playing === false
          ) {
            // replay the paused music
            newplaying = true;
            item.playing = !item.playing;
            newlastplayed = item.song;
          } else if (state.lastplayed === "") {
            // play
            newpayload[0].playing = true;
            newplaying = true;
            newlastplayed = newpayload[0].song;
          }
        } else {
          //playlist button
          if (item.song === state.lastplayed) {
            // pause
            item.playing = !item.playing;
          } else if (item.song === action.payload) {
            // play
            newlastplayed = item.song;
            item.playing = !item.playing;
            newplaying = true;
          }
          if (state.lastplayed !== "") {
            // toggle old playlist song
            newpayload.forEach(payload => {
              if (payload.song === state.lastplayed) {
                newpayload[newpayload.indexOf(payload)].playing = false; // toggle
              }
            });
          }
        }
      });
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
      newpayload.forEach(item => {
        if (item.song === state.lastplayed && state.lastplayed !== "") {
          // make sure that something is playing and check for lastplayed
          index = newpayload.indexOf(item);
          if (state.shuffle === false) {
            // shuffle is off
            if (index + 1 < newpayload.length) {
              // check if it's last song
              newpayload[index].playing = false;
              newpayload[index + 1].playing = true;
              newlastplayed = newpayload[index + 1].song;
            } else {
              // it's last song so return to the first
              newpayload[index].playing = false;
              newpayload[0].playing = true;
              newlastplayed = newpayload[0].song;
            }
          } else {
            // shuffle is on
            let newindex = Math.floor(Math.random() * newpayload.length); // generate next random song index
            newpayload[index].playing = false;
            newpayload[newindex].playing = true;
            newlastplayed = newpayload[newindex].song;
          }
        }
      });
      return {
        ...state,
        musics: newpayload,
        playing: true,
        lastplayed: newlastplayed
      };
    case PREV_SONG: // #TODO: Implement the real PREV_SONG after doing the music queue.
      newpayload = state.musics;
      newpayload.forEach(item => {
        if (item.song === state.lastplayed && state.lastplayed !== "") {
          // make sure that something is playing and check for lastplayed
          index = newpayload.indexOf(item);
          if (state.shuffle === false) {
            // shuffle is off
            if (index + 1 < newpayload.length) {
              // check if it's last song
              newpayload[index].playing = false;
              newpayload[index + 1].playing = true;
              newlastplayed = newpayload[index + 1].song;
            } else {
              // it's last song so return to the first
              newpayload[index].playing = false;
              newpayload[0].playing = true;
              newlastplayed = newpayload[0].song;
            }
          } else {
            // shuffle is on
            let newindex = Math.floor(Math.random() * newpayload.length); // generate next random song index
            newpayload[index].playing = false;
            newpayload[newindex].playing = true;
            newlastplayed = newpayload[newindex].song;
          }
        }
      });
      return {
        ...state,
        musics: newpayload,
        playing: true,
        lastplayed: newlastplayed
      };
    default:
      return state;
  }
}
