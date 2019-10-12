import {combineReducers} from 'redux';
import musics from './musics';
import album from './album';
import control from './control';

export default combineReducers({musics, album, control});