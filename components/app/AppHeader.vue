<template>
    <header>
        <div class="container">
            <h1>
                <NuxtLink to="/">
                    <img src="img/logo.svg" alt="Dawid Wijata">
                </NuxtLink>
            </h1>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
a {
    font-weight: 600;
}

a.router-link-exact-active {
    color: var(--green);
}

h1 {
    display: flex;
    align-items: center;
    height: 100%;
}

header {
    height: 3.5rem;
    width: 100%;
    background-color: var(--secondary-background-color);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10000;
    position: fixed;
    top: 0;
    padding: 0 1rem;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 60rem;
}

a:has(img),
img {
    height: 2rem;
    width: auto;
}

nav {
    display: flex;
}

ul {
    display: flex;
    column-gap: 0.75rem;
    list-style-type: none;
}
</style>