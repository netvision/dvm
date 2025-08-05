import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/academics',
    name: 'Academics',
    component: () => import('../views/Academics.vue')
  },
  {
    path: '/admissions',
    name: 'Admissions',
    component: () => import('../views/Admissions.vue')
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: () => import('../views/Facilities.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/standard-of-life',
    name: 'StandardOfLife',
    component: () => import('../views/StandardOfLife.vue')
  },
  {
    path: '/conceptual-learning',
    name: 'ConceptualLearning',
    component: () => import('../views/ConceptualLearning.vue')
  },
  {
    path: '/fine-arts',
    name: 'FineArts',
    component: () => import('../views/FineArts.vue')
  },
  {
    path: '/sports-excellence',
    name: 'SportsExcellence',
    component: () => import('../views/SportsExcellence.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/mandatory-disclosure',
    name: 'MandatoryDisclosure',
    component: () => import('../views/MandatoryDisclosure.vue')
  },
  {
    path: '/transfer-certificate',
    name: 'TransferCertificate',
    component: () => import('../views/TransferCertificate.vue')
  },
  {
    path: '/grievance-redressal',
    name: 'GrievanceRedressal',
    component: () => import('../views/GrievanceRedressal.vue')
  },
  {
    path: '/annual-report',
    name: 'AnnualReport',
    component: () => import('../views/AnnualReport.vue')
  },
  {
    path: '/vision',
    name: 'Vision',
    component: () => import('../views/Vision.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // If the user navigated with browser back/forward buttons, restore the position
    if (savedPosition) {
      return savedPosition
    }
    // For all other navigation, scroll to top
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
