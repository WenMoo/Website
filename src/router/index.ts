import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const LifeView = () => import('@/views/LifeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const GamesView = () => import('@/views/GamesView.vue')
const JobsView = () => import('@/views/JobsView.vue')
const PrivacyView = () => import('@/views/PrivacyView.vue')

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '首页', transparentNav: true } },
    { path: '/jobs', name: 'jobs', component: JobsView, meta: { title: '人才招聘' } },
    { path: '/social', redirect: '/jobs' },
    { path: '/campus', redirect: '/jobs' },
    { path: '/intern', redirect: '/jobs' },
    { path: '/elite', redirect: '/jobs' },
    { path: '/about', name: 'about', component: AboutView, meta: { title: '关于我们' } },
    { path: '/games', name: 'games', component: GamesView, meta: { title: '游戏产品' } },
    { path: '/life', name: 'life', component: LifeView, meta: { title: '必凡乐活' } },
    { path: '/privacy', name: 'privacy', component: PrivacyView, meta: { title: '隐私政策' } },
  ],
})

router.afterEach((to) => {
  const page = typeof to.meta.title === 'string' ? to.meta.title : '招聘'
  document.title = `${page} · 必凡娱乐`
})

export default router
