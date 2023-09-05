import React,{useContext} from 'react'
import { UserContext } from './UserProvider'


function UserList() {
    const users = useContext(UserContext)
  return (
   <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {users.map(user=>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                </tr>
        ))}
    </tbody>
   </table>
  )
}

export default UserList