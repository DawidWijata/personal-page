<template>
    <section>
        <h2>{{ t('words.underConstruction') }}</h2>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
section {
    flex: 1;
    padding: 4rem 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    text-align: center;
}
</style>