import { User } from './models/User';

const user = new User({id: 1})
user.fetch()
user.set({ name: 'Thang Vu', age: 30 })
user.save()

const user2 = new User({name: 'John', age: 8888})
user2.save()