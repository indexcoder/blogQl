<template>
    <div class="my-10">
        <h2 class="text-4xl mb-5 bg-gray-800 text-center py-1">
            <router-link :to="{name: 'index'}" class="text-gray-300 hover:underline">All posts</router-link>
            <span class="text-gray-600">/</span>
            <span class="text-gray-300">{{ user.name }}</span>
        </h2>
        <div v-if="$apollo.loading">Loading ...</div>
        <div v-else>
            <post-list-item v-for="post in user.posts" :key="post.id" :post="post"></post-list-item>
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
            user: {
                query: gql`
                    query($id: ID!) {
                        user(id: $id) {
                            id
                            name
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
                        }
                    }
                `,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    }
</script>
