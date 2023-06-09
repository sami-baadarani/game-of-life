import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LifeCell from './LifeCell.vue'

describe('Cell', () => {
  it('renders properly', () => {
    const wrapper = mount(LifeCell, { props: { isAlive: false } })
    expect(wrapper.exists()).toBeTruthy()
  })

  it("should show alive class when it's alive", () => {
    const wrapper = mount(LifeCell, { props: { isAlive: true } })
    expect(wrapper.classes()).toContain('alive')
    expect(wrapper.classes()).toContain('dead')
  })

  // at this point the cell is not yellow yet
})
