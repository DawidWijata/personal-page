<template>
    <span>
        <slot />
    </span>
</template>

<style scoped>
span {
    background-color: var(--green);
    color: var(--primary-background-color);
    font-weight: 500;
    padding: 0.2rem 0.5rem;
    border-radius: 0.7rem;
    font-size: 0.8rem;
}
</style>