import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LifeCell from './LifeCell.vue'

describe('LifeCell', () => {
  it('renders properly', () => {
    const wrapper = mount(LifeCell, { props: { isAlive: false } })
    expect(wrapper.exists()).toBeTruthy()
  })

  it("should show alive class when it's alive", () => {
    const wrapper = mount(LifeCell, { props: { isAlive: true } })
    expect(wrapper.classes()).toContain('alive')
  })
  it("should not show alive class when it's not alive", () => {
    const wrapper = mount(LifeCell, { props: { isAlive: false } })
    expect(wrapper.classes()).not.toContain('alive')
  })

  it('if it was not alive, it should become alive when clicked', () => {
    const wrapper = mount(LifeCell, { props: { isAlive: false } })
    expect(wrapper.classes()).not.toContain('alive')
  })
})
