import LifeGrid from './LifeGrid.vue'

export default {
  title: 'GameOfLife/LifeGrid',
  component: LifeGrid,
  tags: ['GameOfLife', 'LifeGrid'],
  argTypes: {
    dimension: 0
  }
}

export const twenty = {
  args: {
    dimension: 20
  }
}

export const oneHundred = {
  args: {
    dimension: 100
  }
}
