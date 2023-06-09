import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameOfLifeStore = defineStore('gameOfLife', () => {
  const dimension = ref(10)
  const cellList = ref(Array.from({ length: dimension.value * dimension.value }, () => false))

  const getDimension = computed(() => dimension.value)

  function setDimension(value: number) {
    dimension.value = value
    cellList.value = Array.from({ length: dimension.value * dimension.value }, () => false)
  }

  function toggleCell(cellIndex: number) {
    cellList.value[cellIndex] = !cellList.value[cellIndex]
  }

  return { cellList, getDimension, setDimension, toggleCell }
})
