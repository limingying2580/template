import http from '@/store/http'

let aps = '/api2'

// 获取商品信息
export function getOrder(str,params){
    return http.get(`${aps}/order/v2/goods/one${str}`,params)
}
// 商品支付
export function orderFu(params){
    return http.post(`${aps}/order/v2/payment/mweb`,params)
}
