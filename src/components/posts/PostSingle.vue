<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })

        return { snippet }
    }
}
</script>
<template>
    <RouterLink :to="{ name: 'ShowPost', params: { id: post.id } }">
        <h2 class="post-title">{{ post.title }}</h2>
        <h3 class="post-subtitle">{{ snippet }}</h3>
    </RouterLink>
    <span class="post-meta" v-for="tag in post.tags" :key="tag">
        <RouterLink :to="{ name: 'Tag', params: { tag: tag } }">
            #{{ tag }}
        </RouterLink>

    </span>
</template>