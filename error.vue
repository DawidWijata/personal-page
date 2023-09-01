<template>
    <div class="container">
        <AppHeader @link="assignExternalLink" />
        <main>
            <Icon name="mdi:alert-box-outline" size="10rem" color="#fff" />
            <h2>{{ t('words.error') }} {{ error?.statusCode }}</h2>
            <h2>{{ error?.statusMessage }}</h2>
            <p class="error-message">{{ error?.message }}</p>
        </main>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { GsapHelper } from '~/utils/gsap';
const { t } = useI18n();

const error = useError() as any;
const title = computed(() => getTitle());
const link = ref('/');

onMounted(async () => {
    useHead({ title: title.value });
    GsapHelper.fadeIn('main');
});

onUnmounted(async () => {
    await clearError({ redirect: link.value });
    await nextTick(() => navigateTo(link.value));
});

async function assignExternalLink(arg: string) {
    link.value = arg;
}

function getTitle() {
    const translation = t('words.error');
    const text = translation[0].toUpperCase() + translation.substring(1).toLowerCase();

    return `${text} ${error.value.statusCode} | Dawid Wijata`;
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.error-row {
    display: flex;
    align-items: center;
}

.error-message {
    margin-top: 2rem;
    text-align: center;
}

h2 {
    text-align: left;
}

main {
    flex: 1;
    padding: 4rem 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
}

h2 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
}
</style>