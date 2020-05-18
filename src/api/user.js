import qs from 'qs'
import request from '@/utils/request'

// 登录
export function login(params) {
  return request({
    url: '/ruleCommon/queryrule',
    method: 'post',
    data: qs.stringify(params),
    hideloading: true // 隐藏loading
  })
}
