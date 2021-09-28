import { combineReducers } from "redux";
import {albumReducer, selectedAlbumReducer} from "./albumReducer"

export const reducers = combineReducers({
  allAlbums: albumReducer,
  album: selectedAlbumReducer,
});