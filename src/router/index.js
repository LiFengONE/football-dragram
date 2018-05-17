import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import coach from '../components/coach.vue'
import standard from '../components/standard.vue'

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/coach',
      name: 'coach',
      component: coach,
    },
    {
      path: '/standard',
      name: 'standard',
      component: standard,
    }
  ],
  mode: 'history'
})
