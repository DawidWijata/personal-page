<template>
    <UiCard>
        <img :src="props.post?.coverUrl" :alt="props.post?.coverAlt">
        <h3>
            <NuxtLink :to="'blog/' + props.post?.id">
                {{ props.post?.title }}
            </NuxtLink>
        </h3>
        <p class="date">
            <Icon name="mdi:calendar" />
            {{ toDateString(props.post?.date) }}
        </p>
        <p class="description" v-html="props.post?.description"></p>
        <div class="tags">
            <div class="tag" v-for="tag in props.post?.tags">
                <UiBadge>{{ tag.label }}</UiBadge>
            </div>
        </div>
    </UiCard>
</template>

<script setup lang="ts">
const props = defineProps({ post: Object });

function toDateString(dateString: string) {
    return new Date(dateString).toLocaleDateString();
}
</script>

<style scoped>
img {
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    background-color: black;
}

h3 {
    padding-bottom: 0rem;
    margin-top: .4rem;
    margin-bottom: -.4rem;
    border: none;
    font-size: 1.3rem;
}

article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.4rem;
}

.date {
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: 0.85rem;
    color: var(--text-secondary-color);
}

.date svg {
    font-size: 1.1rem;
}

.description {
    --max-lines: 3;

    overflow: hidden;
    display: -webkit-box;
    line-clamp: var(--max-lines);
    -webkit-line-clamp: var(--max-lines);
    -webkit-box-orient: vertical;
    font-size: 0.9rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: .4rem;
}
</style>