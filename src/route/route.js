import dvOne from '../components/dvOne.vue'
import dvTwo from '../components/dvTwo.vue'
import dvThree from '../components/dvThree.vue'
import dvFour from '../components/dvFour.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import debounce from 'lodash/debounce'
Vue.use(VueRouter)

const router=new VueRouter({
    mode:'history',
    routes:[
        {path:'*',redirect:'/dvOne'},
        {path:'/dvOne',component:dvOne},
        {path:'/dvTwo',component:dvTwo},
        {path:'/dvThree',component:dvThree},
        {path:'/dvFour',component:dvFour},
    ]
})
router.beforeEach(debounce((to, from, next) => {

    next();
  }, 100));

export default router