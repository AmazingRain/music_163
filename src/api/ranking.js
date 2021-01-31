import { request1 } from './axios';

export function getTopList() {
  return request1({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getRankingList(id) {
  return request1({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}