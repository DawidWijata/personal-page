<template>
    <AboutHeadline />
    <AboutIntroduction />
    <AboutExperience />
    <!-- <AboutProjects /> -->
</template>
 
<script setup lang="ts">
const { t } = useI18n();
const head = ref(t('menu[""]'));

definePageMeta({
    key: (route) => (route.name as string).split("_")[0] as string,
});

useHead({ title: head.value });
</script>