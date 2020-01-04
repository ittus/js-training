import { Component, h, State, Element, Prop, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'uc-spinner',
  styleUrl: './spinner.css',
  shadow: true
})
export class Spinner {
  render() {
    return (
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
  }
}