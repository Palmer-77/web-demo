import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

// Comments
import CommentIndex from '@/components/Comments/Index'
// Blogs
import BlogIndex from '@/components/Blogs/Index' 
import BlogCreate from '@/components/Blogs/CreateBlog' 
import BlogEdit from '@/components/Blogs/EditBlog' 
import BlogShow from '@/components/Blogs/ShowBlog'
 // Authen
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login', 
      name: 'login', 
      component: Login
    },
    // blogs
    {
      path: '/blogs', 
      name: 'blogs', 
      component: BlogIndex
    },
    {
      path: '/blogs/create', 
      name: 'blogs-edit', 
      component: BlogCreate
    },
    {
      path: '/blogs/edit/:blogId', 
      name: 'blog-edit', 
      component: BlogEdit
    },
    {
      path: '/blogs/:blogId', 
      name: 'blog', 
      component: BlogShow
    },
  // comments
    {
      path: '/comments', 
      name: 'comments', 
      component: CommentIndex
    },
  ]
})
