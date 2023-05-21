<template>
    <footer>
        <img src="img/logo.svg" alt="Dawid Wijata">
        <p>@ {{ year }} Dawid Wijata</p>
        <p>All rights reserved</p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 0.8rem;
}

img {
    margin-bottom: 0.6rem;
    height: 3rem;
}
</style>