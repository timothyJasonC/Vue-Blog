<template>
    <div v-for="post in posts" :key="post.id">
        <div class="post-preview">
            <PostSingle :post="post" />
        </div>
    </div>
</template>

<script>
import PostSingle from '@/components/posts/PostSingle.vue'

export default {
    props: ['posts'],
    components: { PostSingle },
    setup(posts) {

    }
}
</script>