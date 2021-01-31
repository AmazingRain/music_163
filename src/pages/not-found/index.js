import React, { memo } from 'react'


import {NotFoundWrapper} from './style';
export default memo(function NotFound() {
  return (
    <NotFoundWrapper>
      <div className="content">
        <i className="logo_img"></i>
        <p>很抱歉，你要查找的网页找不到</p>
      </div>
    </NotFoundWrapper>
  )
})
