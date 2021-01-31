import { request1 } from './axios';

// 根据 ids 获取对应歌曲的信息
export function getSongDetail(ids) {
  return request1({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 根据id获取相应歌曲的歌词信息
export function getLyric(id) {
  return request1({
    url: "/lyric",
    params: {
      id
    }
  })
}


// 根据id获取包含了这首歌的歌单
export function getSimilarPlaylist(id) {
  return request1({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

// 根据id获取这首歌的想似歌曲
export function getSimilarSong(id) {
  return request1({
    url: "/simi/song",
    params: {
      id
    }
  })
}