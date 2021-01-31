import { combineReducers } from 'redux';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store';
import { reducer as songDetailReducer } from '../pages/song-detail/store';
import { reducer as commentReducer } from '../components/comment/store';


const reducers = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  songDetail: songDetailReducer,
  comment: commentReducer
});

export default reducers;