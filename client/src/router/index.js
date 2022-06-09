import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/components/LoginView.vue'
import RegisterView from '@/components/RegisterView.vue'
import SongsView from '@/components/AllSongs.vue'
import CreateSongsView from '@/components/CreateSong.vue'
import SongDetailView from '@/components/SongDetail.vue'
import EditSongView from '@/components/EditSong.vue'
// eslint-disable-next-line no-unused-vars
import store from '@/store/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'signup',
    component: RegisterView
  },
  {
    path: '/songs',
    name: 'songs',
    component: SongsView
  },
  {
    path: '/songs/create',
    name: 'createsongs',
    component: CreateSongsView
  },
  {
    path: '/songs/detail/:id',
    name: 'songDetail',
    component: SongDetailView
  },
  {
    path: '/songs/edit/',
    name: 'editsong',
    component: EditSongView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
