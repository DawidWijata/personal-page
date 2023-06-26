<template>
    <AboutHeadline />
    <AboutIntroduction />
    <AboutExperience />
    <!-- <AboutProjects /> -->
</template>
 
<script setup lang="ts">
const { t } = useI18n();
const head = ref(t('menu[""]'))

useHead({ title: head.value });
</script>

<style>
section {
    max-width: 60rem;
    padding: 3rem 1rem;
    margin: 0 auto;
}

ul,
ol {
    list-style-type: none;
}

h3 {
    padding-bottom: 0.5rem;
    padding-right: 1.5rem;
    border-bottom: 0.15rem var(--green) solid;
    width: fit-content;
    font-size: 1.6rem;
}
</style>