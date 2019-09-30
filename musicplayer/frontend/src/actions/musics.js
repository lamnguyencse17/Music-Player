import axios from "axios";

import {
  GET_MUSICS,
  GET_ALBUM,
  PLAY_MUSICS,
  CHANGE_REPEAT,
  NEXT_SONG,
  PREV_SONG,
  SHUFFLE_SONG,
  VOLUME_CHANGE,
  UPDATE_PROGRESS,
  UPLOAD_SONG,
  PROCESS_UPLOAD,
  EDIT_SONG,
  PROCESS_EDIT,
  DELETE_SONG,
  PROCESS_DELETE
} from "./types";

export const getMusics = () => dispatch => {
  axios
    .get("/api/musics/")
    .then(res => {
      dispatch({ type: GET_MUSICS, payload: res.data });
    })
    .catch(err => console.log(err));
};
export const getAlbum = () => dispatch => {
  axios
    .get("/api/album/")
    .then(res=> {
      dispatch({type: GET_ALBUM, payload: res.data[0] });
    })

}

export const playMusics = song => dispatch => {
  dispatch({ type: PLAY_MUSICS, payload: song });
};

export const changeRepeat = () => dispatch => {
  dispatch({ type: CHANGE_REPEAT });
};

export const nextSong = () => dispatch => {
  dispatch({ type: NEXT_SONG });
};

export const prevSong = () => dispatch => {
  dispatch({ type: PREV_SONG });
};

export const shuffleSong = () => dispatch => {
  dispatch({ type: SHUFFLE_SONG });
};
export const changeVolume = volume => dispatch => {
  dispatch({ type: VOLUME_CHANGE, payload: volume });
};
export const updateProgress = position => dispatch => {
  dispatch({ type: UPDATE_PROGRESS, payload: position })
}
export const uploadSong = () => dispatch => {
  dispatch({ type: UPLOAD_SONG });
};
export const processUpload = (uploadForm) => dispatch => {
  var formData = new FormData();
  formData.append("source", uploadForm.source[0]);
  formData.append("song", uploadForm.title);
  formData.append("artist", uploadForm.artist);
  formData.append("genre", uploadForm.genre)
  formData.append("album", uploadForm.name)
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.post("/api/musics/", formData, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "multipart/form-data",
      "Cache-Control": "no-cache",
    }
  }).then(res => {
    dispatch({ type: PROCESS_UPLOAD, payload: res.data });
  }).catch(err => console.log(err))
}
export const editSong = () => dispatch => {
  dispatch({ type: EDIT_SONG });
};
export const processEdit = (index, editForm, original) => dispatch => {
  var formData = new FormData();
  for (var key in editForm) {
    formData.append(key, editForm[key]);
  }
  var url = "/api/musics/" + String(original.id) + "/";
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.patch(url, formData, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "multipart/form-data",
      "Cache-Control": "no-cache",
    }
  }).then(res => {
    dispatch({ type: PROCESS_EDIT, payload: res.data });
  }).catch(err => console.log(err))
}
export const deleteSong = () => dispatch => {
  dispatch({ type: DELETE_SONG })
}
export const processDelete = (id) => dispatch => {
  var url = "/api/musics/" + String(id) + "/";
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.delete(url, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "multipart/form-data",
      "Cache-Control": "no-cache",    
    }
  }).then(dispatch({ type: PROCESS_DELETE, payload: id })).catch(err => console.log(err))
}