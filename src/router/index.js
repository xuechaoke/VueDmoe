import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/Message/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children:[
        {
          //path最左侧的斜杠 / 永远代表跟路径
          path:"/home/news",
          component:News
        },
        {
          //简化写法，会拼接上级路径
          path:'message',
          component:Message,
          children:[
            {
              path:'detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'/home',
          redirect:'news'
        }
      ]
    },
    //应用已启动就默认访问这个组件，重定向到/home
    {
      path: '/',
      redirect: "/home"
    }
  ]
});
