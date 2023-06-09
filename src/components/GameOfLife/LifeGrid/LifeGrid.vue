<script setup lang="ts">
import LifeCell from '../LifeCell/LifeCell.vue';

defineProps<{
    dimension: number,
}>()
</script>

<template>
    <div class="cell-container">
        <LifeCell class="life-cell" data-test="life-cell-component" v-for="i in (dimension * dimension)" :key="i">
        </LifeCell>
    </div>
</template>

<style scoped>
.cell-container {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(v-bind(dimension), minmax(0, 1fr));
}

.life-cell {
    min-width: 1rem;
    min-height: 1rem;
}
</style> 