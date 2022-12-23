import request from '@/utils/request'

export function getbillboard(){
    return request({
        url: '/billboard/show',
        method: 'get'
    })
} 