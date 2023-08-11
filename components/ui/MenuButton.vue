<template>
    <label>
        <input type="checkbox" :checked="props.modelValue" @change="emit('update:modelValue', handleValueChange($event))" />
        <span></span>
        <span></span>
        <span></span>
    </label>
</template>

<script setup lang="ts">
const props = defineProps({ modelValue: Boolean });
const val = ref(props.modelValue);

const emit = defineEmits<{ (e: 'update:modelValue', value: Boolean): void }>();

function handleValueChange(event: Event) {
    val.value = (event.target as HTMLInputElement).checked
    return val.value;
}
</script>

<style scoped>
label {
    width: 25px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    z-index: 20;
    position: relative;
}

span {
    display: block;
    width: 33px;
    height: 3px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;
    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
}

input {
    display: none;
}

span:first-child {
    transform-origin: 0% 0%;
}

span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

input:not(:checked)~span {
    opacity: 1;
    transform: rotate(-45deg) translate(-0.1rem, -0.05rem);
}

input:not(:checked)~span:nth-child(2) {
    transform: rotate(45deg) translate(0, -0.05rem);
}

input:not(:checked)~span:nth-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}
</style>