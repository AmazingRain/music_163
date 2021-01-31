import {
  CHANGE_SONG_DETAIN_INFO,
  CHANGE_SONG_RELEVENT_PLAYLIST,
  CHANGE_SONG_RELEVENT_SONGS,
  CHNAGE_SONG_LYRICLIST,
  CHANGE_IS_SHOW_RESULT,
  CHANGE_SEARCH_RESULT
} from './actionTypes';

const defaultState = {
  songInfo: {},
  releventSongs: [],
  releventPlayList: [],
  lyricList: [],
  searchResutSongs: [],
  isShowSearchResult: false
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SONG_DETAIN_INFO:
      return { ...state, songInfo: action.songInfo };
    case CHANGE_SONG_RELEVENT_SONGS:
      return { ...state, releventSongs: action.releventSongs };
    case CHANGE_SONG_RELEVENT_PLAYLIST:
      return { ...state, releventPlayList: action.releventPlayList };
    case CHNAGE_SONG_LYRICLIST:
      return { ...state, lyricList: action.lyricList };
    case CHANGE_SEARCH_RESULT:
      return { ...state, searchResutSongs: action.searchResutSongs };
    case CHANGE_IS_SHOW_RESULT:
      return { ...state, isShowSearchResult: action.isShowSearchResult };
    default:
      return state;
  }
}

export default reducer;