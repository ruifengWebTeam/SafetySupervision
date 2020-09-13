import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import register from '@/views/register.vue'
import login from '@/views/login.vue'

// 风险分布子系统 》风险监测
import riskJc from '@/views/risk_distribution_subsystem/riskJc.vue'
// 风险分布子系统 》风险分布
import riskFb from '@/views/risk_distribution_subsystem/riskFb.vue'
// 风险分布子系统 》区域风险一张图 
import APictureOfAreaRisk from '@/views/risk_distribution_subsystem/APictureOfAreaRisk.vue'
// 风险分布子系统 》企业风险一张图
import APictureOfCompanyRisk from '@/views/risk_distribution_subsystem/APictureOfCompanyRisk.vue'
// 风险分布子系统 》风险检测一张图 
import APictureOfRiskJC from '@/views/risk_distribution_subsystem/APictureOfRiskJC.vue'
// 风险分布子系统 》危险源管理
import dangerousSources from '@/views/risk_distribution_subsystem/dangerousSources.vue'
// 风险分布子系统 》 化学企业数据集成
import DataOfChemicalCompany from '@/views/risk_distribution_subsystem/DataOfChemicalCompany.vue'
// 风险分布子系统 》区域风险
import areaRisk from '@/views/risk_distribution_subsystem/areaRisk.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      istoken: true
    },
    children: [{
        path: 'riskJc',
        name: 'riskJc',
        component: riskJc,

      },
      {
        path: 'riskFb',
        name: 'riskFb',
        component: riskFb,

      }, {
        path: 'APictureOfAreaRisk',
        name: 'APictureOfAreaRisk',
        component: APictureOfAreaRisk,
      }, {
        path: 'APictureOfCompanyRisk',
        name: 'APictureOfCompanyRisk',
        component: APictureOfCompanyRisk,
      }, {
        path: 'APictureOfRiskJC',
        name: 'APictureOfRiskJC',
        component: APictureOfRiskJC,

      }, {
        path: 'dangerousSources',
        name: 'dangerousSources',
        component: dangerousSources,

      }, {
        path: 'DataOfChemicalCompany',
        name: 'DataOfChemicalCompany',
        component: DataOfChemicalCompany,

      }, {
        path: 'areaRisk',
        name: 'areaRisk',
        component: areaRisk,

      }
    ]
  },

  {
    path: '/register',
    name: 'register',
    component: register
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: login
  // },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.istoken === true) {
    Vue.prototype.$msg.fail('请重新登录')
    router.push('/login')
    return
  }
  next()
})
export default router
