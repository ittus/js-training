import { h, Component, Prop, State } from '@stencil/core'

@Component({
  tag: 'uc-tooltip',
  styleUrl: './uc-tooltip.css',
  shadow: true
})
export class Tooltip {
  @State() isShow: boolean

  onTriggerClick() {
    this.isShow = !this.isShow
  }
  render() {
    return (
      <span class="tooltip-container">
        <slot></slot>
        <span class="trigger">
          <span class="icon" onClick={this.onTriggerClick.bind(this)}>?</span>

          <div class={"tooltip " + (this.isShow ? 'show' : '')}>
            <slot name="content">
            </slot>
          </div>
        </span>

      </span>
    )
  }
}