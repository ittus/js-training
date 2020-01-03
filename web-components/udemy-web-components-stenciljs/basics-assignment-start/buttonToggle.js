class ButtonToggle extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._isHidden = true
    this.shadowRoot.innerHTML = `
      <style>
        #info-box {
          display: none;
        }
      </style>
      <button>Show</button>
      <p id="info-box">More infos!</p>
    `
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('button')
    button.addEventListener('click', this._toggleVisible.bind(this))
  }

  _toggleVisible() {
    this._isHidden = !this._isHidden
    const infoEl = this.shadowRoot.querySelector('#info-box')
    const button = this.shadowRoot.querySelector('button')
    if (!this._isHidden) {
      infoEl.style.display = 'block';
      button.textContent = 'Hide';
    } else {
      infoEl.style.display = 'none';
      button.textContent = 'Show';
    }
  }
}

customElements.define('button-toggle', ButtonToggle)