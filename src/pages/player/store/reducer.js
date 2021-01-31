import {
  CHANGE_CURRENT_SONG, 
  CHANGE_PLAY_LIST, 
  CHANGE_CURRENT_SONG_INDEX, 
  CHANGE_SEQUENCE, 
  CHANGE_LYRIC_LIST, 
  CHANGE_CURRENT_LYRIC_INDEX, 
  CHANGE_SOUND_SIZE, 
  CHANGE_IS_SHOW_PLAY_PANEL,
} from './actionTypes';

const defaultState = {
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 0,   // 0：循环  1：随机 2：单曲,
  lyricList: [],
  currentLyricIndex: 0,
  soundSize: 50,
  isShowPlayPanel: false,
  isShowSound: false
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.currentSong };
    case CHANGE_PLAY_LIST:
      return { ...state, playList: action.playList };
    case CHANGE_CURRENT_SONG_INDEX:
      return { ...state, currentSongIndex: action.currentSongIndex };
    case CHANGE_SEQUENCE:
      return { ...state, sequence: action.sequence };
    case CHANGE_LYRIC_LIST:
      return { ...state, lyricList: action.lyricList };
    case CHANGE_CURRENT_LYRIC_INDEX:
      return { ...state, currentLyricIndex: action.currentLyricIndex };
    case CHANGE_SOUND_SIZE:
      return { ...state, soundSize: action.soundSize};
    case CHANGE_IS_SHOW_PLAY_PANEL:
      return { ...state, isShowPlayPanel: action.isShowPlayPanel };
    default:
      return state;
  }
}

export default reducer;