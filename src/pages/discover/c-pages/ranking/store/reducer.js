import {
  CHANGE_TOP_LIST,
  CHANGE_CURRENT_INDEX,
  CHANGE_PLAY_LIST
} from './actionTypes';


const defaultState = {
  topList: [],
  currentIndex: 0,
  playList: {}
};


function reducer(state = defaultState, action) {
  switch(action.type) {
    case CHANGE_TOP_LIST:
      return { ...state, topList: action.topList};
    case CHANGE_CURRENT_INDEX:
      return { ...state, currentIndex: action.currentIndex };
    case CHANGE_PLAY_LIST:
      return { ...state, playList: action.playList };
    default:
      return state;
  }
}

export default reducer;