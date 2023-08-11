<template>
    <section>
        <h2>{{ props.post?.title }}</h2>
        <article v-html="content"></article>
    </section>
</template>

<script setup lang="ts">
import { htmlTransformer } from '@vrite/sdk/transformers';

const props = defineProps({ post: Object });
const content = computed(() => htmlTransformer(props.post?.content));
</script>

<style scoped>
section {
    padding: 6rem 1rem;
    max-width: 60rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

article {
    text-align: justify;
}

h2 {
    font-size: 2rem;
    padding-bottom: 0.2rem;
    padding-right: 1.5rem;
    border-bottom: 0.2rem var(--green) solid;
    width: fit-content;
}
</style>