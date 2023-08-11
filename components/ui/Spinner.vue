<template>
    <div class="spinner">
        <div class="spinner__circle"></div>
        <p class="spinner__caption">
            {{ props.caption }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    size: String,
    caption: String,
});
</script>

<style scoped>
.spinner {
    margin: 0 auto;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.spinner__circle {
    --spinner-size: 5rem;
    --spinner-border: calc(var(--spinner-size) / 8);

    width: var(--spinner-size);
    height: var(--spinner-size);

    border-radius: 50%;
    border: var(--spinner-border) var(--green) solid;
    border-right: var(--spinner-border) transparent solid;

    animation: spinner 1s ease-in-out infinite;

    margin: 0 auto;
    align-self: center;
}

.spinner__caption {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--green);

    text-transform: uppercase;
    letter-spacing: 0.1em;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>