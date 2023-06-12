import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameOfLifeStore } from '@/stores/gameOfLife'

import { mount } from '@vue/test-utils'
import LifeGrid from './LifeGrid.vue'

describe('LifeGrid', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})
	it('renders properly', () => {
		const wrapper = mount(LifeGrid)
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should show a 20x20 grid', async () => {
		const wrapper = mount(LifeGrid)
		const gameOfLife = useGameOfLifeStore()
		await gameOfLife.setDimension(20)
		expect(wrapper.findAllComponents('[data-test="life-cell-component"]').length).toBe(400)
	})
})
