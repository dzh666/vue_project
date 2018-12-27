import Vue from 'vue'
import Router from 'vue-router'
//二级路由
import find from '../components/find'
import index from '../components/index'
import video from '../components/video'
import mine from '../components/mine'
// import friend from '../components/friend'
// import user from '../components/user'
import recommend from '../components/findpage/recommend'
import anchor from '../components/findpage/anchor'
Vue.use(Router)
export default new Router({
    routes: [
      {
          path:'/index',
          component:index,
          children:[
              {
                  path:'/index/find',
                  component:find,
                  children:[
                      {
                        path:'/index/find/recommend',
                        component:recommend,
                      },
                      {
                        path:'/index/find/anchor',
                        component:anchor,
                      },
                      {
                          path:'/index/find',
                          redirect:'/index/find/recommend'
                      }
                  ]
              },
              {
                  path:'/index',
                  redirect:'/index/find'
              },
              {
                path:'/index/video',
                component:video,
              },
              {
                path:'/index/wode',
                component:mine,
              }
          ]
      }
    ]
})
