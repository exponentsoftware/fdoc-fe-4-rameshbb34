  
import { ActionTypes } from "../constants/actionTypes";
export const setAlbum = (albums) => {
  return {
    type: ActionTypes.SET_ALBUM,
    payload: albums,
  };
};

export const deleteAlbum = (id) => {
  return {
    type: ActionTypes.DELETE_ALBUM,
    payload: id,
  };
};