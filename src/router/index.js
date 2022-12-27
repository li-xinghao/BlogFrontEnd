import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('@/views/user/Register'),
    meta:{title:'注册'}
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/user/Login'),
    meta:{title:'登录'}
  },
  {
    path: '/404',
    name: '404',
    component: ()=>import('@/views/error/404'),
    hidden: true
  },
// 发布
{
  name: 'post-create',
  path: '/post/create',
  component: () => import('@/views/post/Create'),
  meta: { title: '文章发布', requireAuth: true }
},
// 编辑
{
  name: 'topic-edit',
  path: '/topic/edit/:id',
  component: () => import('@/views/post/Edit'),
  meta: {
    title: '编辑',requireAuth: true
  }
},
{
  name: 'post-detail',
  path: '/post/:id',
  component: () => import('@/views/post/Detail'),
  meta: { title: '文章详情' }
},
{
  name: 'tag',
  path: '/tag/:name',
  component: () => import('@/views/tag/Tag'),
  meta: { title: '主题列表' }
},
// 检索
{
  name: 'search',
  path: '/search',
  component: () => import('@/views/Search'),
  meta: { title: '检索' }
},
// 用户设置
{
  name: 'user-setting',
  path: '/member/:username/setting',
  component: () => import('@/views/user/Setting'),
  meta: { title: '设置',requireAuth: true}
},
// 用户主页
{
  name: 'user',
  path: '/member/:username/home',
  component: () => import('@/views/user/Profile'),
  meta: { title: '用户主页' }
},
  {
    path: '/*',
    redirect:'/404',
    hidden: true,
    meta:{title:'404-NotFound'}
  },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
