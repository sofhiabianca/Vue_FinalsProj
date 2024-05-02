import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Introduction from '../views/Introduction.vue';
import Meet from '../views/Meet.vue';
import Contact from '../views/Contact.vue';
import Charm from '../views/Charm.vue';
import Sofhia from '../views/Sofhia.vue';
import DescriptionSof from '../views/DescriptionSof.vue';

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
  {
    path: '/Charm',
    name: 'Charm',
    component: Charm,
  },
  {
    path: '/Sofhia',
    name: 'Sofhia',
    component: Sofhia,
  },
  {
    path: '/DescriptionSof',
    name: 'DescriptionSof',
    component: DescriptionSof,
  },
]
})

export default router;

