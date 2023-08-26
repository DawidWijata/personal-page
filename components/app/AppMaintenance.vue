<template>
    <section>
        <h2>{{ t('words.underConstruction') }}</h2>
    </section>
</template>

<script setup lang="ts">
import { GsapHelper } from '~/utils/gsap';

const { t } = useI18n();

onMounted(() => GsapHelper.fadeIn('section'));
</script>

<style scoped>
section {
    flex: 1;
    padding: 4rem 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
}

h2 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    text-align: center;
}
</style>