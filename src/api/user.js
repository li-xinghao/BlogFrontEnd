import request from '@/utils/request'

export function userRegister(user){
    return request({
        url: '/user/register',
        method: 'post',
        data: user
    })
} 
export function login(data){
    return request({
        url: '/user/login',
        method: 'post',
        data: data
    })
}
// 获取用户信息
export function getUserInfo(){
    return request({
        url: '/user/Info',
        method: 'get'
    })
}
// 更新
export function update(user) {
    return request({
      url: '/user/update',
      method: 'post',
      data: user
    })
  }

export function logout() {
    return request({
      url: '/user/logout',
      method:'get'
    })
}
// 用户主页
export function getInfoByName(username, page, size) {
    return request({
      url: '/user/' + username,
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }