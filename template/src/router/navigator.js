/**
 * @author valor.
 */
const Login = () => import(/* webpackChunkName: "views.login" */ '@/views/Login.vue')
const Home = () => import(/* webpackChunkName: "views.login" */ '@/views/Home.vue')

const _nav = [
    {
        icon: 'el-icon-location',
        title: '首页',
        children: [
            {
                title: '数据统计',
                path: 'home',
                compo: Home
            },
        ],
    },
    {
        icon: 'el-icon-location',
        title: '导航二',
        children: [
            {
                title: '主页1',
                path: 'home1',
                compo: Login
            },
            {
                title: '关于2',
                path: 'about2',
                compo: Login
            },
        ],
    },
]

export default _nav
