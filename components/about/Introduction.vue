<template>
    <section class="introduction">
        <h3 class="introduction__header">
            {{ t('introduction.headline') }}
        </h3>
        <p v-for="paragraph in (tm('introduction.paragraphs') as any)">
            {{ rt(paragraph) }}
        </p>
        <ul class="introduction__icon-list">
            <a class="introduction__social-link" v-for="socialLink in (tm('introduction.socialLinks') as any)"
                :href="rt(socialLink.link)" target="_blank" ref="noreferrer nofollow">
                <li class="introduction__icon-list-item">
                    <Icon :name="rt(socialLink.iconName)" size="2rem" />
                    <p>
                        {{ rt(socialLink.display) }}
                    </p>
                </li>
            </a>
        </ul>
        <a class="introduction__cv-link" :href="t('introduction.cvLink')" target="_blank" ref="nofollow noreferrer">
            <UiButton :name="t('introduction.cvButtonName')" />
        </a>
    </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

const { tm, rt, t } = useI18n();

onMounted(() => {
    gsap.fromTo(
        `.introduction > *`,
        {
            x: -20,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.15,
            scrollTrigger: {
                trigger: `.introduction`,
                start: "40% bottom",
            },
        }
    );
});
</script>

<style scoped>
.introduction {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.introduction>* {
    opacity: 0;
}

.introduction__icon-list {
    margin: 0.7rem 0;
}

.introduction__social-link {
    display: block;
    width: fit-content;
}

.introduction__icon-list-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
}

.introduction__icon-list-item p {
    margin-left: 1.2rem;
}
</style>