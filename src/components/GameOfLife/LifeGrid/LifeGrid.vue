<script setup lang="ts">
import { computed } from 'vue';
import LifeCell from '../LifeCell/LifeCell.vue';

const props = defineProps<{
    dimension: number,
}>()

const isDimensionAcceptable = computed(() => {
    return props.dimension > 0 && props.dimension < 101;
})

</script>

<template>
    <div class="cell-container" v-if="isDimensionAcceptable">
        <LifeCell class="life-cell" data-test="life-cell-component" v-for="i in (dimension * dimension)" :key="i">
        </LifeCell>
    </div>
    <div v-else>
        <p>Please select a number between 1 and 100</p>
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

p {
    color: red;
}
</style> 