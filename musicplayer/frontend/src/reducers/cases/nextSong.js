export default function nextSong(state){
    var newpayload = state.musics;
    var newplaying = state.playing
    var newlastplayed = state.lastplayed
    var newprogress = state.progress
    var newqueue = state.queue;
      if (state.playMode === 0) {
        if (state.playing === true) { // check if it's playing
          var index = newpayload.findIndex(payload => payload.song === state.lastplayed.song) //index of playing song
          if (state.shuffle === false) {
            if (index + 1 < newpayload.length) { // check if it's last song
              newpayload[index].playing = false;
              newpayload[index + 1].playing = true;
              newlastplayed = newpayload[index + 1];
            }
            else { // it's the last song so return to the first
              newpayload[index].playing = false;
              newpayload[0].playing = true;
              newplaying = true
              newlastplayed = newpayload[0];
            }
          }
          else {
            var newindex = Math.floor(Math.random() * newpayload.length); // generate next random song index
            newpayload[index].playing = false;
            newpayload[newindex].playing = true;
            newlastplayed = newpayload[newindex];
          }
        }
      }
      else if (state.playMode === 1) { // REPEAT ALL
        if (state.playing === true) {
          index = newpayload.findIndex(payload => payload.song === state.lastplayed.song) //index of playing song
          if (state.shuffle === false) { // shuffle off
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
          }
          else { // shuffle on
            let newindex = Math.floor(Math.random() * newpayload.length); // generate next random song index
            newpayload[index].playing = false;
            newpayload[newindex].playing = true;
            newlastplayed = newpayload[newindex];
          }
        }
      }
      else {
        if (state.playing === true) {
          newlastplayed = state.lastplayed;
          newprogress = 0
        }
      }
      newplaying = true
      if (state.playMode !== 2) {
        newqueue = state.queue;
        if (newqueue.rear() !== newlastplayed.song) {
          newqueue.push(newlastplayed.song)
        }
      }
      newprogress = 0;
      return {
        ...state,
        musics: newpayload,
        playing: newplaying,
        lastplayed: newlastplayed,
        progress: newprogress
      };
}