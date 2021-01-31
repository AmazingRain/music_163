import React, { memo } from 'react'

import { CommentAreaWrapper } from './style';
import { message } from 'antd';

export default memo(function CommentArea() {
  return (
   <CommentAreaWrapper>
     <img className="img" src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt=""/>
     <div className="content">
       <div className="content-main">
         <textarea placeholder="评论"></textarea>
       </div>
       <div className="content-footer">
         <div className="icons">
           <i className="comment_img smile"></i>
           <i className="comment_img at"></i>
         </div>
         <button className="btn button_img" onClick={() => message.info('评论功能暂未开启')}>评论</button>
       </div>
     </div>
   </CommentAreaWrapper>
  )
})
