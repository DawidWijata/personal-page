<template>
    <section class="experience">
        <h3>Experience</h3>
        <ul class="experience__jobs">
            <li v-for="job in data.jobs" class="job">
                <h4>
                    {{ job.position }}
                    <span>@{{ job.company }}</span>
                </h4>
                <p>{{ job.yearStart }} - {{ job?.yearEnd ?? 'now' }}</p>
                <ul class="job__duties">
                    <li v-for="duty in job.duties.slice(0, 4)" class="job__duty">
                        <Icon name="mdi:checkbox-multiple-marked" size="1.3rem" color="#8bde7d" />
                        <p>{{ duty }}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
const data = reactive({
    jobs: [
        {
            position: 'Fullstack .NET Developer',
            company: 'MBank',
            yearStart: 2023,
            yearEnd: null,
            duties: [
                'developing a tax calculation software and adjusting it to newest Swiss tax legislations',
                'consulting solutions with non-technical team members in order to fulfill the business needs',
                'maintaining a large-scaled tax calculation software, that is officially accredited in 3 Swiss cantons',
                'developing 10+ new features to adjust the Swiss tax law requirements from FY 2023',
                'optimized the loading speed of a project page in the tax calculation software by 80%',
                'cooperating with a team of 5 people, sticking to Agile approach, in order to fulfill the business needs',
                'end-to-end implementation of KVideo service for 100+ videos supporting the client’s onboarding and internal training processes',
                'implementing unit, integration and behavioral tests, leading to up to 90% code coverage',
            ]
        },
        {
            position: 'Fullstack .NET Developer',
            company: 'KPMG',
            yearStart: 2022,
            yearEnd: 2023,
            duties: [
                'developing a tax calculation software and adjusting it to newest Swiss tax legislations',
                'consulting solutions with non-technical team members in order to fulfill the business needs',
                'maintaining a large-scaled tax calculation software, that is officially accredited in 3 Swiss cantons',
                'developing 10+ new features to adjust the Swiss tax law requirements from FY 2023',
                'optimized the loading speed of a project page in the tax calculation software by 80%',
                'cooperating with a team of 5 people, sticking to Agile approach, in order to fulfill the business needs',
                'end-to-end implementation of KVideo service for 100+ videos supporting the client’s onboarding and internal training processes',
                'implementing unit, integration and behavioral tests, leading to up to 90% code coverage',
            ]
        },
        {
            position: 'Fullstack Developer',
            company: 'Atinea',
            yearStart: 2021,
            yearEnd: 2022,
            duties: [
                'migrating an API of enterprise application from VBA to REST-based one with ASP.NET',
                'using Entity Framework Core for accessing and modeling SQL Server database',
                'designing a frontend application using micro frontends concept with Single SPA and Angular 12',
                'conducting a code review process multiple times in a team of 5 developers',
                'designing and developing a WPF-based guard application project for company internal code challenge',
                'leading a team of 2 developers during a process of implementation of a WPF-based guard application',
                'analyzing and planning a set of features supporting client’s company complaint management process'
            ]
        },
    ]
});
</script>

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
    width: 1rem;
    height: 1rem;
    background-color: var(--green);
    border-radius: 50%;
    border: 0.1rem var(--text-primary-color) solid;
    position: absolute;
    left: -0.7rem;
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