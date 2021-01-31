import React, { memo } from 'react'

import { CommentHeaderWrapper } from './style';
export default memo(function CommentHeader() {
  return (
    <CommentHeaderWrapper>
      <h3 className="title">评论</h3>
      <span className="total">共55302条评论</span>
    </CommentHeaderWrapper>
  )
})
