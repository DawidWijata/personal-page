<template>
    <section class="experience">
        <h3>Experience</h3>
        <ul class="experience__jobs">
            <li v-for="job in $tm('experience')" class="job">
                <h4>
                    {{ $rt(job.position) }}
                    <span>@{{ $rt(job.company) }}</span>
                </h4>
                <p>{{ job.yearStart }} - {{ job.yearEnd ?? 'now' }}</p>
                <ul class="job__duties">
                    <li v-for="duty in job.duties.slice(0, 4)" class="job__duty">
                        <Icon name="mdi:checkbox-multiple-marked" size="1.3rem" color="#8bde7d" />
                        <p>{{ $rt(duty) }}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.experience {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}

.experience__jobs {
    border-left: 0.1rem var(--text-primary-color) solid;
    padding: 1.2rem 1rem 0 1.4rem;
    position: relative;
}

.job:before {
    content: '';
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    background-color: var(--green);
    border-radius: 50%;
    border: 0.1rem var(--text-primary-color) solid;
    position: absolute;
    left: -0.5rem;
    margin-top: 0.25rem;
}

.job {
    margin-bottom: 3rem;
}

.job span {
    color: var(--green);
}

.job__duties {
    margin: 1.3rem 0;
}

.job__duty {
    margin-bottom: 0.7rem;
    display: flex;
    column-gap: 0.7rem;
}

.job__duty svg {
    min-width: 1.3rem;
}
</style>