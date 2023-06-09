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

  function evaluateCell(cellIndex: number) {
    const isAlive = cellList.value[cellIndex]
    const neighbors = getNeighbors(cellIndex)
    const aliveNeighbors = neighbors.filter((neighbor) => neighbor)
    if (!isAlive) {
      cellList.value[cellIndex] = aliveNeighbors.length === 3
    } else {
      cellList.value[cellIndex] = aliveNeighbors.length === 2 || aliveNeighbors.length === 3
    }
  }

  function getNeighbors(cellIndex: number) {
    const neighbors: boolean[] = []
    neighbors.push(cellList.value[cellIndex - dimension.value] || false)
    neighbors.push(cellList.value[cellIndex + 1] || false)
    neighbors.push(cellList.value[cellIndex + dimension.value] || false)
    neighbors.push(cellList.value[cellIndex - 1] || false)
    return neighbors
  }

  function nextGeneration() {
    cellList.value.forEach((_, index) => {
      evaluateCell(index)
    })
  }

  return {
    cellList,
    evaluateCell,
    getDimension,
    getNeighbors,
    nextGeneration,
    setDimension,
    toggleCell
  }
})
