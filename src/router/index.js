import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import TodaySection from '../components/TodaySection.vue';
import ChartSection from '../components/ChartSection.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/',
        component: TodaySection,
      },
      {
        path:'chart',
        component: ChartSection,
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
