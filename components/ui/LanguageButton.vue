<template>
    <label>
        <Icon name="lucide:languages" color="white" size="1.5rem" />
        <input hidden type="checkbox" :checked="props.modelValue"
            @change="emit('update:modelValue', handleValueChange($event))">
    </label>
</template>

<script setup lang="ts">
const props = defineProps({ modelValue: Boolean });
const val = ref(props.modelValue);

const emit = defineEmits<{ (e: 'update:modelValue', value: Boolean): void }>();

function handleValueChange(event: Event) {
    val.value = (event.target as HTMLInputElement).checked;
    return val.value;
}
</script>

<style scoped>
label {
    position: relative;
    z-index: 1;
}

label:after {
    display: block;
    content: '';

    position: absolute;
    right: -0.75rem;
    top: 50%;

    height: 0;
    width: 0;

    transform: rotate(0);
    border-top: 0.3rem var(--text-primary-color) solid;
    border-bottom: 0;
    border-left: 0.2rem transparent solid;
    border-right: 0.2rem transparent solid;
    transition: transform 0.2s linear;
}

label:has(input:checked):after {
    transform: rotate(-180deg);
}
</style>