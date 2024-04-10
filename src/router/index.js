import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Introduction from '@/components/Introduction.vue';
import Meet from '@/components/Meet.vue';
import Contact from '@/components/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction,
  },
  {
    path: '/Meet',
    name: 'Meet',
    component: Meet,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
]
})

export default router;