import { getTopList, getRankingList } from '@/api/ranking';

import {
  CHANGE_TOP_LIST,
  CHANGE_CURRENT_INDEX,
  CHANGE_PLAY_LIST
} from './actionTypes';


const changeTopListAction = (res) => ({
  type: CHANGE_TOP_LIST,
  topList: res.list
});

const changePlayListAction = (res) => ({
  type: CHANGE_PLAY_LIST,
  playList: res.playlist
});

export const changeCurrentIndex = (index) => ({
  type: CHANGE_CURRENT_INDEX,
  currentIndex: index
}); 

export const getTops = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res));
    })
  }
};

export const getRanking = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      dispatch(changePlayListAction(res))
    })
  }
};