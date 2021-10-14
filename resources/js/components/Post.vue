<template>
    <div class="my-10">
        <div v-if="$apollo.loading">Loading..</div>
        <div v-else>
            <div class="text-lg text-gray-300">By
                <router-link :to="{name: 'author', params: {id: post.author.id }}" class="underline hover:text-gray-100">{{ post.author.name }}</router-link>
                in
                <router-link :to="{name: 'topics', params: {slug: post.topic.slug }}" class="underline hover:text-gray-100">{{ post.topic.name }}</router-link>
                &dot; {{ post.created_at | timeAgo }}</div>
            <h1 class="text-5xl mt-10 font-bold mb-12 text-gray-200">{{ post.title }}</h1>
            <p class="text-300 pb-3 mb-12 whitespace-pre-line text-gray-300">{{ post.content }}</p>

            <div class="flex">
                <div class="mr-4">
                    <img :src="'/storage/images/users/' + post.author.avatar" alt="Author avatar" class="inline object-cover w-12 h-12 rounded-full">
                </div>
                <div class="flex flex-col justify-center text-gray-300 leading-none ">
                    <div class="text-xl text-gray-300">Written by {{ post.author.name }} </div>
                    <div class="text-gray-400">Published in
                        <router-link :to="{name: 'topics', params: {slug: post.topic.slug }}" class="underline hover:text-gray-100">{{ post.topic.name }}</router-link>
                        on {{ post.created_at | longDate }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    export default {
        apollo: {
            post: {
                query: gql`query($id: ID!) {
                    post(id: $id){
                        id
                        title
                        content
                        created_at
                        author {
                            id
                            name
                            avatar
                        }
                        topic {
                            name
                            slug
                        }
                    }
                }`,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                },
                error() {
                    this.$router.push({name: "404"})
                }

            }
        }
    }
</script>