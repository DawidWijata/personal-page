<template>
    <section>
        <div>
            <BlogPostCard v-for="post in props.posts" :post="post">
                {{ post }}
            </BlogPostCard>
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const props = defineProps({ posts: Object });

watch(props, fadeIn);
onMounted(fadeIn);

function fadeIn() {
    gsap.fromTo(
        `section`,
        {
            x: -20,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: `section`,
                start: "40% bottom",
            },
        }
    );
}
</script>

<style scoped>
section {
    padding: 6rem 1rem;
    max-width: 60rem;
    width: 100%;

    gap: 2rem;
    flex: 1;
    opacity: 0;
}

div {
    --max-card-width: 16rem;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--max-card-width), 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
}

h2 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    text-align: center;
}
</style>