<template>
    <UiSpinner v-if="loading" :caption="t('words.postLoading')" />
    <BlogPost v-else :post="post"></BlogPost>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { locale } = useI18n();
const { slug } = useRoute().params;

const post = ref({} as Record<string, any>);
const loading = ref(true);

const params = computed(() => {
    return {
        id: slug, // TODO: change id into slug after API bug fixed 
        locale: locale.value,
    }
});

useHead({ title: 'Test' });

watch(locale, async () => {
    loading.value = true;
    await setContentPieces();
});

onMounted(async () => {
    await nextTick(setContentPieces);
    loading.value = false;
});

async function setContentPieces() {
    const { data } = await useFetch('/api/post', { method: 'GET', query: params.value });
    post.value = data.value as Record<string, any>;
}
</script>