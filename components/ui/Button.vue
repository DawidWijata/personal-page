<template>
    <button>
        {{ name }}
    </button>
</template>

<script setup lang="ts">
defineProps({ name: String });
</script>

<style scoped>
button {
    all: unset;
    padding: 0.4rem 1.4rem;
    font-weight: 600;
    color: var(--green);
    text-transform: uppercase;
    border: 0.1rem var(--green) solid;
    border-radius: 0.2rem;
    transition-duration: 0.2s;
}

button:hover {
    background-color: var(--green-overlay);
}
</style>