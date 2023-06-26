<template>
    <div>
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: title => `Dawid Wijata | ${title}`,
});

definePageMeta({
    key: (route) => (route.name as string).split("_")[0] as string,
});
</script>

<style scoped>
div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
</style>