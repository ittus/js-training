import { Sorter } from './Sorter'
export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super()
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
  get length(): number {
    return this.data.length
  }
}
