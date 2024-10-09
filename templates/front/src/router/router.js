import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import gerenxinxiList from '../pages/gerenxinxi/list'
import gerenxinxiDetail from '../pages/gerenxinxi/detail'
import gerenxinxiAdd from '../pages/gerenxinxi/add'
import zhaopinzixunList from '../pages/zhaopinzixun/list'
import zhaopinzixunDetail from '../pages/zhaopinzixun/detail'
import zhaopinzixunAdd from '../pages/zhaopinzixun/add'
import jiuyexinxiList from '../pages/jiuyexinxi/list'
import jiuyexinxiDetail from '../pages/jiuyexinxi/detail'
import jiuyexinxiAdd from '../pages/jiuyexinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusszhaopinzixunList from '../pages/discusszhaopinzixun/list'
import discusszhaopinzixunDetail from '../pages/discusszhaopinzixun/detail'
import discusszhaopinzixunAdd from '../pages/discusszhaopinzixun/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'gerenxinxi',
					component: gerenxinxiList
				},
				{
					path: 'gerenxinxiDetail',
					component: gerenxinxiDetail
				},
				{
					path: 'gerenxinxiAdd',
					component: gerenxinxiAdd
				},
				{
					path: 'zhaopinzixun',
					component: zhaopinzixunList
				},
				{
					path: 'zhaopinzixunDetail',
					component: zhaopinzixunDetail
				},
				{
					path: 'zhaopinzixunAdd',
					component: zhaopinzixunAdd
				},
				{
					path: 'jiuyexinxi',
					component: jiuyexinxiList
				},
				{
					path: 'jiuyexinxiDetail',
					component: jiuyexinxiDetail
				},
				{
					path: 'jiuyexinxiAdd',
					component: jiuyexinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusszhaopinzixun',
					component: discusszhaopinzixunList
				},
				{
					path: 'discusszhaopinzixunDetail',
					component: discusszhaopinzixunDetail
				},
				{
					path: 'discusszhaopinzixunAdd',
					component: discusszhaopinzixunAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
