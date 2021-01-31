import { request1 } from './axios';

export function searchByKeyWords(keywords) {
  return request1({
    url: '/search',
    params: {
      keywords
    }
  })
}