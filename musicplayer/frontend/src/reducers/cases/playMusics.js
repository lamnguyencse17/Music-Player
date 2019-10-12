
export default function playMusics(state, payload, musics) {
  var newpayload = musics;
  var newqueue = state.queue;
  var newlastplayed = state.lastplayed
  var newplaying = state.playing
  if (Object.keys(state.lastplayed).length === 0 && state.lastplayed.constructor === Object && payload === null) { // play first
    newqueue.push(newpayload[0].song)
    newpayload[0].playing = true;
    newplaying = true;
    newlastplayed = newpayload[0];
  }
  else {
    var index = newpayload.findIndex(item => item.song === state.lastplayed.song)
    if (Object.keys(state.lastplayed).length !== 0) {
      newplaying = !newpayload[index].playing;
      newpayload[index].playing = !state.playing
      newlastplayed = newpayload[index]
      if (payload !== null && payload !== state.lastplayed.song) {
        newpayload.forEach(item => {
          if (item.song === payload) {
            newplaying = true;
            newpayload[newpayload.findIndex(item => item.song === payload)].playing = true;
            newpayload[index].playing = false;
            newlastplayed = newpayload[newpayload.findIndex(item => item.song === payload)]
          }
        })
      }
    }
    else {
      newpayload.forEach(item => {
        if (item.song === payload) {
          newpayload[newpayload.findIndex(item => item.song === payload)].playing = true;
          newlastplayed = newpayload[newpayload.findIndex(item => item.song === payload)]
        }
      })
      newplaying = true;
    }
  }
  if (newqueue.rear() !== newlastplayed.song) {
    newqueue.push(newlastplayed.song)
  }
  return {
    ...state,
    lastplayed: newlastplayed,
    musics: newpayload,
    playing: newplaying
  };
}