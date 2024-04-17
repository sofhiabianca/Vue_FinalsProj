import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Introduction from '../views/Introduction.vue';
import Meet from '../views/Meet.vue';
import Contact from '../views/Contact.vue';

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Introduction',
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

