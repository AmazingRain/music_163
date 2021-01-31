import React, { memo } from 'react'
import { useDispatch ,useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';
import { message } from 'antd';

import { changeCurrentSongAction, changeCurrentSongIndexAction,  getLyricAction, changePlayListAction } from '@/pages/player/store/actionCreators';
import { formatMinuteSecond } from '@/utils/data-format';
import { PlayListWrapper } from './style';


export default memo(function PlayList() {
  const { playList = [], currentSongIndex } = useSelector(state => ({
    playList: state.player.playList,
    currentSongIndex: state.player.currentSongIndex,
  }), shallowEqual);


  const dispatch = useDispatch();

  // 播放当前选中的歌曲
  const playMusic = (index) => {
    const song = playList[index];
    if (!song) return;
    dispatch(changeCurrentSongIndexAction(index));
    dispatch(changeCurrentSongAction(song));
    dispatch(getLyricAction(song.id));  
  };

  // 有bug，歌曲删除后，页面没有及时的刷新
  const removeCurrentSong = (index) => {
    // const tempPlayList = playList;
    let tempPlayList = [...playList];
    if (tempPlayList.length === 1) {
      return message.warn('至少保留一首歌曲');
    }
    tempPlayList.splice(index, 1);
    dispatch(changePlayListAction(tempPlayList));
  };

  return (
    <PlayListWrapper>
      {
        playList.map((item, index) => {
          return (
            <div key={item.name}
              className={classNames("play-item", { "active": currentSongIndex === index})}
             
            >
              <div className="left"  onClick={() => playMusic(index)}>{item.name}</div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <i className="sprite_playlist remove" onClick={() => removeCurrentSong(index)}></i>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})
