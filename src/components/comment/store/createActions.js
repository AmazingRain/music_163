import { getCommentBySongId } from '@/api/comment';

import {
  CHANGE_COMMENT,
  CHANEG_COMMENT_TOTAL,
  CHANAGE_HOT_COMMENT
} from './actionTypes';

export const changeTotalAction = (total) => ({
  type: CHANEG_COMMENT_TOTAL,
  total
});

export const changeHotCommentAction = (hotComments) => ({
  type: CHANAGE_HOT_COMMENT,
  hotComments
});


export const changeComments = (comments) => ({
  type: CHANGE_COMMENT,
  comments
});
export const getCommentBySongIdAction = (id, num = 1) => {
  return dispatch => {
    getCommentBySongId(id, num)
      .then(result => {
        // console.log(result);
        if (num === 1) {
          dispatch(changeHotCommentAction(result.hotComments));
        }
        dispatch(changeTotalAction(result.total));
        dispatch(changeComments(result.comments));
      })
  }
}