<template>
    <section>
        <h2>{{ t('words.underConstruction') }}</h2>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const { t } = useI18n();

onMounted(() => {
    gsap.fromTo(
        `section`,
        {
            x: -20,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: `section`,
                start: "40% bottom",
            },
        }
    );
});
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