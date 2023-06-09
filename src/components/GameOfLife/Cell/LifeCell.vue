<script setup lang="ts">
defineProps<{
    isAlive: boolean
}>()
</script>

<template>
    <div :class="{ 'alive': isAlive, 'dead': isAlive }"></div>
</template>