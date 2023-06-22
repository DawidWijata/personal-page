<template>
    <div>
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped>
div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
</style>