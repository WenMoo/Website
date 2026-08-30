import { createRouter, createWebHashHistory } from 'vue-router'
import type { ChannelKey } from '@/data/site'

const HomeView = () => import('@/views/HomeView.vue')
const ChannelView = () => import('@/views/ChannelView.vue')
const LifeView = () => import('@/views/LifeView.vue')
const PrivacyView = () => import('@/views/PrivacyView.vue')

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '首页', transparentNav: true } },
    {
      path: '/social',
      name: 'social',
      component: ChannelView,
      props: { channelKey: 'social' satisfies ChannelKey },
      meta: { title: '社会招聘', transparentNav: true },
    },
    {
      path: '/elite',
      name: 'elite',
      component: ChannelView,
      props: { channelKey: 'elite' satisfies ChannelKey },
      meta: { title: 'Elite Program+', transparentNav: true },
    },
    {
      path: '/campus',
      name: 'campus',
      component: ChannelView,
      props: { channelKey: 'campus' satisfies ChannelKey },
      meta: { title: '应届生校招', transparentNav: true },
    },
    {
      path: '/intern',
      name: 'intern',
      component: ChannelView,
      props: { channelKey: 'intern' satisfies ChannelKey },
      meta: { title: '实习生计划', transparentNav: true },
    },
    { path: '/life', name: 'life', component: LifeView, meta: { title: '必凡乐活' } },
    { path: '/privacy', name: 'privacy', component: PrivacyView, meta: { title: '隐私政策' } },
    { path: '/jobs', redirect: '/' },
  ],
})

router.afterEach((to) => {
  const page = typeof to.meta.title === 'string' ? to.meta.title : '招聘'
  document.title = `${page} · 必凡娱乐`
})

export default router
