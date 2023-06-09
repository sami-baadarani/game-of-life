import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameOfLifeStore } from '@/stores/gameOfLife'

describe('LifeCell', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should have default dimension of 10', () => {
    const gameOfLife = useGameOfLifeStore()
    expect(gameOfLife.getDimension).toBe(10)
  })
  it('should allow dimension value to change', () => {
    const gameOfLife = useGameOfLifeStore()
    gameOfLife.setDimension(100)
    expect(gameOfLife.getDimension).toBe(100)
  })
  it('should create an array using the dimension', () => {
    const gameOfLife = useGameOfLifeStore()
    expect(gameOfLife.cellList.length).toBe(100)
  })
  it('should update cellList when dimension is updated', () => {
    const gameOfLife = useGameOfLifeStore()
    gameOfLife.setDimension(100)
    expect(gameOfLife.cellList.length).toBe(10000)
  })
})
