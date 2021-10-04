require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Post from './components/Post';
import PostList from './components/PostList';

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({el: '#app', router});