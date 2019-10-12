import axios from "axios";

import {
  GET_MUSICS,
  UPDATE_MUSICS,
  UPLOAD_SONG,
  SONG_PROCESS_UPLOAD,
  EDIT_SONG,
  PROCESS_EDIT,
  DELETE_SONG,
  SONG_PROCESS_DELETE
} from "./types";

export const getMusics = () => dispatch => {
  axios
    .get("/api/musics/")
    .then(res => {
      dispatch({ type: GET_MUSICS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const updateMusics = (updatedmusics) => dispatch => {
  dispatch({ type: UPDATE_MUSICS, payload: updatedmusics });
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
    dispatch({ type: SONG_PROCESS_UPLOAD, payload: res.data });
  }).catch(err => console.log(err))
}
export const editSong = () => dispatch => {
  dispatch({ type: EDIT_SONG });
};
export const processEditSong = (index, editForm, original) => dispatch => {
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
export const processDeleteSong = (id) => dispatch => {
  var url = "/api/musics/" + String(id) + "/";
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.delete(url, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "multipart/form-data",
      "Cache-Control": "no-cache",
    }
  }).then(dispatch({ type: SONG_PROCESS_DELETE, payload: id })).catch(err => console.log(err))
}