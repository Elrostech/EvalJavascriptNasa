import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import ImagesPerMonthView from '../views/ImagesPerMonthView.vue';
import ImageDetail from '../views/ImageDetail.vue';
import CalendarView from '../views/CalendarView.vue';

const routes = [
  { path: '/', name: 'HomeView', component: Home },
  { path: '/image-detail/:date', name: 'ImageDetail', component: ImageDetail },
  { path: '/images-per-month', name: 'ImagesPerMonthView', component: ImagesPerMonthView },
  { path: '/calendar', name: 'CalendarView', component: CalendarView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
