import React, { memo, useEffect, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Pagination } from 'antd';
import { CommentWraapper } from './style';
import { getCommentBySongIdAction } from './store/createActions';

import CommnetHeader from './c-cpns/comment-header';
import CommentArea from './c-cpns/comment-area';
import CommentList from './c-cpns/comment-list';

export default memo(function Comment(props) {
  const { id } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const { total } = useSelector(state => ({
    total: state.comment.total
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentBySongIdAction(id, currentPage));
  });

  const onChange = (current) => {
    setCurrentPage(current);
  }

  return (
    <CommentWraapper>
      <CommnetHeader/>
      <CommentArea/>
      <CommentList/>
      <Pagination 
        total={Math.ceil(total / 20)}
        defaultPageSize={1}
        defaultCurrent={1}
        showSizeChanger={false}
        onChange={onChange}
      />
    </CommentWraapper>
  )
})
