import {
  CHANGE_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_SOARING_LIST,
  CHANGE_NEW_SONG_LIST,
  CHANGE_ORIGINAL_LIST
} from './actionTypes';

const defaultState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  // 三个排行榜的数据
  soaringList: {},
  newSongList: {},
  originalList: {}
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommends: action.hotRecommends };
    case CHANGE_NEW_ALBUM:
      return { ...state, newAlbums: action['newAblums'] };
    case CHANGE_SOARING_LIST:
      return { ...state, soaringList: action['soaringList'] }
    case CHANGE_NEW_SONG_LIST:
      return { ...state, newSongList: action['newSongList'] }
    case CHANGE_ORIGINAL_LIST: 
      return { ...state, originalList: action['originalList'] }
    default:
      return state;
  }
}

export default reducer;

// import { Map } from 'immutable';
// import { CHANGE_BANNER } from './actionTypes';

// const defaultState = Map({
//   banners: []
// });

// function reducer(state = defaultState, action) {
//   switch(action.type) {
//     case CHANGE_BANNER:
//       return state.set('banners', action.banners)
//     default:
//       return state;
//   }
// }

// export default reducer;