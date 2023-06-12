<script setup lang="ts">
import { ref, type Ref } from 'vue';
import LifeGrid from './LifeGrid/LifeGrid.vue';
import { useGameOfLifeStore } from '@/stores/gameOfLife';
import { watch } from 'vue';

const dimension = ref(10)
let generationInterval: Ref<NodeJS.Timeout | null> = ref(null)

const gameOfLifeStore = useGameOfLifeStore()
gameOfLifeStore.setDimension(dimension.value)

watch(dimension, (newDimension) => {
    gameOfLifeStore.setDimension(newDimension)
})

function reset() {
    gameOfLifeStore.setDimension(dimension.value)
    resetInterval()
}

function startGeneration() {
    generationInterval.value = setInterval(() => {
        gameOfLifeStore.nextGeneration()
    }, 500);
}

function pauseGeneration() {
    resetInterval()
}

function resetInterval() {
    if (generationInterval.value) {
        clearInterval(generationInterval.value)
        generationInterval.value = null
    }
}
</script>

<template>
    <div>
        <input v-model="dimension" type="text" aria-label="Enter dimension">
        <button v-if="!generationInterval" @click="startGeneration">Start</button>
        <button v-else @click="pauseGeneration">Pause</button>
        <button @click="reset">Reset</button>
        <LifeGrid class="life-grid" />
    </div>
</template>

<style scoped>
button {
    margin-left: 1rem;
}

.life-grid {
    margin-top: 1rem;
}
</style>