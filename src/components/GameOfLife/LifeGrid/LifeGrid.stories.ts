import LifeGrid from './LifeGrid.vue'

// import { action } from '@storybook/addon-actions'

export default {
  title: 'GameOfLife/LifeGrid',
  component: LifeGrid,
  tags: ['GameOfLife', 'LifeGrid'],
  argTypes: {
    dimension: 0
  }
  //   decorators: [
  //     () => ({
  //       template: `
  //       <div style="width: 100px; height: 100px;">
  //         <story />
  //       </div>
  //       `
  //     })
  //   ]
}

export const twenty = {
  args: {
    dimension: 20
  }
}

export const oneHundered = {
  args: {
    dimension: 100
  }
}
