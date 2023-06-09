<script setup lang="ts">
import { computed } from 'vue';
import LifeCell from '../LifeCell/LifeCell.vue';

const props = defineProps<{
    dimension: number,
}>()
const MAX_DIMENSION = 50;

const isDimensionAcceptable = computed(() => {
    return props.dimension > 0 && props.dimension < MAX_DIMENSION + 1;
})
</script>

<template>
    <div>
        <div v-if="isDimensionAcceptable" class="cell-container">
            <LifeCell v-for="i in (dimension * dimension)" :key="`life-cell-component-${i}`" class="life-cell"
                data-test="life-cell-component">
            </LifeCell>
        </div>
        <div v-else>
            <p>Please select a number between 1 and {{ MAX_DIMENSION }}</p>
        </div>
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