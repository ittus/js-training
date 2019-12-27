import { User } from './models/User';

const user = new User({name: 'Java', age: 27})
user.sync.save()
