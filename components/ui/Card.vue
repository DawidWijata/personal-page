<template>
    <article>
        <slot />
    </article>
</template>

<style scoped>
article {
    padding: 1.2rem;
    background: linear-gradient(to right bottom,
            rgba(255, 255, 255, 0.15),
            var(--primary-background-color));
    border-radius: 0.25rem;
}
</style>