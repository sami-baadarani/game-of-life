import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameOfLifeStore } from '@/stores/gameOfLife'

describe('GameOfLife', () => {
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
  it('should toggle cell value at given index', () => {
    const gameOfLife = useGameOfLifeStore()
    gameOfLife.toggleCell(5)
    expect(gameOfLife.cellList[5]).toBe(true)
  })

  describe('GameOfLife - Cell evaluation', () => {
    it('should get all alive neighbors', () => {
      const gameOfLife = useGameOfLifeStore()
      gameOfLife.setDimension(3)
      gameOfLife.cellList = [false, true, false, true, false, true, false, true, false]
      const neighbors = gameOfLife.getNeighbors(4)
      expect(neighbors).toEqual([true, true, true, true])
    })
    it('should get all dead neighbors', () => {
      const gameOfLife = useGameOfLifeStore()
      gameOfLife.setDimension(3)
      gameOfLife.cellList = [true, false, true, false, true, false, true, false, true]
      const neighbors = gameOfLife.getNeighbors(4)
      expect(neighbors).toEqual([false, false, false, false])
    })
    it('should get all dead neighbors on extremities and alive neighbors elsewhere', () => {
      const gameOfLife = useGameOfLifeStore()
      gameOfLife.setDimension(3)
      gameOfLife.cellList = [true, true, true, true, true, false, true, false, true]
      const neighbors = gameOfLife.getNeighbors(0)
      expect(neighbors).toEqual([false, true, true, false])
    })
    it('should kill a cell with less than 2 neighbors alive', () => {
      const gameOfLife = useGameOfLifeStore()
      gameOfLife.setDimension(3)
      gameOfLife.evaluateCell(1)
      expect(gameOfLife.cellList[1]).toBe(false)
    })
    it('should kill a cell with more than 3 neighbors alive', () => {
      const gameOfLife = useGameOfLifeStore()
      gameOfLife.setDimension(3)
      gameOfLife.cellList = [true, true, true, true, true, true, true, true, true]
      gameOfLife.evaluateCell(4)
      expect(gameOfLife.cellList[4]).toBe(false)
    })
    it('should keep a cell alive with 2 or 3 neighbors alive', () => {
      const gameOfLife = useGameOfLifeStore()
      gameOfLife.setDimension(3)
      gameOfLife.cellList = [true, true, true, false, true, false, true, true, true]
      gameOfLife.evaluateCell(4)
      expect(gameOfLife.cellList[4]).toBe(true)
    })
  })
})
