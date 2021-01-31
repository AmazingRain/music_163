import {
  getSongDetail,
  getLyric,
  getSimilarPlaylist,
  getSimilarSong
} from '@/api/song';

import { searchByKeyWords } from '@/api/search';

import {
  CHANGE_SONG_DETAIN_INFO,
  CHNAGE_SONG_LYRICLIST,
  CHANGE_SONG_RELEVENT_SONGS,
  CHANGE_SONG_RELEVENT_PLAYLIST,
  CHANGE_IS_SHOW_RESULT,
  CHANGE_SEARCH_RESULT
} from './actionTypes';


import { parseLyric } from '@/utils/lrc-parse';

export const changeSongDetailAction = (songInfo) => ({
  type: CHANGE_SONG_DETAIN_INFO,
  songInfo
});


export const changeSongLyricListAction = (lyricList) => ({
  type: CHNAGE_SONG_LYRICLIST,
  lyricList
});

export const changeReleventPlayList = (releventPlayList) => ({
  type: CHANGE_SONG_RELEVENT_PLAYLIST,
  releventPlayList
});


export const changeReleventSongs = (releventSongs) => ({
  type: CHANGE_SONG_RELEVENT_SONGS,
  releventSongs
});

export const changeSearchResultAction = (searchResutSongs) => ({
  type: CHANGE_SEARCH_RESULT,
  searchResutSongs
});

export const changeIsShowResultAction = (isShowSearchResult) => ({
  type: CHANGE_IS_SHOW_RESULT,
  isShowSearchResult
});

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(result => {
      dispatch(changeSongDetailAction(result.songs[0]))
    })
  }
};

export const getLyricAction = (id) => {
  return dispatch => {
    if (!id) return;
    getLyric(id)
      .then(res => {
        const lyric = res.lrc.lyric;
        const lyricList = parseLyric(lyric);
        dispatch(changeSongLyricListAction(lyricList));
      })
  }
};

export const getSimilarPlaylistAction = (id) => {
  return dispatch => {
    getSimilarPlaylist(id)
      .then(result => {
        // console.log(result.playlists);
        dispatch(changeReleventPlayList(result.playlists));
      })
  }
};

export const getSimilarSongAction = (id) => {
  return dispatch => {
    getSimilarSong(id)
      .then(result => {
        // console.log(result);
        dispatch(changeReleventSongs(result.songs));
      })
  }
};

export const searchResultAction = (keywords = ' ') => {
  return dispatch => {
    searchByKeyWords(keywords)
      .then(result => {
        if(!result) return;

        const { songs = [] } = result.result;
        dispatch(changeSearchResultAction(songs));
      })
  }
};