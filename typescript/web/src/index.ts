import { User, UserProps } from './models/User';
import UserEdit from './views/UserEdit';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

// const user = User.buildUser({ name: 'NAME', age: 20})
// const root = document.getElementById('root')
// if (root) {
//   const userEdit = new UserEdit(root, user)
//   userEdit.render()
// } else {
//   throw new Error('Root element not found')
// }


const users = new Collection('http://localhost:3000/users', (json: UserProps) => User.buildUser(json))
users.on('change', () => {
  const root = document.getElementById('root')
  if (root) {
    const userList = new UserList(root, users)
    userList.render()
  }
})
users.fetch()

