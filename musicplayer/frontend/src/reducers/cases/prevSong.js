export default function prevSong(state){
    var newpayload = state.musics;
    var newqueue = state.queue;
    newpayload[newpayload.findIndex(music => music.song === newqueue.rear())].playing = false;
    if (newqueue.getSize() > 1) {
      newqueue.pop();
      var index = newpayload.findIndex(music => music.song === newqueue.rear())
      newpayload[index].playing = true;
      var newlastplayed = newpayload[index];
    }
    else {
      newpayload[newpayload.findIndex(music => music.song === newqueue.front())].playing = true;
      newlastplayed = state.lastplayed
    }
    var newprogress = 0;
    return {
      ...state,
      musics: newpayload,
      playing: true,
      lastplayed: newlastplayed,
      progress: newprogress
    };
}