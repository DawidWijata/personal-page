<template>
    <section class="projects">
        <h3>Projects</h3>
        <UiCard v-for="project in projects.reverse()" class="project">
            <div class="project__title-row">
                <h4>{{ project.name }}</h4>
                <ul class="project__links">
                    <li v-for="link in project.links">
                        <a :href="link.url">
                            <Icon :name="'mdi:' + link.icon" size="1.2rem" />
                        </a>
                    </li>
                </ul>
            </div>
            <p class="project__date">
                {{ project.dateStart }} - {{ project?.dateEnd ?? 'now' }}
            </p>
            <ul class="project__tags">
                <li v-for="techItem in project.tech" class="project__tag">
                    {{ techItem }}
                </li>
            </ul>
            <p class="project__description">
                {{ project.description }}
            </p>
        </UiCard>
    </section>
</template>

<script setup lang="ts">
const projects = reactive([
    {
        name: 'Project 1',
        dateStart: '01.01.2022',
        dateEnd: null,
        links: [
            {
                icon: 'github',
                url: '#'
            },
            {
                icon: 'web',
                url: '#'
            },
        ],
        tech: ['.NET', 'Angular', 'Single SPA', 'EF Core'],
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam adipisci, error nesciunt voluptatem
                praesentium nihil veniam dolores sint veritatis omnis repudiandae obcaecati nobis nemo odit saepe eaque
                magnam quidem natus.`
    },
    {
        name: 'Project 2',
        dateStart: '01.01.2022',
        dateEnd: '01.01.2022',
        links: [
            {
                icon: 'github',
                url: '#'
            },
            {
                icon: 'web',
                url: '#'
            },
        ],
        tech: ['.NET', 'Angular', 'Single SPA', 'EF Core'],
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam adipisci, error nesciunt voluptatem
                praesentium nihil veniam dolores sint veritatis omnis repudiandae obcaecati nobis nemo odit saepe eaque
                magnam quidem natus.`
    },
    {
        name: 'Project 3',
        dateStart: '01.01.2022',
        dateEnd: '01.01.2022',
        links: [
            {
                icon: 'github',
                url: '#'
            },
            {
                icon: 'web',
                url: '#'
            },
        ],
        tech: ['.NET', 'Angular', 'Single SPA', 'EF Core'],
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam adipisci, error nesciunt voluptatem
                praesentium nihil veniam dolores sint veritatis omnis repudiandae obcaecati nobis nemo odit saepe eaque
                magnam quidem natus.`
    },
    {
        name: 'Project 4',
        dateStart: '01.01.2022',
        dateEnd: '01.01.2022',
        links: [
            {
                icon: 'github',
                url: '#'
            },
            {
                icon: 'web',
                url: '#'
            },
        ],
        tech: ['.NET', 'Angular', 'Single SPA', 'EF Core'],
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam adipisci, error nesciunt voluptatem
                praesentium nihil veniam dolores sint veritatis omnis repudiandae obcaecati nobis nemo odit saepe eaque
                magnam quidem natus.`
    },
]);
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