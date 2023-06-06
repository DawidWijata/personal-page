<template>
    <header class="header" @mouseleave="closeLanguageMenu">
        <div class="header__container">
            <h1 class="header__headline">
                <NuxtLink :to="localizedRoute('')">
                    <img src="/img/logo.svg" alt="Dawid Wijata">
                </NuxtLink>
            </h1>
            <ul class="header__outer-menu">
                <li>
                    <NuxtLink :to="localizedRoute('about')">
                        {{ $t('menu.about') }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localizedRoute('blog')">
                        {{ $t('menu.blog') }}
                    </NuxtLink>
                </li>
                <li>
                    <label class="header__language-button">
                        <Icon name="lucide:languages" color="white" size="1.5rem" />
                        <input hidden type="checkbox" v-model="languageMenuExpanded">
                    </label>
                    <ul v-if="languageMenuExpanded" class="header__inner-menu">
                        <li class="header__inner-menu-item" v-for="locale in availableLocales">
                            <NuxtLink :to="switchLocalePath(locale.code)" @click="closeLanguageMenu">
                                <Icon :name="'flagpack:' + locale.code" size="2rem" />
                                <p>{{ locale.code }}</p>
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const languageMenuExpanded = ref(false);

const availableLocales = computed(() => locales.value as any);


function closeLanguageMenu(): void {
    languageMenuExpanded.value = false;
}

function localizedRoute(slug: string): string {
    return `/${locale.value}/${slug}`;
}
</script>

<style scoped>
a {
    font-weight: 600;
}

a.router-link-exact-active {
    color: var(--green);
}

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

    z-index: 10000;
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
    column-gap: 0.75rem;
    list-style-type: none;
    position: relative;
    margin-right: 1rem;
}

.header__inner-menu {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    position: absolute;
    top: 2.5rem;
    transform: translateX(-4rem);
    padding: 1rem;
    background: linear-gradient(to right bottom,
            rgb(14, 14, 14),
            var(--primary-background-color));
    border-radius: 0.25rem;
}

.header__inner-menu-item a {
    display: flex;
    column-gap: 1rem;
    align-items: center;
}

.header__inner-menu-item p {
    text-transform: uppercase;
}

.header__language-button {
    position: relative;
}

.header__language-button:after {
    display: block;
    content: '';

    position: absolute;
    right: -0.75rem;
    top: 50%;

    height: 0;
    width: 0;

    border-top: 0.3rem var(--text-primary-color) solid;
    border-bottom: 0;
    border-left: 0.2rem transparent solid;
    border-right: 0.2rem transparent solid;
}

.header__language-button:has(input:checked):after {
    border-bottom: 0.3rem var(--text-primary-color) solid;
    border-top: 0;
}
</style>