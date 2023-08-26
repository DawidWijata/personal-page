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

useHead({ title: 'Blog' });

const apiPromise = useFetch('/api/post', { method: 'GET', query: params.value })
    .then(({ data }) => data.value as Record<string, any>);

onMounted(async () => {
    useHead({ title: apiPromise.then(post => post.title) });

    await nextTick(setContentPieces);
    loading.value = false;
});

async function setContentPieces() {
    post.value = await apiPromise;
}
</script>