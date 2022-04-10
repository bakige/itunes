import { LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE } from "./constants";

const initialState = {
  playlist: [
    { collectionName: "A" },
    { collectionName: "B" },
    { collectionName: "C" },
    { collectionName: "D" },
    { collectionName: "E" },
  ],
};

const playlistReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOAD_PLAYLIST_SUCCESS:
      return [...state, ...payload];
    case LOAD_PLAYLIST_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default playlistReducer;
