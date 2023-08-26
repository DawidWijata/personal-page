<template>
    <section class="post">
        <h2>{{ props.post?.title }}</h2>
        <article v-html="content"></article>
    </section>
</template>

<script setup lang="ts">
import { htmlTransformer } from '@vrite/sdk/transformers';
import hljs from 'highlight.js';
import { GsapHelper } from '~/utils/gsap';

const props = defineProps({ post: Object });
const content = computed(() => htmlTransformer(props.post?.content));

onMounted(() => {
    document.querySelectorAll('pre:has(code)').forEach(addLanguageToCode);
    hljs.highlightAll();
    GsapHelper.fadeIn('section');
});

function addLanguageToCode(block: Element) {
    const htmlElement = block as HTMLElement;
    const code = htmlElement.querySelector('code') as HTMLElement;
    const attribute = htmlElement.getAttribute('lang');

    code.classList.add(`language-${attribute ?? 'plaintext'}`);
}
</script>

<style>
.post {
    padding: 6rem 1rem;
    max-width: 60rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.post article {
    text-align: justify;
}

.post :is(h2, h3, h4, h5, h6) {
    font-weight: 600;
    padding-bottom: 0.2rem;
    margin-top: 1rem;
    width: fit-content;
    border-bottom: none;
}

.post h2 {
    font-size: 2rem;
    padding-bottom: 0.2rem;
    padding-right: 1.5rem;
    border-bottom: 0.2rem var(--green) solid;
}

.post h3 {
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
}

.post h4 {
    font-size: 1.4rem;
    padding-bottom: 0.5rem;
}

.post h5 {
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
}

.post h6 {
    font-size: 1rem;
    padding-bottom: 0.4rem;
}

.post hr {
    margin: 1rem 0;
    border: 0.1rem var(--green) solid;
}

.post :is(ol, ul) {
    margin: 0.5rem 0 1rem;
    margin-left: 2rem;
}

.post ol {
    list-style-type: decimal;
}

.post ul {
    list-style-type: disc;
}

.post label {
    margin: 0.2rem 1rem;
    display: flex;
    align-items: center;
}

.post blockquote {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-left: 0.2rem var(--green-overlay) solid;
    font-style: italic;
    color: var(--text-secondary-color);
}

.post table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    word-wrap: break-word;
    margin: 1rem 0;
}

.post :is(tr, tbody) {
    width: 100%;
}

.post tr:nth-child(2n) {
    background-color: var(--secondary-background-color);
}

.post th {
    font-weight: 600;
    padding: 0.5rem;
    background-color: var(--green-overlay);
}

.post td {
    padding: 0.5rem;
}

.hljs {
    line-height: 1.3rem;
    font-size: 0.8rem;
    letter-spacing: -0.025em;
    font-weight: 500;
    background-color: var(--secondary-background-color);
}
</style>