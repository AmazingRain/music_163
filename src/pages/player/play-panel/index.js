import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import PlayHeader from './c-cpns/play-header';
import PlayerList from './c-cpns/play-list';
import LyricPanel from './c-cpns/lyric-panel';

import { PanelWrapper } from './style';


export default memo(function PlayList() {
  const { currentSong} = useSelector(state => ({
    currentSong: state.player.currentSong
  }), shallowEqual);

  // 图片模糊处理
  const bgPic = currentSong.al && currentSong.al.picUrl;
  const bgImage = bgPic && bgPic.indexOf('?imageView') === -1 ? (bgPic + '?imageView&blur=40x20') : (bgPic + '&blur=40x20');
  
  return (
    <PanelWrapper>
      <PlayHeader />
      <div className="main">
        <img className="image" src={bgImage} alt="" />
        <PlayerList/>
        <LyricPanel/>
      </div>
    </PanelWrapper>
  )
})
