import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LifeGrid from './LifeGrid.vue'

describe('LifeGrid', () => {
  it('renders properly', () => {
    const wrapper = mount(LifeGrid, { props: { dimension: 1 } })
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should show a 20x20 grid', () => {
    const wrapper = mount(LifeGrid, { props: { dimension: 20 } })
    expect(wrapper.findAllComponents('[data-test="life-cell-component"]').length).toBe(400)
  })
})
