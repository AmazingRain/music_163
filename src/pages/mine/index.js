import React, { memo } from 'react'

import { MineWrapper } from './style';

export default memo(function Mine() {
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <div className="login">立即登录</div>
        </div>
      </div>
    </MineWrapper>   
  )
})
