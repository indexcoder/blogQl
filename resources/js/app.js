require('./bootstrap');

window.Vue = require('vue').default;

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Post from './components/Post';
import PostList from './components/PostList';
import NotFound from './components/NotFound';
import TopicPostList from './components/TopicPostList';
import AuthorPostList from './components/AuthorPostList';


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
    },
    {
        path: '/topics/:slug',
        name: 'topics',
        component: TopicPostList
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: AuthorPostList
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];



Vue.use(VueApollo);
const apolloClient = new ApolloClient({ uri: 'http://127.0.0.1:8000/graphql' });

const apolloProvider = new VueApollo({ defaultClient: apolloClient });

const router = new VueRouter({
    mode: 'history',
    routes
});

import moment from 'moment';

Vue.filter('timeAgo', value => moment(value).fromNow());
Vue.filter('longDate', value => moment(value).format("MMMM Do YYYY"));

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});