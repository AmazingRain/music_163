import React, { memo } from 'react'

import { FriendWrapper } from './style';

export default memo(function Friend() {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <div className="login">立即登录</div>
        </div>
      </div>
    </FriendWrapper>
  )
})
