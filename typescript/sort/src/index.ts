import { LinkedList } from './LinkedList'
import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { CharactersCollection } from './CharactersCollection'

// const numbersCollection = new NumberCollection([10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection('Xaayb')
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

const sorter = new Sorter(linkedList)
sorter.sort()

linkedList.print()
