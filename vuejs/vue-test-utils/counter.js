// counter.js

export default {
  template: `
    <div @contextmenu="contextMenuClick">
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,

  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
      this.count++
    },
    contextMenuClick() {
      console.log('Context menu is click')
    }
  }
}
