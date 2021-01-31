import { request1 } from './axios';

export function getCommentBySongId(id, num = 1) {
  return request1({
    url: '/comment/music',
    params: {
      id,
      offset: 20 * (num -1)
    }
  })
}