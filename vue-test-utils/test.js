// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import Counter from './counter'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const contextMenuClick = sinon.spy()
  const wrapper = mount(Counter, {
    methods: {
      contextMenuClick: contextMenuClick
    }
  })

  it('contextmenu should be called', () => {
    wrapper.trigger('contextmenu')
    expect(contextMenuClick.calledOnce).toBe(true)
  })
})
