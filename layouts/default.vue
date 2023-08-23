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
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

useHead({
    titleTemplate: title => `Dawid Wijata | ${title}`,
});

onMounted(async () => {
    const value = switchLocalePath(locale.value);
    await navigateTo(value);
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
    justify-content: center;
}
</style>