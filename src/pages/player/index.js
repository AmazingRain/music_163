import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import PlayBar from './play-bar';
import PlayPanel from './play-panel';

export default memo(function Player() {
  const { isShowPlayPanel } = useSelector(state => ({
    isShowPlayPanel: state.player.isShowPlayPanel
  }), shallowEqual);
  return (
    <div>
      <PlayBar />
      { isShowPlayPanel && <PlayPanel />}
    </div>
  )
})

