/* vue.config.js */

module.exports = {

    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    productionSourceMap: false,

    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '安迪曼大学'
                return args
            })
    },

    css: {
        // split css
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({ // 把px单位换算成rem单位
                        rootValue: 75, // 换算的基数(设计图750的根字体为75)
                        // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']//*代表将项目中的全部进行转换，单个转换如width、height等
                    })
                ]
            }
        }
    },

    /* dev proxy server */
    devServer: {

        host: '0.0.0.0',
        port: 65533,

        https: false,
        http2: false,

        writeToDisk: false,

        /* refresh pages manually when changes */
        lazy: false,
        hot: true,
        watchContentBase: false,
        liveReload: true,

        /* open browser manually */
        open: false,

        /* use gzip for static resources */
        compress: true,
        disableHostCheck: true,
        /* add response headers */
        headers: { },

        /* proxy requests */
        // proxy: proxyObj,
        proxy: {
            '/api2': {
                target: 'https://odm-server.odmlearning.com/api2',
                changeOrigin: true,
                pathRewrite: { '^/api2' : '', },
            },
        },

    },
}
