import React, { memo, Fragment } from 'react'


import { shallowEqual, useSelector } from 'react-redux';

import { CommentListWrapper } from './style';

import { formatHourMinute, formatMonthDay } from '@/utils/data-format';






export default memo(function CommentList() {
  const { hotComments, comments } = useSelector(state => ({
    hotComments: state.comment.hotComments,
    comments: state.comment.comments
  }), shallowEqual);

  const HotCommponents = () => {
    return (
      <Fragment>
        <h3 className="list-title">精彩评论</h3>
        {
          hotComments.map((item, indx) => {
            return (
              <div className="list-item" key={item.content + item.user.nickname}>
                <img className="logo" src={item.user.avatarUrl} alt="" />
                <div className="list-item-content">
                  <p><span className="user">{item.user.nickname}</span>：{item.content}</p>
                  <div className="content-footer">
                    <span className="time">{formatMonthDay(item.time)} {formatHourMinute(item.time)}</span>
                    <div className="more">
                      <i className="like icon2_img"></i>
                      <span>({item.likedCount})</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Fragment>
    )
  };


  return (
    <CommentListWrapper>
      { hotComments.length !== 0 && <HotCommponents />}
      <h3 className="list-title">全部评论</h3>
      {
        comments.map((item, indx) => {
          return (
            <div className="list-item" key={item.content + item.user.nickname}>
              <img className="logo" src={item.user.avatarUrl} alt="" />
              <div className="list-item-content">
                <p><span className="user">{item.user.nickname}</span>：{item.content}</p>
                <div className="content-footer">
                  <span className="time">{formatMonthDay(item.time)} {formatHourMinute(item.time)}</span>
                  <div className="more">
                    <i className="like icon2_img"></i>
                    <span>({item.likedCount})</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }

      

    </CommentListWrapper>
  )
})
