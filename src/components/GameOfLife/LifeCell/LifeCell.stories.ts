import LifeCell from './LifeCell.vue'

// import { action } from '@storybook/addon-actions'

export default {
  title: 'GameOfLife/LifeCell',
  component: LifeCell,
  tags: ['GameOfLife', 'LifeCell'],
  argTypes: {
    isAlive: false
  },
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
