<template>
    <section class="introduction">
        <h3>About me</h3>
        <p v-for="paragraph in data.paragraphs">
            {{ paragraph }}
        </p>
        <ul>
            <a v-for="socialLink in data.socialLinks" :href="socialLink.link" target="_blank" ref="noreferrer nofollow">
                <li>
                    <Icon :name="socialLink.iconName" size="2rem" />
                    <p>{{ socialLink.display }}</p>
                </li>
            </a>
        </ul>
        <a :href="data.cvLink" target="_blank" ref="nofollow noreferrer">
            <UiButton :name="'Download my CV'" />
        </a>
    </section>
</template>

<script setup lang="ts">
const data = reactive({
    paragraphs: [
        `I'm a Fullstack Developer with 2 years in the industry, specialising in web application development using Angular and .NET.
            I love implementing solutions that are meaningful and bring income to others.
            I've already worked in 4 software development projects for automotive and financial companies.`,
        `I'm also interested in frontend architecture and microfrontends concept.
            I spend pretty much time on spreading these ideas among my company's tech team.
            It also matches with my core values which are: people, constant growth and being open for gaining knowledge.`,
        `For now I am focused on learning the cloud technologies and preparing for AZ-900 Microsoft Azure Fundamentals Exam (next will be AZ-204).
            I am actually interested in new oppurtunies on Frontend or Fullstack Developer positions.`
    ],
    socialLinks: [
        {
            iconName: 'mdi:github',
            link: 'https://github.com/BordowyRydwan',
            display: 'github.com/BordowyRydwan'
        },
        {
            iconName: 'mdi:linkedin',
            link: 'https://linkedin.com/in/dawid-wijata',
            display: 'linkedin.com/in/dawid-wijata'
        },
        {
            iconName: 'mdi:email',
            link: 'mailto:contact@dawidwijata.pl',
            display: 'contact@dawidwijata.pl'
        },
        {
            iconName: 'mdi:twitter',
            link: 'https://twitter.com/d_wijata',
            display: 'twitter.com/d_wijata'
        }
    ],
    cvLink: '#'
});
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

ul {
    margin: 0.7rem 0;
}

a {
    display: block;
    width: fit-content;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
}

li p {
    margin-left: 1.2rem;
}
</style>