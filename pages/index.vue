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