import { getBanners, getHotRecommends, getNewAlbum, getTopList } from '@/api/recommend';

import {
  CHANGE_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_LIST,
  CHANGE_SOARING_LIST,
  CHANGE_NEW_SONG_LIST,
  CHANGE_ORIGINAL_LIST
} from './actionTypes';

export const changeBannnerAction = (res) => ({
  type: CHANGE_BANNER,
  banners: res.banners
})

export const changeTopRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res
})


export const changeNewAblumAction = (res) => ({
  type: CHANGE_NEW_ALBUM,
  newAblums: res.albums
})


export const changeTopListAction = (res) => ({
  type: CHANGE_TOP_LIST,
  topLists: res
})

export const changeSoaringList = (res) => ({
  type: CHANGE_SOARING_LIST,
  soaringList: res
})

export const changeNewSongList = (res) => ({
  type: CHANGE_NEW_SONG_LIST,
  newSongList: res
})

export const changeOriginalList = (res) => ({
  type: CHANGE_ORIGINAL_LIST,
  originalList: res
})

export const getBannerAction = () => {
  return dispatch => {
    getBanners()
      .then(res => {
        dispatch(changeBannnerAction(res))
      })
  }
}

export const getRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit)
      .then(res => {
        dispatch(changeTopRecommendAction(res.result))
      })
  }
}

export const getNewAlbumAction = (limit, offset) => {
  return dispatch => {
    getNewAlbum(limit, offset)
      .then(res => {
        dispatch(changeNewAblumAction(res))
      })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx)
      .then(res => {
        // console.log(res['playlist']);
        /**
         * 0：新歌榜
         * 2：原创榜
         * 3：飙升榜
         */
        switch (idx) {
          case 3:
            dispatch(changeSoaringList(res.playlist));
            break;
          case 0:
            dispatch(changeNewSongList(res.playlist))
            break;
          case 2:
            dispatch(changeOriginalList(res.playlist))
            break;
          default:
        }
      })
  }
}
