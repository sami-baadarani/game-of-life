<script setup lang="ts">
defineProps<{
    isAlive: boolean,
}>()
</script>

<template>
    <div :class="{ 'alive': isAlive }" />
</template>

<style scoped>
div {
    height: 100%;
    width: 100%;
    background-color: gray;
}

.alive {
    background-color: yellow;
}
</style>