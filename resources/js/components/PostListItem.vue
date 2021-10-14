<template>
    <div class="mb-5 border-b border-gray-600 pb-5">
        <router-link :to="{name: 'post', params: { id: post.id }}" class="text-2xl pb-3 text-gray-300 block hover:underline">
            {{ post.title }}
        </router-link>
        <p class="text-gray-400 pb-3">{{ post.lead }}</p>
        <div class="text-sm text-gray-500">
            By
            <router-link :to="{name: 'author', params: {id: post.author.id }}" class="underline hover:text-gray-100">{{ post.author.name }}</router-link>
            &nbsp; in
            <router-link :to="{name: 'topics', params: {slug: post.topic.slug }}" class="underline hover:text-gray-100">{{ post.topic.name }}</router-link>
            &nbsp; &pound; {{ post.created_at | timeAgo }}
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            post: { type: Object }
        }
    }
</script>
