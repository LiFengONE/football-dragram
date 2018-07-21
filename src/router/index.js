import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import diagram from '../components/diagram.vue'
import pitch from '../components/pitch.vue'

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
      path: '/pitch/:type',
      name: 'pitch',
      component: pitch,
    },
    {
      path: '/diagram/:type/:index',
      name: 'diagram',
      component: diagram,
    },
  ]
})
