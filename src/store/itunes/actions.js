import { LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE } from "./constants";

const fetch_playlist = (qry) => dispatch => {
  fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${qry}`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: LOAD_PLAYLIST_SUCCESS, payload: removeDuplicateObjectFromArray(res.results, "collectionName") }))
    .catch((error) => {
      console.error(error);
      dispatch({ type: LOAD_PLAYLIST_FAILURE, payload: error });
    });
};

const removeDuplicateObjectFromArray = (array, key) => {
    var check = new Set();
    return array.filter((obj) => !check.has(obj[key]) && check.add(obj[key]));
  };

export default fetch_playlist;
