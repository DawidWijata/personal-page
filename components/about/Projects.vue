<template>
    <section class="projects">
        <h3>
            {{ t('projects.headline') }}
        </h3>
        <UiCard v-for="project in tm('projects.items')" class="project">
            <div class="project__title-row">
                <h4>{{ rt(project.name) }}</h4>
                <ul class="project__links">
                    <li v-for="link in project.links">
                        <a :href="rt(link.url)">
                            <Icon :name="rt(link.icon)" size="1.2rem" />
                        </a>
                    </li>
                </ul>
            </div>
            <p class="project__date">
                {{ rt(project.dateStart) }} - {{ project?.dateEnd ?? t('words.now') }}
            </p>
            <ul class="project__tags">
                <li v-for="techItem in project.tech" class="project__tag">
                    {{ rt(techItem) }}
                </li>
            </ul>
            <p class="project__description">
                {{ rt(project.description) }}
            </p>
        </UiCard>
    </section>
</template>

<script setup lang="ts">
const { tm, rt, t } = useI18n();
</script>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}

.project__title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project__links {
    display: flex;
    column-gap: 0.3rem;
}

.project__tags {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.project__tag {
    background-color: var(--green);
    color: var(--primary-background-color);
    font-weight: 500;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
}

.project__description {
    font-size: 0.9rem;
}
</style>