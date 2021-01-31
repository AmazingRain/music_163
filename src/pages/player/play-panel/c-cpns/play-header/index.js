import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { changeIsShowPlayPannelAction } from '@/pages/player/store/actionCreators';

import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function PlayHeader() {
  const { playList, currentSong } = useSelector(state => ({
    playList: state.player.playList,
    currentSong: state.player.currentSong,
    isShowPlayPanel: state.player.isShowPlayPanel
  }), shallowEqual);

  const dispatch = useDispatch();

  const closePlayPanel = () => {
    dispatch(changeIsShowPlayPannelAction(false));
  };
  
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        {/* <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div> */}
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
        <i className="close" onClick={closePlayPanel}>X</i>
      </HeaderRight>
    </HeaderWrapper>
  )
})
