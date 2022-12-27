import request from '@/utils/request'

export function fetchCommentsByTopicId(id) {
  return request({
    url: `/comment/get_comments/${id}`,
    method: 'get'
  })
}
export function pushComment(data) {
  return request({
    url: '/comment/add_comment',
    method: 'post',
    data: data
  })
}