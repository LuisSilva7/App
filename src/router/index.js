import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Iniciatives from '../views/Iniciatives.vue'
import CheckIn from '../views/CheckIn.vue'
import DuringIniciative from '../views/DuringIniciative.vue'
import CheckOut from '../views/CheckOut.vue'
import Statistics from '../views/Statistics.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/iniciatives',
    name: 'Iniciatives',
    component: Iniciatives,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/checkIn',
    name: 'CheckIn',
    component: CheckIn,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/duringIniciative/:theme',
    name: 'DuringIniciative',
    component: DuringIniciative,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/checkOut/:theme',
    name: 'CheckOut',
    component: CheckOut,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/statistics/:theme',
    name: 'Statistics',
    component: Statistics,
    props: true,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {

  if(to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser()
    if(user) {
      next()
    }
    else {
      alert("É necessário fazer login para realizar esta operação!")
      next("/")
    }
  }
  else {
    next()
  }
})

export default router