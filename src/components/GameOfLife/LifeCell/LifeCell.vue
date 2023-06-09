<script setup lang="ts">
defineProps<{
    isAlive?: boolean
}>()
</script>

<template>
    <div :class="{ alive: isAlive }" />
</template>
 
<style scoped>
div {
    width: 100%;
    aspect-ratio: 1;
    background-color: gray;
}

.alive {
    background-color: yellow;
}
</style>
