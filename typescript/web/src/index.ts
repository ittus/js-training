import { User } from './models/User';

const user = new User({ id: 1, name: 'amazing', age: 22})
// console.log(user.get('name'))
user.on('save', () => {
  console.log('user was saved', user)
})

user.save()