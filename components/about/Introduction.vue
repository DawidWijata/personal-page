<template>
    <section class="introduction">
        <h3>About me</h3>
        <p v-for="paragraph in $tm('introduction.paragraphs')">
            {{ $rt(paragraph) }}
        </p>
        <ul>
            <a v-for="socialLink in $tm('introduction.socialLinks')" :href="$rt(socialLink.link)" target="_blank"
                ref="noreferrer nofollow">
                <li>
                    <Icon :name="$rt(socialLink.iconName)" size="2rem" />
                    <p>{{ $rt(socialLink.display) }}</p>
                </li>
            </a>
        </ul>
        <a :href="$t('introduction.cvLink')" target="_blank" ref="nofollow noreferrer">
            <UiButton :name="$t('introduction.cvButtonName')" />
        </a>
    </section>
</template>

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