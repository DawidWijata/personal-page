<template>
    <UiSpinner v-if="loading" :caption="t('words.postsLoading')" />
    <BlogPostList v-else :posts="contentPieces" />
</template>

<script setup lang="ts">
const { t } = useI18n();
const head = ref(t('menu.blog'));

definePageMeta({
    key: (route) => (route.name as string).split("_")[0] as string,
});

useHead({ title: head.value });

const { locale } = useI18n();
const contentPieces = ref([] as Record<string, any>[]);
const loading = ref(true);

const params = computed(() => {
    return {
        locale: locale.value,
        perPage: 20,
        page: 1,
    }
});

watch(locale, async () => {
    loading.value = true;
    await setContentPieces();
});

onMounted(async () => {
    await nextTick(setContentPieces);
    loading.value = false;
});

async function setContentPieces() {
    const { data } = await useFetch('/api/posts', { method: 'GET', query: params.value });
    console.log(data);
    contentPieces.value = data.value as Record<string, any>[];
    loading.value = false;
}
</script>