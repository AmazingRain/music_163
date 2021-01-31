import { getSongDetail, getLyric } from '@/api/song';
import { getRandomNumber } from '@/utils/data-format';
import { parseLyric } from '@/utils/lrc-parse';

import { CHANGE_CURRENT_SONG, CHANGE_PLAY_LIST, CHANGE_CURRENT_SONG_INDEX, CHANGE_SEQUENCE, CHANGE_LYRIC_LIST, CHANGE_CURRENT_LYRIC_INDEX, CHANGE_SOUND_SIZE, CHANGE_IS_SHOW_PLAY_PANEL } from './actionTypes';


export const changeCurrentSongAction = (song) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong: song
})


export const changePlayListAction = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList
})

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

export const changeSequenceAction = (sequence) => ({
  type: CHANGE_SEQUENCE,
  sequence
})

export const changeLyricListAction = (lyricList) => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurreentLyricIndexAction = (currentLyricIndex) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

export const changeSoundSizeAction = (soundSize) => ({
  type: CHANGE_SOUND_SIZE,
  soundSize
})

export const changeIsShowPlayPannelAction = (isShowPlayPanel) => ({
  type: CHANGE_IS_SHOW_PLAY_PANEL,
  isShowPlayPanel
})

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    /**
     * 1.根据id在播放列表中查找此歌曲是否存在
     *    1.1 若存在，则更改 currentSongIndex 和 currenSong
     *    1.2 若不存咋，则请求当前歌曲的数据
     *        1.2.1 请求到后将歌曲的信息添加到当前播放的歌曲里卖弄 和  将最新的到的歌曲添加到播放列表里面 以及当亲歌曲的下标
     */
    if(!ids) return;
    const { playList = [] } = getState().player;
    const songIndex = playList.findIndex(song => song.id === ids);

    let song = null;
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song));
      // 请求对应歌曲的歌词信息
      dispatch(getLyricAction(song.id));
    } else {
      getSongDetail(ids)
        .then(res => {
          song = res.songs && res.songs[0];
          if (!song) return;
          dispatch(changeCurrentSongAction(song));
          const newPlayList = [...playList];
          newPlayList.push(song);
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
          // 请求对应歌曲的歌词信息
          dispatch(getLyricAction(song.id));
        })
    }

  }
}


export const changeCurrentSongBySequenceAction = (type) => {
  return (dispatch, getState) => {
    let { sequence, currentSongIndex, playList } = getState().player;

    switch (sequence) {
      case 1: // 随机
        let randomIndex = getRandomNumber(0, playList.length);
        randomIndex = randomIndex !== currentSongIndex ? randomIndex : getRandomNumber(0, playList.length);
        currentSongIndex = randomIndex;
        break;
      default:
        currentSongIndex += type;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    
    dispatch(getLyricAction(currentSong.id));

  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    if(!id) return;
    getLyric(id)
      .then(res => {
        const lyric = res.lrc.lyric;
        const lyricList = parseLyric(lyric);
        dispatch(changeLyricListAction(lyricList));
      })
  }
}