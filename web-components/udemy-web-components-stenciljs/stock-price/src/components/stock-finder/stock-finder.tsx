import { Component, h, State, Element, Prop, Watch, EventEmitter, Event } from '@stencil/core';
import { AV_API_KEY } from '../../global/global'

@Component({
  tag: 'uc-stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true
})
export class StockFinder {
  stockNameInput: HTMLInputElement

  @State() searchResults: { symbol: string, name: string }[] = []
  @State() loading: boolean = false

  @Event({bubbles: true, composed: true}) ucSymbolSelected: EventEmitter<string>

  onFindStock(event: Event) {
    this.loading = true
    event.preventDefault()
    const stockName = this.stockNameInput.value
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes)
        this.searchResults = parsedRes.bestMatches.map(match => {
          return {
            name: match['2. name'],
            symbol: match['1. symbol']
          }
        })
        this.loading = false
      })
      .catch(err => {
        console.error(err)
        this.loading = false
      })
  }

  onSelectSymbol(symbol: string) {
    this.ucSymbolSelected.emit(symbol)
  }
  render() {
    let content = <ul>
    {this.searchResults.map(result => (
      <li onClick={this.onSelectSymbol.bind(this, result.symbol)}><strong>{result.symbol}</strong> - { result.name }</li>
    ))}
    </ul>
    if (this.loading) {
      content = <uc-spinner></uc-spinner>
    }
    return [
      <form onSubmit={this.onFindStock.bind(this)}>
        <input
          type="text"
          id="stock-symbol"
          ref={el => this.stockNameInput = el}

        />
        <button type="submit">Find</button>
      </form>,
      content
    ]
  }
}