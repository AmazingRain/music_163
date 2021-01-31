import React, {memo} from 'react';
import { message } from 'antd';

import { 
  UserLoginWrapper 
} from "./style";

export default memo(function UserLogin() {
  return (
    <UserLoginWrapper className="sprite_02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div onClick={() => message.warning('暂不支持')}>用户登录</div>
    </UserLoginWrapper>
  )
})

