// 导入封装好的axios实例
import request from '@/store/request'

let config={
    headers: {
        'Content-Type': 'application/json',
    }
}

const http ={
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url,params){
        const config = {
            method: 'get',
            url: url,
        }
        if(params) config.params = params
        return request(config)
    },
    post(url,params){
        const config = {
            method: 'post',
            url: url,
            config: config,
        }
        if(params) config.data = params
        return request(config)
    },
    postFile(url,params){
        const config = {
            method: 'post',
            url: url,
        }
        if(params) config.data = params
        return request(config)
    },
    upPic(url,params){
        const config = {
            method: 'post',
            url: 'https://files.ondemandcn.net/pic/ups',
        }
        if(params) config.data = params
        return request(config)
    },
}
//导出
export default http