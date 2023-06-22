<template>
    <UiMenuButton v-model="expanded" class="hamburger-button" />
    <ul>
        <li v-for="link in links" @click="close">
            <NuxtLink :to="localizedRoute(link)">
                {{ t(`menu["${link}"]`) }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { locale } = useI18n();

const expanded = ref(true);
const links = ref(['', 'blog']);

function close(): void {
    expanded.value = true;
}

function localizedRoute(slug: string): string {
    return `/${locale.value}/${slug}`;
}
</script>

<style scoped>
ul {
    position: fixed;
    width: 100vw;
    height: 100vh;

    top: 0;
    right: -100vw;

    padding: 2.5rem;
    padding-top: 6rem;

    background: var(--primary-background-color);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    font-weight: 600;
}

li {
    text-align: center;
    font-size: 2rem;
    line-height: 4rem;
}

.hamburger-button:has(input:not(:checked))~ul {
    transform: translate(-100vw, 0);
}

@media (min-width: 768px) {
    .hamburger-button {
        display: none;
    }

    ul {
        position: relative;
        width: initial;
        height: 100%;

        top: 0;
        right: 0;

        padding: 0;
        padding-top: 0;

        background: none;
        display: flex;
        column-gap: 1rem;
    }

    li {
        text-align: left;
        font-size: 1rem;
        line-height: 2rem;
    }

    .hamburger-button:has(input:not(:checked))~ul {
        transform: translate(0, 0);
    }
}
</style>