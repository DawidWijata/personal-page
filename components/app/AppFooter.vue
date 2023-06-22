<template>
    <footer>
        <div class="logo-row">
            <div>
                <img src="/img/logo.svg" alt="Dawid Wijata">
            </div>
            <div>
                <p>@ {{ year }} Dawid Wijata</p>
                <p>All rights reserved</p>
            </div>
        </div>
        <table class="data-row">
            <tr>
                <td><strong>NIP:</strong></td>
                <td>8381881437</td>
            </tr>
            <tr>
                <td><strong>REGON:</strong></td>
                <td>525424156</td>
            </tr>
            <tr>
                <td class="address-cell">
                    <strong>{{ t('words.address') }}:</strong>
                </td>
                <td>1 Maja 54, 96-300 Żyrardów</td>
            </tr>
        </table>
    </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    width: fit-content;
    padding: 1.8rem 1.2rem;
    margin: 0 auto;

    background-color: var(--primary-background-color);
    color: var(--text-primary-color);
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 0.95rem;
}

img {
    height: 2rem;
}

td {
    padding: 0.1rem 1rem 0.1rem 0;
    vertical-align: top;
}

.logo-row {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    row-gap: 0.8rem;
    flex-direction: column;
    text-align: center;
}

.address-cell {
    text-transform: capitalize;
}

@media (min-width: 768px) {
    footer {
        flex-direction: row;
    }

    .logo-row,
    .data-row {
        padding: 0 2rem;
        align-self: stretch;
    }

    .logo-row {
        flex-direction: row;
        text-align: left;
    }

    .data-row {
        border-left: 2px white solid;
    }
}
</style>