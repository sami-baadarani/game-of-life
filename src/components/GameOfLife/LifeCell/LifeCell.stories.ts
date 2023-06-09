import LifeCell from './LifeCell.vue'

export default {
  title: 'GameOfLife/LifeCell',
  component: LifeCell,
  tags: ['GameOfLife', 'LifeCell'],
  decorators: [
    () => ({
      template: `
      <div style="width: 100px; height: 100px;">
        <story />
      </div>
      `
    })
  ]
}

export const Alive = {
  args: {
    isAlive: true
  }
}

export const Dead = {
  args: {
    isAlive: false
  }
}
