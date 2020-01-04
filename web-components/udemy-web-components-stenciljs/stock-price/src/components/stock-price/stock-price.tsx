import { Component, h, State, Element } from '@stencil/core';
import { AV_API_KEY } from '../../global/global'
@Component({
  tag: 'uc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement

  @Element() el: HTMLElement

  @State() fetchedPrice: number
  @State() stockUserInput: string
  @State() stockInputValid = false

  onFetchStockPrice(event: Event) {
    event.preventDefault()

    // const stockSymbol = this.stockInput.value
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockUserInput}&apikey=${AV_API_KEY}`)
      .then(res => {
        return res.json()
      })
      .then(parsedRes => {
        console.log(parsedRes)
        this.fetchedPrice = +parsedRes['Global Quote']['05. price']
      })
      .catch( err => {
        console.log(err)
      })
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true
    } else {
      this.stockInputValid = false
    }
  }
  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          type="text"
          id="stock-symbol"
          ref={el => this.stockInput = el}
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
      </form>,
      <div>
        <p>Price: ${this.fetchedPrice}</p>
      </div>
    ]
  }
}