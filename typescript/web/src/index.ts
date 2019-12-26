import { User } from './models/User'
const user = new User({ name: 'Thang', age: 27 })
user.set({ name: 'Google' })
console.log(user.get('name'))
