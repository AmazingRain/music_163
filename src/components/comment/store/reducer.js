import {
  CHANEG_COMMENT_TOTAL,
  CHANAGE_HOT_COMMENT,
  CHANGE_COMMENT
} from './actionTypes';

const defaultState = {
  total: '',
  hotComments: [],
  comments: []
};

function reducer(state = defaultState, action) {
  switch(action.type) {
    case CHANEG_COMMENT_TOTAL:
      return { ...state, total: action.total };
    case CHANAGE_HOT_COMMENT:
      return { ...state, hotComments: action.hotComments };
    case CHANGE_COMMENT:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
}

export default reducer;