<template>
    <AppMaintenance />
</template>

<script setup lang="ts">
const { t } = useI18n();
const head = ref(t('menu.blog'))

useHead({ title: head.value });
</script>