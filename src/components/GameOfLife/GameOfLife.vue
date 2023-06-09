<script setup lang="ts">
import { ref } from 'vue';
import LifeGrid from './LifeGrid/LifeGrid.vue';
import { useGameOfLifeStore } from '@/stores/gameOfLife';
import { watch } from 'vue';

const dimension = ref(10)

const gameOfLifeStore = useGameOfLifeStore()
gameOfLifeStore.setDimension(dimension.value)

watch(dimension, (newDimension) => {
    gameOfLifeStore.setDimension(newDimension)
})

function reset() {
    gameOfLifeStore.setDimension(dimension.value)
}

</script>

<template>
    <div>
        <input v-model="dimension" type="text" aria-label="Enter dimension">
        <button>Start/Pause</button>
        <button @click="reset">Reset</button>
        <LifeGrid :dimension="dimension" />
    </div>
</template>