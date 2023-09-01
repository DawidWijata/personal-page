<template>
    <header class="header">
        <div class="header__container">
            <h1 class="header__headline">
                <NuxtLink :to="localizedRoute('')" @click="emitRoute('')">
                    <img src="/img/logo.svg" alt="Dawid Wijata">
                </NuxtLink>
            </h1>
            <ul class="header__outer-menu">
                <li class="header__language-menu-container">
                    <AppLanguageMenu />
                </li>
                <li class="header__main-menu-container">
                    <AppMainMenu @link="emitRoute" />
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const emit = defineEmits<{ (e: 'link', value: string): void }>();

function localizedRoute(slug: string): string {
    return `/${locale.value}/${slug}`;
}

function emitRoute(route: string) {
    emit('link', route);
}
</script>

<style scoped>
a:has(img),
img {
    height: 2rem;
    width: auto;
}

.header {
    height: 3.5rem;
    width: 100%;
    background-color: var(--secondary-background-color);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    position: fixed;
    top: 0;
    padding: 0 1rem;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 60rem;
}

.header__headline {
    display: flex;
    align-items: center;
    height: 100%;
}

.header__outer-menu {
    display: flex;
    column-gap: 2rem;
    list-style-type: none;
    position: relative;
    margin-right: 1rem;
}

.header__language-menu-container {
    display: flex;
    align-items: center;
}

.header__main-menu-container {
    display: block;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .header__outer-menu {
        flex-direction: row-reverse;
    }
}
</style>