import { Component, h, State, Element, Prop, Watch, Listen } from '@stencil/core';
import { AV_API_KEY } from '../../global/global'
@Component({
  tag: 'uc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput: HTMLInputElement
  // initialStockSymbol: string

  @Element() el: HTMLElement

  @State() fetchedPrice: number
  @State() stockUserInput: string
  @State() stockInputValid = false
  @State() error: string

  @Prop({ mutable: true, reflect: true }) stockSymbol: string

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue
      this.stockInputValid = true
      this.fetchStockPrice(newValue)
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault()
    this.stockSymbol = this.stockInput.value
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true
    } else {
      this.stockInputValid = false
    }
  }

  componentWillLoad() {
    console.log('componentWillLoad')
    console.log(this.stockSymbol)
  }

  componentDidLoad() {
    if (this.stockSymbol) {
      // this.initialStockSymbol = this.stockSymbol
      this.stockUserInput = this.stockSymbol
      this.stockInputValid = true
      this.fetchStockPrice(this.stockSymbol)
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    // if (this.stockSymbol !== this.initialStockSymbol) {
    //   this.fetchStockPrice(this.stockSymbol)
    //   this.initialStockSymbol = this.stockSymbol
    // }
  }

  componentDidUnload() {
    console.log('componentDidUnload')
  }

  @Listen('body:ucSymbolSelected')
  onStockSymbolSelected(event: CustomEvent) {
    console.log('onStockSymbolSelected', event.detail)
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail
    }
  }


  fetchStockPrice(stockSymbol: string) {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => {
        return res.json()
      })
      .then(parsedRes => {
        console.log(parsedRes)
        if (!parsedRes['Global Quote'] || !parsedRes['Global Quote']['05. price']) {
          throw new Error('Invalid Symbol')
        }
        this.fetchedPrice = +parsedRes['Global Quote']['05. price']
        this.error = null
      })
      .catch( err => {
        this.error = err.message
      })
  }
  render() {
    let dataContent = <p>Please enter a symbol</p>
    if (this.error) {
      dataContent = <p>{this.error}</p>
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>
    }

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
        {dataContent}
      </div>
    ]
  }
}