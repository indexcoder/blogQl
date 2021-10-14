<template>
    <div class="my-10">
        <h2 class="text-4xl mb-5 text-gray-300 bg-gray-800 text-center py-1">
            <router-link :to="{name: 'index'}">All posts</router-link>
        </h2>
        <div v-if="$apollo.loading">Loading ...</div>
        <div v-else>
            <post-list-item v-for="post in posts" :key="post.id" :post="post"></post-list-item>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    import PostListItem from './PostListItem';

    export default {
        components: {
            PostListItem
        },
        apollo: {
            posts: gql`query {
                posts {
                    id
                    title
                    lead
                    created_at
                    author {
                        id
                        name
                    }
                    topic {
                        name
                        slug
                    }
                }
            }`
        }
    }
</script>
