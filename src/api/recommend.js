/**
 * request1：服务器为3.4之后的版本
 * request2：服务器为3.4之前
 * 3.4之后部分不能使用，没有找打对应的接口
 */
import { request1, request2 } from './axios';

// 轮播图
export function getBanners() {
  return request1({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends(limit) {
  return request1({
    url: '/personalized',
    params: {
      limit
     }
  })
}

// 新碟上架
export function getNewAlbum(limit, offset) {
  return request1({
    url: "/album/new",
    params: {
      limit
    }
  })
}

// 排行榜
export function getTopList(idx) {
  return request2({
    url: "/top/list",
    params: {
      idx
    }
  })
}


export function getArtistList(limit, cat) {
  return request1({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}