<template @mouseleave="close">
    <UiLanguageButton v-model="expanded" class="language-button" />
    <ul>
        <li v-for="locale in availableLocales">
            <NuxtLink :to="switchLocalePath(locale.code)" @click="close">
                <Icon :name="'flagpack:' + locale.code" size="2rem" />
                <p>{{ locale.code }}</p>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const expanded = ref(false);
const availableLocales = computed(() => locales.value as any);

function close(): void {
    expanded.value = false;
}
</script>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    position: absolute;
    top: 2.5rem;
    transform: translate(-4rem, -0.1rem);
    opacity: 0;
    padding: 1rem;
    background: linear-gradient(to right bottom,
            rgb(14, 14, 14),
            var(--primary-background-color));
    border-radius: 0.25rem;

    transform-origin: 0% 0%;
    transition: transform 0.25s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.3s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

a {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    font-weight: 600;
}

li {
    text-transform: uppercase;
}

.language-button:has(input:checked)~ul {
    transform: translate(-4rem, 0.2rem);
    opacity: 1;
}
</style>