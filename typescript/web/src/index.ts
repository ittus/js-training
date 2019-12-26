import { User } from './models/User'
const user = new User({ name: 'Thang', age: 27 })
user.on('change', () => {
  console.log('change')
})
console.log(user)
user.trigger('change')
